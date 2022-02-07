module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a7798474c942d5f382df657f32ed928f'),
  },
});
