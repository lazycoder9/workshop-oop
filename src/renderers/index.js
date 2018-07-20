import toAtom from './toAtom';
import toRss from './toRss';

const renderers = {
  rss: toRss,
  atom: toAtom
};

export default format => renderers[format];
