export const getLocation = () => localStorage.getItem('returnPath');
export const setLocation = pathName => localStorage.setItem('returnPath', pathName);
export const clearLocation = pathName => localStorage.removeItem('returnPath');
