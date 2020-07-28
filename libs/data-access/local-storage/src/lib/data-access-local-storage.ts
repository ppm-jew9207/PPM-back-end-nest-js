export const saveToken = (token: string) => {
  localStorage.setItem('Authorization', `Bearer ${token}`);
};

export const removeToken = () => {
  localStorage.removeItem('Authorization');
};

export const getToken = () => localStorage.getItem('Authorization');
