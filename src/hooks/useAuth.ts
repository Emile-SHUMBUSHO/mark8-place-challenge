import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { User, LoginCredentials, RegisterData } from '@/types/user';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useAuthState(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      // In a real app, this would call the actual API
      // For now, we'll simulate a login with mock data
      const mockUser: User = {
        id: 'user-1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        avatar: '/api/placeholder/100/100',
        addresses: [],
        preferences: {
          notifications: { email: true, push: true, sms: false },
          privacy: { showProfile: true, showPurchases: false },
          language: 'en',
          currency: 'USD',
          theme: 'light',
        },
        role: 'customer',
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setUser(mockUser);

      // Store auth token in localStorage and cookies for middleware
      const token = 'mock-jwt-token';
      if (credentials.rememberMe) {
        localStorage.setItem('auth_token', token);
        document.cookie = `auth_token=${token}; path=/; max-age=${30 * 24 * 60 * 60}`; // 30 days
      } else {
        sessionStorage.setItem('auth_token', token);
        document.cookie = `auth_token=${token}; path=/; max-age=${24 * 60 * 60}`; // 1 day
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      // In a real app, this would call the actual API
      const mockUser: User = {
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        addresses: [],
        preferences: {
          notifications: { email: true, push: true, sms: false },
          privacy: { showProfile: true, showPurchases: false },
          language: 'en',
          currency: 'USD',
          theme: 'system',
        },
        role: 'customer',
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setUser(mockUser);
      const token = 'mock-jwt-token';
      localStorage.setItem('auth_token', token);
      document.cookie = `auth_token=${token}; path=/; max-age=${30 * 24 * 60 * 60}`; // 30 days
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // In a real app, this would call the logout API
      setUser(null);
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
      // Clear auth cookie
      document.cookie =
        'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logout failed');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    const token =
      localStorage.getItem('auth_token') ||
      sessionStorage.getItem('auth_token');

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In a real app, this would call the API to get current user
      // For now, we'll use mock data
      const mockUser: User = {
        id: 'user-1',
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        addresses: [],
        preferences: {
          notifications: { email: true, push: true, sms: false },
          privacy: { showProfile: true, showPurchases: false },
          language: 'en',
          currency: 'USD',
          theme: 'light',
        },
        role: 'customer',
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh user');
      // Clear invalid token
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Check for existing auth on mount
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const isAuthenticated = !!user;

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    refreshUser,
    isAuthenticated,
  };
}

export { AuthContext };
