export const getId = (route: string): string => {
  const routeStrings = route.split('/');
  return routeStrings[routeStrings.length - 2];
};