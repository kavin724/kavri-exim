import fs from 'fs';
import sharp from 'sharp';

// Direct Unsplash IDs:
// Luxury hotel white rolled/stacked towels:
// photo-1616627547584-bf28cee262db or photo-1584100936595-c0654b55a2e2 or photo-1563245372-f21724e3856d
const towelUrl = 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1200&q=85';

async function downloadTowel() {
  try {
    const res = await fetch(towelUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await sharp(buffer)
      .resize(1200, 896, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile('public/assets/images/terry-towels-candidate.jpg');
    console.log('Successfully downloaded candidate towel image!');
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}

downloadTowel();
