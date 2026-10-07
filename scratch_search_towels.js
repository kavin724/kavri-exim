async function searchTowels() {
  const apiUrl = 'https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Towels&cmtype=file&cmlimit=30&format=json';
  const res = await fetch(apiUrl, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Category Towels files:', data.query.categorymembers.map(m => m.title));
}
searchTowels();
