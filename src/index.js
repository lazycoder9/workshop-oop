import parse from './parser';
import getRenderer from './renderers';
import getReader from './readers';

export default class {
  async convert(source, format = 'rss') {
    const data = await getReader(source).read();
    const { type, ...parsedData } = parse(data);
    return getRenderer(format).render(parsedData);
  }
}
