import fs from 'fs';
import { fromXML } from 'from-xml';

const parse = (xml) => {
  return fromXML(xml);
};

export default (source, format) => {
  const data = fs.readFileSync(source, 'utf-8');
  return parse(data);
};
