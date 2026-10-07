import sharp from 'sharp';

async function fixVaseAndSearch() {
  // Rotate 180 degrees from current state
  await sharp('public/assets/images/flower-vases.jpg')
    .rotate(180)
    .resize(1200, 900, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92 })
    .toFile('public/assets/images/flower-vases-fixed.jpg');

  await sharp('public/assets/images/flower-vases-fixed.jpg')
    .toFile('public/assets/images/flower-vases.jpg');
  console.log('Fixed vase rotation!');

  // Search for Indian wall decor
  const searchUrl = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=Tanjore+painting+relief+OR+panel&srnamespace=6&format=json';
  const res = await fetch(searchUrl, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Tanjore search:', data.query?.search?.map(s => s.title));

  const search2 = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=carved+wooden+door+India+OR+panel&srnamespace=6&format=json';
  const res2 = await fetch(search2, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data2 = await res2.json();
  console.log('Wood carving search:', data2.query?.search?.map(s => s.title));
}

fixVaseAndSearch();
