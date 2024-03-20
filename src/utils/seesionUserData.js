export const getSessionUserData = () => {
  for (const key of Object.keys(sessionStorage)) {
    if (key.includes('firebase:authUser')) {
      return JSON.parse(sessionStorage.getItem(key));
    }
  }
};
