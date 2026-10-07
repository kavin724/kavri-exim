import sharp from 'sharp';

async function processBommai() {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:Thanjavur_Doll.JPG|File:A_Tanjore_doll.jpg&prop=imageinfo&iiprop=url&format=json`;
  const headers = {
    'User-Agent': 'KavriEximBot/1.0 (trade@kavriexim.com)'
  };
  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  console.log(JSON.stringify(data.query.pages));
}
processBommai();
