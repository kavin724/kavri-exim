import sharp from 'sharp';

async function finishTerry() {
  const { data, info } = await sharp('public/assets/images/terry-towels-fixed.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Target: the remaining patch x: 580..720, y: 365..485
  // Source: clean right side of top fold: x: 745..860, y: 365..485 (xOffset = +140)
  for (let y = 365; y <= 485; y++) {
    for (let x = 580; x <= 725; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcX = Math.min(width - 50, x + 130);
      const srcY = y;
      const srcIdx = (srcY * width + srcX) * channels;

      const distL = x - 580;
      const distR = 725 - x;
      const distT = y - 365;
      const distB = 485 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const blend = Math.min(1, dist / 10);

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-fixed2.jpg');

  console.log('Saved terry-towels-fixed2.jpg!');
}

finishTerry();
