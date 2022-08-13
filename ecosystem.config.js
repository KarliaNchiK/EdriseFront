module.exports = {
    apps: [
      {
        name: 'edrise',
        exec_mode: 'cluster',
        instances: 'max',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }