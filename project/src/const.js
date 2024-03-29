export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MYLIST: '/mylist',
  FILMS: '/films/:id?',
  REVIEW: '/films/:id?/review',
  DETAILS: '/films/:id?/details',
  ADDREVIEW: '/films/:id?/add-review',
  PLAYER: '/player/:id?',
  NOTFOUND: '/404',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
