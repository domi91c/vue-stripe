export const isSecureHost = () => {
  return (
    window.location.hostname.match(/.*localtest.me/) ||
    window.location.hostname.match(/.*lvh.me/) ||
    window.location.hostname === 'localhost' ||
    window.location.protocol === 'https:'
  );
};
