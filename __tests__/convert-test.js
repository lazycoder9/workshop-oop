import nock from 'nock';
import fs from 'fs';
import Converter from '../src';

test('RSS to Atom', async () => {
  const rss = '__tests__/fixtures/rss.xml';
  const atom = '__tests__/fixtures/atom.xml'

  const expected = fs.readFileSync(atom, 'utf-8').split('\n').map(e => e.trim()).join('');
  const actual = await new Converter().convert(rss, 'atom');

  expect(actual).toBe(expected);
});

test('Atom to RSS', async () => {
  const rss = '__tests__/fixtures/rss.xml';
  const atom = '__tests__/fixtures/atom.xml'

  const expected = fs.readFileSync(rss, 'utf-8').split('\n').map(e => e.trim()).join('');
  const actual = await new Converter().convert(atom);

  expect(actual).toBe(expected);
});

test('RSS from url to Atom', async () => {
  const rss = '__tests__/fixtures/rss.xml';
  const atom = '__tests__/fixtures/atom.xml'
  const rssData = fs.readFileSync(rss, 'utf-8');

  nock('https://ru.hexlet.io')
    .get('/lessons.rss')
    .reply(200, rssData);

  const url = 'https://ru.hexlet.io/lessons.rss';
  
  const expected = fs.readFileSync(atom, 'utf-8').split("\n").map(e => e.trim()).join('');
  const actual = await new Converter().convert(url, 'atom');

  expect(actual).toBe(expected);
});
