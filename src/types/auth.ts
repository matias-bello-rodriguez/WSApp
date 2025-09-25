// Auth related types
export interface User {
  id: string;
  username: string;
  email: string;
  nombre: string;
  apellido: string;
  tipo_usuario: string;
  empresas: string[];
  permisos: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}