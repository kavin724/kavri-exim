import sharp from 'sharp';

async function downloadWiki(fileName, outputName, opts = { width: 1200, height: 900 }) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  const headers = { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' };
  
  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  const imgUrl = pages[pageId].imageinfo[0].url;
  console.log(`Downloading ${fileName} from: ${imgUrl}`);

  const imgRes = await fetch(imgUrl, { headers });
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  await sharp(buffer)
    .resize(opts.width, opts.height, { fit: 'cover', position: opts.position || 'center' })
    .jpeg({ quality: 92 })
    .toFile(`public/assets/images/${outputName}`);
  console.log(`Saved public/assets/images/${outputName}`);
}

async function run() {
  try {
    // 1. Thanjavur Bommai: Thanjavur_Doll.JPG
    await downloadWiki('Thanjavur_Doll.JPG', 'thanjavur-bommai.jpg', { width: 1200, height: 900, position: 'top' });
    // 2. Flower Vases: Blue_Pottery_Designer_Vase.jpg
    await downloadWiki('Blue_Pottery_Designer_Vase.jpg', 'flower-vases.jpg', { width: 1200, height: 900, position: 'center' });
    // 3. Wall Hanging Decor: Tanjore_art.jpg
    await downloadWiki('Tanjore_art.jpg', 'wall-hanging-decor.jpg', { width: 1200, height: 900, position: 'center' });

    // Also create modern-home-decor.jpg from one of these or composite
    await sharp('public/assets/images/flower-vases.jpg')
      .toFile('public/assets/images/modern-home-decor.jpg');
    console.log('Saved modern-home-decor.jpg');
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
