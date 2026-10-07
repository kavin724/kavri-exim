import sharp from 'sharp';

async function copyFold2ToFold1Seamless() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Exact target: only the upper face of Fold 1 (y: 335..425, x: 440..885)
  // Source: upper face of Fold 2 (y: 450..540, x: 440..885) -> yOffset = 115
  const yOffset = 115;

  for (let y = 335; y <= 425; y++) {
    for (let x = 440; x <= 885; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcY = y + yOffset;
      const srcX = x;
      const srcIdx = (srcY * width + srcX) * channels;

      const distL = x - 440;
      const distR = 885 - x;
      const distT = y - 335;
      const distB = 425 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const t = Math.min(1, Math.max(0, dist / 15));
      const blend = t * t * (3 - 2 * t);

      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * data[srcIdx + c]);
      }
    }
  }

  // Clear bottle text at bottom left
  for (let y = 660; y <= 718; y++) {
    for (let x = 42; x <= 92; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcIdx = (650 * width + x) * channels;
      for (let c = 0; c < 3; c++) output[targetIdx + c] = data[srcIdx + c];
    }
  }

  // Clear soap dish text at bottom right
  for (let y = 785; y <= 815; y++) {
    for (let x = 905; x <= 985; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcIdx = (830 * width + x) * channels;
      for (let c = 0; c < 3; c++) output[targetIdx + c] = data[srcIdx + c];
    }
  }

  // Clean the small white patch on bottom-left roll
  for (let y = 715; y <= 820; y++) {
    for (let x = 20; x <= 85; x++) {
      const targetIdx = (y * width + x) * channels;
      if (data[targetIdx] > 230 && data[targetIdx + 1] > 230 && data[targetIdx + 2] > 230) {
        const srcIdx = ((y - 85) * width + x) * channels;
        for (let c = 0; c < 3; c++) output[targetIdx + c] = data[srcIdx + c];
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-pure.jpg');

  console.log('Saved perfect terry-towels-pure.jpg!');
}

copyFold2ToFold1Seamless();
