import sharp from 'sharp';

async function duplicateCleanFoldsSeamless() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Target: y = 320 to 515 (Fold 1 & 2 only)
  // Source: y = 545 to 740 (Fold 3 & 4) -> yOffset = 225
  const yOffset = 225;

  for (let y = 320; y <= 515; y++) {
    for (let x = 440; x <= 890; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcY = y + yOffset;
      const srcIdx = (srcY * width + x) * channels;

      const distL = x - 440;
      const distR = 890 - x;
      const distT = y - 320;
      const distB = 515 - y;
      const dist = Math.min(distL, distR, distT, distB);
      const t = Math.min(1, Math.max(0, dist / 12));
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

  // Fix white patch on bottom-left roll
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
    .toFile('public/assets/images/terry-towels-clean.jpg');

  console.log('Saved seamless clean terry-towels-clean.jpg up to 515!');
}

duplicateCleanFoldsSeamless();
