export const CustomRoute = ({ path, element, exact }) => {
  const { pathname } = window.location;

  if (exact) {
    if (path === pathname) return element;
  } else {
    if (pathname.includes(path)) return element;
  }

  return null;
};
