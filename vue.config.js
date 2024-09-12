module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // For user/organization sites, no subdirectory needed
    : '/'
}
