module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '34.124.187.234'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'cmsdemo'),
      user: env('DATABASE_USERNAME', 'headless-cms4438'),
      password: env('DATABASE_PASSWORD', '12345678'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
