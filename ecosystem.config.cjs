module.exports = {
  apps: [
    {
      name: 'loveredflags',
      cwd: '/home/user/webapp',
      script: 'npx',
      args: 'next start -H 0.0.0.0 -p 3000',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
    }
  ]
}
