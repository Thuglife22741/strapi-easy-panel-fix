// Arquivo: config/server.js

module.exports = ({ env }) => ({
  // ADICIONA A URL PARA GARANTIR QUE O ADMIN CONSIGA CARREGAR NO MODO DEV
  url: env('NODE_ENV') === 'development' ? 'http://localhost:1337' : undefined,
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // ESSA PARTE É ESSENCIAL PARA LER O APP_KEYS E JWT_SECRET
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
