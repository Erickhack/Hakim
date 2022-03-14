export const getToken = () => {
  return (
    localStorage?.getItem("lg_Token") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2NDcyNTIxMDV9.rODo-7BYE7RU3cPzqYGI17gDf0ZXiiKNPyRkHOFtJFo"
  );
};

export const setToken = (token: string) => {
  localStorage.setItem("lg_Token", token);
};

export const removeToken = () => {
  localStorage.removeItem("lg_Token");
};
