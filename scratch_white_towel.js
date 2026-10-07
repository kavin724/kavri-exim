async function searchTerry() {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=terry+towel&srnamespace=6&srlimit=20&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Results:', data.query?.search?.map(s => s.title));
}
searchTerry();
