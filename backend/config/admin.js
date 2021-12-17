module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e05775796479634e0df2d2db3c92a726'),
  },
});
