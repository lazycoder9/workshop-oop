export default class {
  astToAtom(ast) {
    const differentNodes = ['subtitle', 'link', 'items', 'id'];
    const nodeRenderers = {
      subtitle: content => `<description>${content}</description>`,
      link: ({ href }) => `<link>${href}</link>`,
      items: items => items.map(e => `<item>${this.astToAtom(e)}</item>`).join(''),
      id: guid => `<guid isPermaLink="false">${guid}</guid>`,
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
      '<rss version="2.0">',
      '<channel>',
      this.astToAtom(ast),
      '</channel>',
      '</rss>'
    ].join('');
  }
}
