export enum PrivateRoutesPath {
  DASHBOARD = 'dashboard',
  DASHBOARD_MENTOR = '/mentor/:id',
  MENTOR = 'mentor',
  STUDENT = 'student',
  ADVERTS = 'adverts',
  SETTINGS = 'settings',
  AUTH = 'auth',
  GET_BY_ID = '/:id',
  GET_ALL = '/all',
  //TODO: only for POST
  POST_CREATE = '/create',
  POST_UPDATE = '/update/:id',
  POST_DELETE = '/delete/:id',

  // TODO only for API
  GET_FIND_BY_ID = '/find-by-email',
  POST_LOGIN = '/login',
  POST_REGISTRY = '/registry',
  POST_VERIFY = '/verify/:code',
  POST_RESEND_VERIFY = '/resend-verification/:email',
  POST_FORGOT_PASSWORD = '/forgot-password/:email',
  POST_RESET_PASSWORD = '/reset-password',
}
