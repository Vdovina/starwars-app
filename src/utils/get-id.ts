export const getId = (route: string): string => {
  const routeStrings = route.split('/');
  if (route[route.length - 1] === '/') {
    return routeStrings[routeStrings.length - 2];
  }
  return routeStrings[routeStrings.length - 1];
};
