module.exports = {
  apps: [{
    name: 'pm2-ecosystem-demo',
    script: './bin/www',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: process.env.PORT | '3000',
    },
    env_staging: {
      NODE_ENV: 'production',
      PORT: process.env.PORT | '8000',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: process.env.PORT | '8000',
    }
  }],
  deploy: {
    development: {
      user: 'deploy',
      host: 'dev0.monosparta.org',
      ref: 'origin/develop',
      repo: 'git@github.com:monosparta/pm2-ecosystem-demo.git',
      path: '/home/deploy/pm2-ecosystem-demo',
      'pre-setup': '. ~/.fnm/fnm.sh; node --version; npm --version; pm2 --version',
      'post-setup': 'ls -al',
      'pre-deploy-local': "echo 'This is a local executed command'",
      'post-deploy': '. ~/.fnm/fnm.sh; npm install && pm2 reload ecosystem.config.js',
    },
    production: {
      user: 'deploy',
      host: 'prod0.monosparta.org',
      ref: 'origin/develop',
      repo: 'git@github.com:monosparta/pm2-ecosystem-demo.git',
      path: '/home/deploy/pm2-ecosystem-demo',
      'pre-setup': '. ~/.fnm/fnm.sh; node --version; npm --version; pm2 --version',
      'post-setup': 'ls -al',
      'pre-deploy-local': "echo 'This is a local executed command'",
      'post-deploy': '. ~/.fnm/fnm.sh; npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
