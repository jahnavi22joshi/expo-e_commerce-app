// Full Name: only letters + spaces, min 3 chars
export const validateFullName = (name: string): boolean => {
  const regex = /^[a-zA-Z ]{3,}$/;
  return regex.test(name.trim());
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

// Password validation (strong basic rule)
export const validatePassword = (password: string): boolean => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
  return regex.test(password);
};