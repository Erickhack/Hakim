export const getToken = () => {
  return localStorage.getItem("lg_Token")  || '';
};

export const setToken = (token: string) => {
  localStorage.setItem("lg_Token", token);
};

export const removeToken = () => {
  localStorage.removeItem("lg_Token");
};