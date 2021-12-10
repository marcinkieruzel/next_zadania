const constants = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  // console.log(constants);
  //console.log('Phase', phase)

  const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {


      //console.log(config);

      // Important: return the modified config
      return config
    },
  }
  return nextConfig
}
