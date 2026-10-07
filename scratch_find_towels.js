async function findTowels() {
  const searchUrl = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch="folded+towels"+OR+"white+towels"+hotel+OR+bath&srnamespace=6&srlimit=20&format=json';
  const res = await fetch(searchUrl, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Towels search:', data.query?.search?.map(s => s.title));
}
findTowels();
