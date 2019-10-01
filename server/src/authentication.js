const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth');

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    console.log('profile', profile);
    const baseData = await super.getEntityData(profile);
    console.log('baseData', baseData);

    return {
      ...baseData,
      picture: profile.picture,
      name: profile.name,
      email: profile.email,
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('google', new GoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
