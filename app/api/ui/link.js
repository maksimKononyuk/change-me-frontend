function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = '/';
const ROOTS_AUTH = path(ROOT, 'auth');

const ROOTS_APPLICATION = path(ROOT, 'app');
const ROOTS_HOME = path(ROOTS_APPLICATION, '/home');
const ROOTS_PROFILE = path(ROOTS_APPLICATION, '/profile');

const PATH_APPLICATION = {
  root: ROOTS_APPLICATION,
  home: ROOTS_HOME,
  experts: path(ROOTS_APPLICATION, '/experts'),
  profile: ROOTS_PROFILE,
};

const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  confirmPassword: path(ROOTS_AUTH, '/confirm-password'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
};

const PATH_PROFILE = {
  root: ROOTS_PROFILE,
  edit: path(ROOTS_PROFILE, '/edit'),
  editClient: path(ROOTS_PROFILE, '/edit/client'),
  editExpert: path(ROOTS_PROFILE, '/edit/expert'),
  changeAvatar: path(ROOTS_PROFILE, '/change-avatar'),
};

const PATH_UTILS = {
  maintenance: '/maintenance',
  comingSoon: '/coming-soon',
};

module.exports = {
  auth: PATH_AUTH,
  application: PATH_APPLICATION,
  utils: PATH_UTILS,
  profile: PATH_PROFILE,

  // deprecated
  dashboard: '/app',
  login: '/login',
  market: '#',
  email: '#',
  // profile: "/profile",
  calendar: '#',
  twitter: '#',
  github: '#',
  pinterest: '#',
  linkedin: '#',
};
