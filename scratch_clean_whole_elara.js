import sharp from 'sharp';

async function cleanWholeElara() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // The text extends from x = 550 all the way to x = 860, y = 355 to 450.
  // We can sample clean plush towel texture from the top rolled towel (x: 280..440, y: 240..330)
  for (let y = 350; y <= 455; y++) {
    for (let x = 550; x <= 870; x++) {
      const targetIdx = (y * width + x) * channels;

      const distL = x - 550;
      const distR = 870 - x;
      const distT = y - 350;
      const distB = 455 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const blend = Math.min(1, dist / 12);

      // Sample from top roll
      const srcX = 280 + ((x - 550) % 150);
      const srcY = 245 + ((y - 350) % 80);
      const srcIdx = (srcY * width + srcX) * channels;

      // Slight brightness match for top fold
      const factor = 0.98;

      for (let c = 0; c < 3; c++) {
        const val = Math.min(255, data[srcIdx + c] * factor);
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * val);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels.jpg');

  console.log('Covered full width 550..870!');
}

cleanWholeElara();
