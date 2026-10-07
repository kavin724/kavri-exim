import sharp from 'sharp';

async function removeNotches() {
  const { data, info } = await sharp('public/assets/images/terry-towels-pure.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Blend away the notches along y: 415..455, x: 440..800
  for (let y = 415; y <= 455; y++) {
    for (let x = 440; x <= 800; x++) {
      const targetIdx = (y * width + x) * channels;
      // sample from clean fold 2 at y: 500..540
      const srcY = y + 85;
      const srcIdx = (srcY * width + x) * channels;

      const distT = y - 415;
      const distB = 455 - y;
      const dist = Math.min(distT, distB);
      const blend = Math.min(1, dist / 8);

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-pure2.jpg');

  console.log('Notches removed!');
}

removeNotches();
