const ghpages = require('gh-pages');
const pathname = `${__dirname}/portfolio/build`;
const repoURL =
  'https://github.com/harshbhandariv/harshbhandariv.github.io.git';

ghpages.publish(
  pathname,
  {
    branch: 'main',
    repo: repoURL,
  },
  (err) => {
    if (err) console.log('ERROR: ', err);
    else console.log('PUBLISHED');
  }
);
