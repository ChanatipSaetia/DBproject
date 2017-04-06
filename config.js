module.exports = {
  web: {
    port: process.env.WEB_PORT || '3000',
    hostName: process.env.WEB_HOSTNAME || 'localhost'
  }
};
