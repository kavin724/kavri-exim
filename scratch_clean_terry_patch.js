import sharp from 'sharp';

async function cleanTerry() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Source: pristine white terry fluff from top rolled towel
  // x: 310..430, y: 250..320
  // Target: text area x: 570..730, y: 360..435
  for (let y = 360; y <= 435; y++) {
    for (let x = 570; x <= 730; x++) {
      const targetIdx = (y * width + x) * channels;
      
      const distL = x - 570;
      const distR = 730 - x;
      const distT = y - 360;
      const distB = 435 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const blend = Math.min(1, dist / 12);

      const srcX = 320 + ((x - 570) % 100);
      const srcY = 260 + ((y - 360) % 55);
      const srcIdx = (srcY * width + srcX) * channels;

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels.jpg');

  console.log('Terry towels cleaned successfully!');
}

cleanTerry();
