import sharp from 'sharp';

async function downloadTowelCandidates() {
  const files = ['Towel_Stack_(3249473893).jpg', 'Zusammengelegte_Handtücher.jpg'];
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${files.join('|File:')}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetch(apiUrl, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  
  for (const pageId in data.query.pages) {
    const page = data.query.pages[pageId];
    const url = page.imageinfo[0].url;
    console.log(page.title, '=>', url);
    const imgRes = await fetch(url, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    await sharp(buffer)
      .resize(1200, 900, { fit: 'cover' })
      .jpeg({ quality: 92 })
      .toFile(`public/assets/images/${page.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`);
  }
}
downloadTowelCandidates();
