async function listTowelSubcats() {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Bath_towels&cmlimit=20&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': 'KavriExim/1.0 (trade@kavriexim.com)' } });
  const data = await res.json();
  console.log('Bath towels members:', data.query?.categorymembers?.map(m => m.title));
}
listTowelSubcats();
