module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337) || 1337,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9518cfb7-49bb-4e6d-a518-b8de90c015b0')
    }
  }
});
