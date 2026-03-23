import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mockTrucks } from '../mockData';
import { Truck as TruckIcon } from 'lucide-react';

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #10b981; color: white; padding: 8px; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a2 2 0 0 0-.89-1.66l-2.73-1.82A2 2 0 0 0 17.27 9.5H15"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

export function FleetMap() {
  return (
    <div className="h-[calc(100vh-120px)] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative animate-in zoom-in duration-500">
      <MapContainer 
        center={[-1.286389, 36.817223]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockTrucks.map((truck) => (
          <Marker 
            key={truck.id} 
            position={[truck.location.lat, truck.location.lng]}
            icon={customIcon}
          >
            <Popup className="rounded-xl overflow-hidden">
              <div className="p-2">
                <h3 className="font-bold text-gray-900">{truck.plateNumber}</h3>
                <p className="text-xs text-gray-500 mb-2">ID: {truck.gpsDeviceId}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    truck.status === 'active' ? 'bg-emerald-500' : 
                    truck.status === 'idle' ? 'bg-orange-500' : 'bg-red-500'
                  }`} />
                  <span className="text-xs font-medium capitalize">{truck.status}</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full" 
                    style={{ width: `${(truck.currentFuel / truck.fuelCapacity) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Fuel: {truck.currentFuel}L / {truck.fuelCapacity}L</p>
                <button className="w-full mt-3 bg-emerald-500 text-white text-xs py-1.5 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-6 left-6 z-[1000] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-64">
        <h4 className="font-bold text-gray-900 mb-3">Fleet Status</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-gray-600">Active</span>
            </div>
            <span className="text-xs font-bold">12</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-600">Idle</span>
            </div>
            <span className="text-xs font-bold">8</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs text-gray-600">Maintenance</span>
            </div>
            <span className="text-xs font-bold">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
