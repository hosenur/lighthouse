module.exports = {
    apps: [
      {
        name: 'lighthouse',
        script: './build/bin/server.js',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
      },
    ],
  }
  