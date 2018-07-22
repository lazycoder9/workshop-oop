export default class {
  astToAtom(ast) {
    const differentNodes = ['description', 'link', 'items', 'guid'];
    const nodeRenderers = {
      description: content => `<subtitle>${content}</subtitle>`,
      link: href => `<link href="${href}"/>`,
      items: items => items.map(e => `<entry>${this.astToAtom(e)}</entry>`).join(''),
      guid: ({ text }) => `<id>${text}</id>`,
      default: (key, content) => `<${key}>${content}</${key}>`
    };

    return Object.keys(ast)
      .map(key => differentNodes.includes(key) ? 
                  nodeRenderers[key](ast[key]) :
                  nodeRenderers.default(key, ast[key]))
      .join('');
  }

  render(ast) {
    return [
      '<?xml version="1.0" encoding="utf-8"?>',
      '<feed xmlns="http://www.w3.org/2005/Atom">',
      this.astToAtom(ast),
      '</feed>'
    ].join('');
  }
}
