module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c39d65cfd50f2c890636632d6f9123ab'),
  },
});
