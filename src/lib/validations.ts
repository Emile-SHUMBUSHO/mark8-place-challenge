export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.push("Email is required");
  } else if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];

  if (!password) {
    errors.push("Password is required");
  } else {
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateRequired(
  value: string,
  fieldName: string
): ValidationResult {
  const errors: string[] = [];

  if (!value || value.trim().length === 0) {
    errors.push(`${fieldName} is required`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = [];
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;

  if (!phone) {
    errors.push("Phone number is required");
  } else if (phone.replace(/\D/g, "").length < 10) {
    errors.push("Phone number must be at least 10 digits");
  } else if (!phoneRegex.test(phone)) {
    errors.push("Please enter a valid phone number");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validatePrice(price: number | string): ValidationResult {
  const errors: string[] = [];
  const numPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numPrice)) {
    errors.push("Price must be a valid number");
  } else if (numPrice < 0) {
    errors.push("Price cannot be negative");
  } else if (numPrice > 999999) {
    errors.push("Price cannot exceed $999,999");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
