import sharp from 'sharp';

async function finalTouchClean() {
  const { data, info } = await sharp('public/assets/images/terry-towels-clean.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Spot 1: x: 655..725, y: 445..505
  for (let y = 445; y <= 505; y++) {
    for (let x = 655; x <= 725; x++) {
      const targetIdx = (y * width + x) * channels;
      // sample from clean texture to the left: x - 85
      const srcIdx = (y * width + (x - 85)) * channels;
      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = data[srcIdx + c];
      }
    }
  }

  // Spot 2: x: 540..590, y: 500..560
  for (let y = 500; y <= 560; y++) {
    for (let x = 540; x <= 590; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcIdx = (y * width + (x - 60)) * channels;
      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = data[srcIdx + c];
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-clean.jpg');

  console.log('Saved final clean terry-towels-clean.jpg!');
}

finalTouchClean();
