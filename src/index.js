import parse from './parser';
import getRenderer from './renderers';
import getReader from './readers';

export default async (source, format = 'rss') => {
  const reader = getReader(source);
  const data = await reader.read();
  const render = getRenderer(format);
  const { type, ...parsedData } = parse(data);
  return render(parsedData);
};
