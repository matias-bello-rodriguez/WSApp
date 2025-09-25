// Domain entities types
export interface Embarcacion {
  id: string;
  nombre: string;
  tipo: string;
  capacidad: number;
  estado: 'activo' | 'inactivo' | 'mantenimiento';
  ultimaRevision: string; // ISO date string
}

export interface Reporte {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string; // ISO date string
  estado: 'pendiente' | 'en_progreso' | 'completado' | 'cancelado';
  usuarioId: string;
  embarcacionId?: string;
}

export interface Empresa {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  activo: boolean;
}