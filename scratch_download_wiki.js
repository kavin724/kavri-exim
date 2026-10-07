import fs from 'fs';
import sharp from 'sharp';

async function downloadWikiImage(fileName, outputName, width = 1200, height = 900) {
  // Use Wikimedia API to get the exact imageinfo URL
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  
  const headers = {
    'User-Agent': 'KavriEximBot/1.0 (https://kavriexim.com; trade@kavriexim.com)'
  };

  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  const imgUrl = pages[pageId].imageinfo[0].url;
  console.log(`Downloading ${fileName} from: ${imgUrl}`);

  const imgRes = await fetch(imgUrl, { headers });
  const arrayBuffer = await imgRes.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await sharp(buffer)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90 })
    .toFile(`public/assets/images/${outputName}`);
  console.log(`Saved public/assets/images/${outputName}`);
}

async function run() {
  try {
    // 1. Thanjavur Bommai
    await downloadWikiImage('A_Tanjore_doll.jpg', 'thanjavur-bommai.jpg');
    // 2. Flower Vases
    await downloadWikiImage('Old_Terracotta_flower_vase.jpg', 'flower-vases.jpg');
    // 3. Wall Hanging Decor
    await downloadWikiImage('Wall_hanging_craft.jpg', 'wall-hanging-decor.jpg');
    console.log('All images downloaded successfully!');
  } catch (err) {
    console.error('Error downloading:', err);
  }
}

run();
