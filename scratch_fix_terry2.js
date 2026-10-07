import sharp from 'sharp';

async function fixTerry2() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Target: y: 350..470, x: 440..730
  // Source: Fold 3 (y: 580..700, x: 440..730), yOffset = 225
  for (let y = 350; y <= 470; y++) {
    for (let x = 440; x <= 730; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcY = y + 225;
      const srcX = x;
      const srcIdx = (srcY * width + srcX) * channels;

      const distL = x - 440;
      const distR = 730 - x;
      const distT = y - 350;
      const distB = 470 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const blend = Math.min(1, dist / 12);

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-fixed.jpg');

  console.log('Saved terry-towels-fixed.jpg with offset 225!');
}

fixTerry2();
