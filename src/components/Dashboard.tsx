import React from 'react';
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Fuel, 
  DollarSign,
  Truck as TruckIcon,
  Navigation
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', fuel: 400, distance: 2400 },
  { name: 'Tue', fuel: 300, distance: 1398 },
  { name: 'Wed', fuel: 200, distance: 9800 },
  { name: 'Thu', fuel: 278, distance: 3908 },
  { name: 'Fri', fuel: 189, distance: 4800 },
  { name: 'Sat', fuel: 239, distance: 3800 },
  { name: 'Sun', fuel: 349, distance: 4300 },
];

const kpis = [
  { label: 'Total Trucks', value: '24', icon: TruckIcon, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Active Trips', value: '18', icon: Navigation, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Fuel Efficiency', value: '8.4 km/L', icon: Fuel, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { label: 'Total Cost', value: '$12,450', icon: DollarSign, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Fleet Overview</h2>
          <p className="text-gray-500 text-sm">Real-time performance metrics for your fleet</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            Export PDF
          </button>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${kpi.bg}`}>
                <kpi.icon className={kpi.color} size={24} />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                +12%
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">{kpi.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Fuel Consumption</h3>
            <select className="bg-gray-50 border-none text-xs font-medium rounded-lg px-2 py-1">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorFuel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="fuel" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorFuel)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Distance Traveled (km)</h3>
            <select className="bg-gray-50 border-none text-xs font-medium rounded-lg px-2 py-1">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip 
                  cursor={{fill: '#f9fafb'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="distance" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Recent Maintenance Alerts</h3>
          <button className="text-emerald-500 text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { truck: 'KCB 123A', issue: 'Engine Service Due', status: 'overdue', date: '2 days ago' },
            { truck: 'KCD 456B', issue: 'Low Tyre Pressure', status: 'pending', date: '5 hours ago' },
            { truck: 'KCE 789C', issue: 'Brake Inspection', status: 'completed', date: 'Yesterday' },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  item.status === 'overdue' ? 'bg-red-50 text-red-500' : 
                  item.status === 'pending' ? 'bg-orange-50 text-orange-500' : 
                  'bg-emerald-50 text-emerald-500'
                }`}>
                  {item.status === 'overdue' ? <AlertCircle size={20} /> : 
                   item.status === 'pending' ? <Clock size={20} /> : 
                   <CheckCircle2 size={20} />}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.truck}</p>
                  <p className="text-gray-500 text-xs">{item.issue}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
