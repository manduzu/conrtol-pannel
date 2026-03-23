import React from 'react';
import { 
  LayoutDashboard, 
  Truck, 
  Users, 
  Wrench, 
  Fuel, 
  Map as MapIcon, 
  Settings, 
  LogOut,
  CircleDot
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'fleet', label: 'Fleet Management', icon: Truck },
  { id: 'tracking', label: 'Live Tracking', icon: MapIcon },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'fuel', label: 'Fuel Logs', icon: Fuel },
  { id: 'drivers', label: 'Drivers', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-[#151619] text-white h-screen flex flex-col border-r border-white/5">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Truck className="text-white" size={24} />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">FleetControl</h1>
          <p className="text-[10px] text-emerald-500 font-mono uppercase tracking-wider">Command Center</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              activeTab === item.id 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              activeTab === item.id ? "text-white" : "text-gray-500 group-hover:text-white"
            )} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5">
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <CircleDot size={12} className="text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">System Status</span>
          </div>
          <p className="text-xs text-gray-300">All systems operational</p>
        </div>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}
