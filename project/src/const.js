export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MYLIST: '/mylist',
  FILMS: '/films/:id?',
  REVIEW: '/films/:id?/review',
  DETAILS: '/films/:id?/details',
  ADDREVIEW: '/films/:id?/add-review',
  PLAYER: '/player/:id?',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
