import config from '../config';

const { ISSUER_URL, CLIENT_ID } = config;

const appAuthConfig = {
  issuer: ISSUER_URL,
  scopes: ['profile'],
  clientId: CLIENT_ID
};

export default appAuthConfig;
