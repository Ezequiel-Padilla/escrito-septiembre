const ROUTES = {
  ALL: '/all',
};

const generateURL = (route) => `https://api.zoom.us/v2${route}`;

export { ROUTES, generateURL };
