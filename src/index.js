import fs from 'fs';
import parse from './parser';
import getRenderer from './renderers';

export default (source, format = 'rss') => {
  const data = fs.readFileSync(source, 'utf-8');
  const render = getRenderer(format);
  const { type, ...parsedData } = parse(data);
  return render(parsedData);
};
