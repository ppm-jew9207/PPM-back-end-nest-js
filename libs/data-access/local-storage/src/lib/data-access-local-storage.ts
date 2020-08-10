export const saveToken = (token: string) => {
  localStorage.setItem('Authorization', `Bearer ${token}`);
};

export const setRegistrationStep = (step: number) => {
  localStorage.setItem('registrationStep', step.toString());
};

export const getRegistrationStep = () => {
  return Number(localStorage.getItem('registrationStep')) || 0;
};

export const setRegistrationEmail = (email: string) => {
  localStorage.setItem('registrationEmail', email);
};

export const getRegistrationEmail = () => {
  return Number(localStorage.getItem('registrationEmail')) || '';
};

export const removeToken = () => {
  localStorage.removeItem('Authorization');
};

export const clearRegistrationData = () => {
  console.log(localStorage.removeItem('registrationEmail'));
  
  localStorage.removeItem('registrationEmail');
  localStorage.removeItem('registrationStep');
};

export const getToken = () => localStorage.getItem('Authorization');

