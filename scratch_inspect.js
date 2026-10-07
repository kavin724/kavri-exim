import sharp from 'sharp';

async function inspect() {
  const metadata = await sharp('public/assets/images/terry-towels.jpg').metadata();
  console.log('Terry towels metadata:', metadata);
}
inspect();
