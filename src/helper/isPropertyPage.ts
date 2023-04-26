export const useIsPropertyPage = () => {
  const pathname = window.location.pathname;
  return pathname.includes('property');
};
