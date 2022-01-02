const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'backend'),
//       user: env('DATABASE_USERNAME', 'cmsuser'),
//       password: env('DATABASE_PASSWORD', '12345678'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

