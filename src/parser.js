import FeedMe from 'feedme';

export default (data) => {
  const parser = new FeedMe(true);
  parser.write(data);
  return parser.done();
};
