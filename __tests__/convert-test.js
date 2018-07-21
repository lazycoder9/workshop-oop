import nock from 'nock';
import convertFeed from '../src';

test('RSS to Atom', async () => {
  const rss = '__tests__/fixtures/rss.xml';

  const actual = await convertFeed(rss, 'atom');
  const expected = [
    '<?xml version="1.0" encoding="utf-8"?>', 
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    '<title>Example Feed</title>',
    '<subtitle>Insert witty or insightful remark here</subtitle>',
    '<link href="http://example.org/"/>',
    '<entry>',
    '<title>Atom-Powered Robots Run Amok</title>',
    '<link href="http://example.org/2003/12/13/atom03"/>',
    '<id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>',
    '</entry>',
    '</feed>'
  ].join('');

  expect(actual).toBe(expected);
});

test('RSS from url to Atom', async () => {
  const rssData = `<?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0">
    <channel>
      <title>Example Feed</title>
      <description>Insert witty or insightful remark here</description>
      <link>http://example.org/</link>
      <item>
        <title>Atom-Powered Robots Run Amok</title>
        <link>http://example.org/2003/12/13/atom03</link>
        <guid isPermaLink="false">urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</guid>
      </item>
    </channel>
  </rss>`;

  nock('https://ru.hexlet.io')
    .get('/lessons.rss')
    .reply(200, rssData);

  const url = 'https://ru.hexlet.io/lessons.rss';
  const actual = await convertFeed(url, 'atom');

  const expected = [
    '<?xml version="1.0" encoding="utf-8"?>', 
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    '<title>Example Feed</title>',
    '<subtitle>Insert witty or insightful remark here</subtitle>',
    '<link href="http://example.org/"/>',
    '<entry>',
    '<title>Atom-Powered Robots Run Amok</title>',
    '<link href="http://example.org/2003/12/13/atom03"/>',
    '<id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>',
    '</entry>',
    '</feed>'
  ].join('');

  expect(actual).toBe(expected);
});
