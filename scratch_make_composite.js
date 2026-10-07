import sharp from 'sharp';

async function makeComposite() {
  const colWidth = 400;
  const height = 800;

  const img1 = await sharp('public/assets/images/thanjavur-bommai.jpg')
    .resize(colWidth, height, { fit: 'cover', position: 'top' })
    .toBuffer();

  const img2 = await sharp('public/assets/images/flower-vases.jpg')
    .resize(colWidth, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  const img3 = await sharp('public/assets/images/wall-hanging-decor.jpg')
    .resize(colWidth, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 800,
      channels: 3,
      background: { r: 245, g: 247, b: 250 }
    }
  })
    .composite([
      { input: img1, left: 0, top: 0 },
      { input: img2, left: colWidth, top: 0 },
      { input: img3, left: colWidth * 2, top: 0 }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/assets/images/modern-home-decor.jpg');

  console.log('Saved modern-home-decor.jpg composite!');
}

makeComposite();
