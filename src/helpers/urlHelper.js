import {BACKEND_URL} from '@env';

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

console.log('BACKEND_URL', BACKEND_URL);
const backend = {
  reactUrl: BACKEND_URL,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
};

export {backend};
