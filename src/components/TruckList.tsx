import React from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Fuel, 
  Gauge, 
  MapPin,
  Plus
} from 'lucide-react';
import { mockTrucks } from '../mockData';

export function TruckList() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Fleet Management</h2>
          <p className="text-gray-500 text-sm">Manage and monitor your vehicle inventory</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
          <Plus size={18} />
          Add New Truck
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by plate number, driver, or ID..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrucks.map((truck) => (
          <div key={truck.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <TruckIcon className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{truck.plateNumber}</h3>
                    <p className="text-xs text-gray-500">{truck.gpsDeviceId}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Fuel size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Fuel Level</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{Math.round((truck.currentFuel / truck.fuelCapacity) * 100)}%</p>
                  <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full" 
                      style={{ width: `${(truck.currentFuel / truck.fuelCapacity) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Gauge size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Status</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      truck.status === 'active' ? 'bg-emerald-500' : 
                      truck.status === 'idle' ? 'bg-orange-500' : 'bg-red-500'
                    }`} />
                    <p className="text-sm font-bold text-gray-900 capitalize">{truck.status}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${truck.driverId}`} alt="Driver" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">Driver Assigned</span>
                </div>
                <button className="flex items-center gap-1 text-emerald-500 text-xs font-bold hover:underline">
                  <MapPin size={14} />
                  Track Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TruckIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a2 2 0 0 0-.89-1.66l-2.73-1.82A2 2 0 0 0 17.27 9.5H15" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
