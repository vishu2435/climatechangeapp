const withManifest = require('next-manifest');
const defaults = {
  // next-manifest options
  output: './static/', // The folder where the manifest will be generated.
  // manifest options
  name: 'PWA',
 
}
// module.exports = withManifest({
//   manifest: {
//     ...defaults
//   }
// });

module.exports={
  distDir: 'build'
}