import sharp from 'sharp';

async function fetchUnsplashTowels() {
  const ids = ['n4t8-z7f3mQ', 'f64bce2f9cc5', '39d57e8d7538'];
  for (const id of ids) {
    try {
      const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&h=900&q=85`;
      console.log('Fetching:', url);
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      if (!res.ok) {
        console.log(`Failed ${id}: HTTP ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer)
        .resize(1200, 900, { fit: 'cover' })
        .jpeg({ quality: 92 })
        .toFile(`public/assets/images/towel-unsplash-${id.slice(0, 6)}.jpg`);
      console.log(`Saved towel-unsplash-${id.slice(0, 6)}.jpg!`);
    } catch (e) {
      console.error(e.message);
    }
  }
}
fetchUnsplashTowels();
