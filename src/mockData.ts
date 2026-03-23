import { Truck, User, MaintenanceRecord, Tyre } from './types';

export const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@fleet.com', role: 'super_admin', phone: '+1234567890' },
  { id: '2', name: 'Jane Smith', email: 'jane@fleet.com', role: 'admin', phone: '+1234567891' },
  { id: '3', name: 'Mike Ross', email: 'mike@fleet.com', role: 'driver', phone: '+1234567892' },
];

export const mockTrucks: Truck[] = [
  {
    id: 'T1',
    plateNumber: 'KCB 123A',
    gpsDeviceId: 'GPS-001',
    status: 'active',
    driverId: '3',
    fuelCapacity: 400,
    currentFuel: 320,
    location: { lat: -1.286389, lng: 36.817223 }
  },
  {
    id: 'T2',
    plateNumber: 'KCD 456B',
    gpsDeviceId: 'GPS-002',
    status: 'idle',
    driverId: '4',
    fuelCapacity: 500,
    currentFuel: 150,
    location: { lat: -1.306389, lng: 36.837223 }
  },
  {
    id: 'T3',
    plateNumber: 'KCE 789C',
    gpsDeviceId: 'GPS-003',
    status: 'maintenance',
    driverId: '5',
    fuelCapacity: 350,
    currentFuel: 50,
    location: { lat: -1.256389, lng: 36.797223 }
  }
];

export const mockMaintenance: MaintenanceRecord[] = [
  {
    id: 'M1',
    truckId: 'T1',
    type: 'engine',
    description: 'Oil change and filter replacement',
    cost: 250,
    dueDate: '2026-03-20',
    status: 'pending'
  },
  {
    id: 'M2',
    truckId: 'T2',
    type: 'tyre',
    description: 'Rear left tyre replacement',
    cost: 180,
    dueDate: '2026-03-10',
    status: 'overdue'
  }
];

export const mockTyres: Tyre[] = [
  {
    id: 'TY1',
    truckId: 'T1',
    position: 'front_left',
    pressure: 32,
    treadDepth: 8,
    installDate: '2025-10-15',
    cost: 150,
    status: 'good'
  },
  {
    id: 'TY2',
    truckId: 'T1',
    position: 'front_right',
    pressure: 31,
    treadDepth: 4,
    installDate: '2025-10-15',
    cost: 150,
    status: 'worn'
  }
];
