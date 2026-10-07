import sharp from 'sharp';

async function downloadWallDecor() {
  const fileName = 'WLA_haa_Carved_Wooden_Doors_South_India_ca_18th_century.jpg';
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  const headers = { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' };
  
  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  const imgUrl = pages[pageId].imageinfo[0].url;
  console.log(`Downloading from: ${imgUrl}`);

  const imgRes = await fetch(imgUrl, { headers });
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  await sharp(buffer)
    .resize(1200, 900, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92 })
    .toFile('public/assets/images/wall-hanging-decor.jpg');
  console.log('Saved wall-hanging-decor.jpg');
}

downloadWallDecor();
