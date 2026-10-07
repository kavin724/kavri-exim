import sharp from 'sharp';
import fs from 'fs';

async function blurTextRegion() {
  const region = await sharp('public/assets/images/terry-towels.jpg')
    .extract({ left: 450, top: 340, width: 430, height: 120 })
    .blur(14)
    .toBuffer();

  await sharp('public/assets/images/terry-towels.jpg')
    .composite([
      {
        input: region,
        top: 340,
        left: 450
      }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/assets/images/terry-towels-clean.jpg');

  fs.copyFileSync('public/assets/images/terry-towels-clean.jpg', 'public/assets/images/terry-towels.jpg');
  console.log('Successfully updated terry-towels.jpg!');
}

blurTextRegion();
