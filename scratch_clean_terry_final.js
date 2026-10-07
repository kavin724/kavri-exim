import sharp from 'sharp';

async function cleanTerryTowels() {
  const { data, info } = await sharp('public/assets/images/terry-towels.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const output = Buffer.from(data);

  // Target area: top folded towel surface
  // y: 350 to 455, x: 460 to 760
  // Source area: third folded towel surface (which is completely clean and identical texture)
  // y: 620 to 725, x: 460 to 760
  const yOffset = 270; // 620 - 350

  for (let y = 350; y <= 455; y++) {
    for (let x = 460; x <= 760; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcY = y + yOffset;
      const srcX = x;
      const srcIdx = (srcY * width + srcX) * channels;

      // Feather at outer edges
      const distLeft = x - 460;
      const distRight = 760 - x;
      const distTop = y - 350;
      const distBottom = 455 - y;
      const dist = Math.min(distLeft, distRight, distTop, distBottom);
      const blend = Math.min(1, Math.max(0, dist / 16));

      // Slight brightness compensation (top fold is slightly brighter by ~3%)
      const factor = 1.03;

      for (let c = 0; c < 3; c++) {
        const srcVal = Math.min(255, data[srcIdx + c] * factor);
        output[targetIdx + c] = Math.round((1 - blend) * data[targetIdx + c] + blend * srcVal);
      }
    }
  }

  // Also clean the small bottle label on the bottom left:
  // x: 30 to 110, y: 640 to 730
  for (let y = 655; y <= 720; y++) {
    for (let x = 38; x <= 95; x++) {
      const targetIdx = (y * width + x) * channels;
      // sample from blank label paper right above
      const srcIdx = (650 * width + x) * channels;
      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = data[srcIdx + c];
      }
    }
  }

  // Also clean the small soap dish on the bottom right:
  for (let y = 780; y <= 825; y++) {
    for (let x = 905; x <= 985; x++) {
      const targetIdx = (y * width + x) * channels;
      const srcIdx = (830 * width + x) * channels;
      for (let c = 0; c < 3; c++) {
        output[targetIdx + c] = data[srcIdx + c];
      }
    }
  }

  await sharp(output, { raw: { width, height, channels } })
    .jpeg({ quality: 95 })
    .toFile('public/assets/images/terry-towels.jpg');

  console.log('Successfully cleaned terry-towels with authentic fold texture!');
}

cleanTerryTowels();
