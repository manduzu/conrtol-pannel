export type Role = 'super_admin' | 'admin' | 'storekeeper' | 'driver';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  phone: string;
}

export interface Truck {
  id: string;
  plateNumber: string;
  gpsDeviceId: string;
  status: 'active' | 'idle' | 'maintenance';
  driverId: string;
  fuelCapacity: number;
  currentFuel: number;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Tyre {
  id: string;
  truckId: string;
  position: 'front_left' | 'front_right' | 'rear_left' | 'rear_right';
  pressure: number;
  treadDepth: number;
  installDate: string;
  cost: number;
  status: 'good' | 'worn' | 'critical';
}

export interface FuelLog {
  id: string;
  truckId: string;
  liters: number;
  cost: number;
  odometer: number;
  date: string;
  stationName: string;
}

export interface MaintenanceRecord {
  id: string;
  truckId: string;
  type: 'tyre' | 'fuel' | 'engine' | 'spare';
  description: string;
  cost: number;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
}

export interface Trip {
  id: string;
  truckId: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  distance: number;
  duration: number;
  fuelUsed: number;
  date: string;
}
