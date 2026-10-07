import sharp from 'sharp';

async function fixTerry() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Target: y: 370..480, x: 460..710
  // Source: bottom towel fold y: 710..820, x: 460..710 (yOffset = 340)
  for (let y = 370; y <= 480; y++) {
    for (let x = 460; x <= 710; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcY = Math.min(height - 10, y + 340);
      const srcX = x;
      const srcIdx = (srcY * width + srcX) * channels;

      const distL = x - 460;
      const distR = 710 - x;
      const distT = y - 370;
      const distB = 480 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const blend = Math.min(1, dist / 15);

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-fixed.jpg');

  console.log('Saved terry-towels-fixed.jpg!');
}

fixTerry();
