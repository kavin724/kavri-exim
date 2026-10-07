import sharp from 'sharp';

async function perfectCleanTowel() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const outputData = Buffer.from(data);

  // The text region is x: 530 to 740, y: 350 to 460
  // Clean source region on the right of the towel: x: 770 to 850
  for (let y = 350; y <= 460; y++) {
    for (let x = 530; x <= 745; x++) {
      const targetIdx = (y * width + x) * channels;
      
      const edgeDistX = Math.min(x - 530, 745 - x);
      const edgeDistY = Math.min(y - 350, 460 - y);
      const dist = Math.min(edgeDistX, edgeDistY);
      const blend = Math.min(1, dist / 10);

      // Always sample from the clean right side [775..845]
      const srcX = 775 + ((x - 530) % 70);
      const srcY = y;
      const srcIdx = (srcY * width + srcX) * channels;

      for (let c = 0; c < 3; c++) {
        const srcVal = data[srcIdx + c];
        outputData[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * srcVal);
      }
    }
  }

  await sharp(outputData, { raw: { width, height, channels } })
    .jpeg({ quality: 95 })
    .toFile('public/assets/images/terry-towels.jpg');

  console.log('Cleaned text completely without copying any letters!');
}

perfectCleanTowel();
