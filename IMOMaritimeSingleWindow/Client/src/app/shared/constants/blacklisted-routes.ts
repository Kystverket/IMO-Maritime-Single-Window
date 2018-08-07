const BLACKLISTED_ROUTES = [
  // Page routes
  'localhost:4200/auth',
  'localhost:4200/auth/login',
  // Api routes
  'localhost:4200/api/account/user/password/forgotten',
  'localhost:4200/api/account/user/password/reset'
];

export { BLACKLISTED_ROUTES };
