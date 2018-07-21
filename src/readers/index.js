import FileReader from './FileReader';
import HttpReader from './HttpReader';

const isUrl = source => source.indexOf('http') !== -1;

export default (source) => {
  const C = isUrl(source) ? HttpReader : FileReader;
  return new C(source);
}