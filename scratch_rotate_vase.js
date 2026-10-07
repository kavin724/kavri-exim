import sharp from 'sharp';

async function searchAndProcess() {
  // 1. Rotate flower-vases.jpg so it stands upright
  await sharp('public/assets/images/flower-vases.jpg')
    .rotate(270)
    .resize(1200, 900, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92 })
    .toFile('public/assets/images/flower-vases-upright.jpg');

  // Replace flower-vases.jpg
  await sharp('public/assets/images/flower-vases-upright.jpg')
    .toFile('public/assets/images/flower-vases.jpg');
  console.log('Rotated flower vases upright!');

  // 2. Search Wikimedia for wall hanging decor
  const searchUrl = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch="wall+hanging"+OR+"wall+decor"+craft+India&srnamespace=6&format=json';
  const res = await fetch(searchUrl, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Search results:', data.query.search.map(s => s.title));
}

searchAndProcess();
