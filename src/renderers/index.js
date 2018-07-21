import AtomRenderer from './AtomRenderer';
import toRss from './toRss';

const renderers = {
  rss: toRss,
  atom: AtomRenderer
};

export default format => renderers[format];
