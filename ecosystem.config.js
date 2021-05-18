module.exports = {
  apps : [{
    name   : 'pm2-ecosystem-demo',
    script : './bin/www',
    watch  : true,
    env: {
      NODE_ENV : 'development',
      PORT     : process.env.PORT | '3001',
    },
    env_staging: {
      NODE_ENV : 'production',
      PORT     : process.env.PORT | '8001',
    },
    env_production: {
      NODE_ENV : 'production',
      PORT     : process.env.PORT | '8001',
    }
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
