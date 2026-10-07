import sharp from 'sharp';

async function fetchFrotex() {
  const fileName = 'Frotex_Prudnik_-_ręczniki_Kamila_01.jpg';
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  const headers = { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' };
  
  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  const imgUrl = pages[pageId].imageinfo[0].url;
  console.log('Frotex URL:', imgUrl);

  const imgRes = await fetch(imgUrl, { headers });
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  await sharp(buffer)
    .resize(1200, 900, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile('public/assets/images/terry-towels-frotex.jpg');
  console.log('Saved terry-towels-frotex.jpg');
}

fetchFrotex();
