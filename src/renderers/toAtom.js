const differentNodes = ['description', 'link', 'items', 'guid'];

const nodeRenderers = {
  description: content => `<subtitle>${content}</subtitle>`,
  link: href => `<link href="${href}"/>`,
  items: items => items.map(e => `<entry>${astToAtom(e)}</entry>`).join(''),
  guid: ({ text }) => `<id>${text}</id>`,
  default: (key, content) => `<${key}>${content}</${key}>`
}

const astToAtom = ast =>
  Object.keys(ast)
    .map(key => differentNodes.includes(key) ? nodeRenderers[key](ast[key]) : nodeRenderers.default(key, ast[key]))
    .join('');

const toAtom = ast => {
  const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
  const atomHeader = '<feed xmlns="http://www.w3.org/2005/Atom">'

  return [
    xmlHeader,
    atomHeader,
    astToAtom(ast),
    '</feed>'
  ].join('');
}

export default toAtom;