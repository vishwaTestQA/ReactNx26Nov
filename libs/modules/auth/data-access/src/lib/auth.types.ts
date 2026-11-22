export interface LoginRequest {
  email: string;
  password: string;
}
// AuthResponse is already defined: { user: UserProfile; accessToken: string }

export type UserRole = 'USER' | 'ADMIN' | 'MANAGER';

export interface UserProfile {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: UserProfile | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean; // True once initial session/refresh check completes
}
