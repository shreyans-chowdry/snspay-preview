self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/snspay-preview(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|favicon|icon|api\\/|pay\\/|pricing|how-it-works|security|changelog|legal).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/static|_next/image|favicon|icon|api/|pay/|pricing|how-it-works|security|changelog|legal).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()