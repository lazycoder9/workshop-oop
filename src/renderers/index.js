import AtomRenderer from './AtomRenderer';
import RssRenderer from './RssRenderer';

const renderers = {
  rss: RssRenderer,
  atom: AtomRenderer
};

export default format => new renderers[format];
