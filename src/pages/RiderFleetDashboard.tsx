import React from 'react';
import { motion } from 'framer-motion';
import './RiderFleetDashboard.css';

const RiderFleetDashboard: React.FC = () => {
  const riders = [
    { name: 'Marco Ross', vehicle: 'Scooter', status: 'Online', orders: 24, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf1Iho9QW2E2YchA2Gx_5_BSfi9k7mIsI8_ap4O-WB9YUvvITcVC_yp008g5z22csruIZSH3vHZzMEwvwFUr_PimTQp8MU8phgISunTEsPcCHwMbOdcM1RaDwg1HAqxSbBtXNt0YcT4Bt7xfvqBgMaUWDVsy0QWY2MxtLZHtr1yXuGKsqTZjn1gCvdP2phlZnAZzX5hdcgQ9p-f2o7Wj_Ynpyo2YhmOOIvuD8fHvHD59IHsB4_MPWhbj-EPbjbAe-rNgKWbGq3DSU' },
    { name: 'Sofia Chen', vehicle: 'E-Bike', status: 'Busy', orders: 18, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUsO3hbLoP429J1PezXb7w6IeBNQw5rQMTokLsYp9dO4SFo5uDLTog6zdMvxRZlft-Qq8c7vVwjfvvSHH3W4U0ekssz6MBWBkKMDkmXaVgJ_AmguZP8B7Ow79-RS6H-O9qVSQGDltgVijB3M2It4obmkXYSRl1QnBw48m2hVOHc_4j_9qblBGXpXkHOMCD0GkawLYkcvEvVVmtZA3vAhpBY_fJBbpHcJy84dfpLkJlIdTL4mKnnaVl6PmsLDXgfH3sV71UzZSTjoo' },
    { name: 'Liam Smith', vehicle: 'Car', status: 'Online', orders: 31, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsJPujY542MlQzYXKO84OYrUJW_CjNT4WTXZVEZc9MsNfvYlM09UTiyBiITg8Y3sPgi0yMI2kahjkQmLMxNkik0vsj1QwwBctiElWD2jJEBQyyOIUc_ja9sAE6ipGzZQEqPEDzbLUxiV87UpBFeSwkumybHpy3sFqnLJmMBZLUW94KcQrJat4PXQAYLmByXfcwVxTNd53uAxM48z70TDH0B8Cc2wr8JVzJQQ8VjqIx2oPuuAjd36kKEpMLtxdtxvUpcDlG-x_98-s' },
    { name: 'Anya V.', vehicle: 'Scooter', status: 'Offline', orders: 0, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoKC2T9AR5lX61w1J268CRD9TCY1Zjuouk_8B5pi3VSG_Re0kfrGTlEhhSe_dR0SNJnJEbOWe80SdZNIshctAGt2Fp6e-JSxj2ANKFq50UkeH_GXRVVc7aMS3y-_p1ze1HWz5H7FFg2wd5Vy_srbObR-o_i2wKFhNRtNhXOrjtzAlIOrqWsb0uYl040BVC-EKPKEq_W-__Pcu9uRSW2jg_SzzACStW6VOb_44E1ZcAn5DfpjhzSH80PDTQyuaiko1w0T6vB5Sqx00' },
  ];

  return (
    <div className="fleet-dashboard flex min-h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-72 border-r-4 border-[#1c1c0d] bg-[#fcfcf8] flex flex-col p-6 pt-24">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[#f9f506] border-4 border-[#1c1c0d] p-2 rounded-xl shadow-chunky-sm">
            <span className="material-symbols-outlined text-3xl font-black">electric_scooter</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-[#1c1c0d] uppercase italic">Hero Fleet</h1>
        </div>
        <nav className="flex-1 space-y-4">
          <a className="flex items-center gap-4 px-4 py-3 bg-[#f9f506] border-4 border-[#1c1c0d] rounded-2xl shadow-chunky-sm font-black italic uppercase" href="#">
            <span className="material-symbols-outlined font-black">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-4 px-4 py-3 hover:bg-[#f9f506]/20 rounded-2xl transition-colors font-bold text-[#1c1c0d]/70 uppercase italic" href="#">
            <span className="material-symbols-outlined font-black">groups</span>
            Rider Fleet
          </a>
          <a className="flex items-center gap-4 px-4 py-3 hover:bg-[#f9f506]/20 rounded-2xl transition-colors font-bold text-[#1c1c0d]/70 uppercase italic" href="#">
            <span className="material-symbols-outlined font-black">map</span>
            Live Tracking
          </a>
          <a className="flex items-center gap-4 px-4 py-3 hover:bg-[#f9f506]/20 rounded-2xl transition-colors font-bold text-[#1c1c0d]/70 uppercase italic" href="#">
            <span className="material-symbols-outlined font-black">analytics</span>
            Performance
          </a>
          <a className="flex items-center gap-4 px-4 py-3 hover:bg-[#f9f506]/20 rounded-2xl transition-colors font-bold text-[#1c1c0d]/70 uppercase italic" href="#">
            <span className="material-symbols-outlined font-black">payments</span>
            Earnings
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t-4 border-[#1c1c0d]/10 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="size-12 rounded-2xl border-4 border-[#1c1c0d] bg-slate-200 overflow-hidden shadow-chunky-sm">
              <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBda2452NdKwTwn7-1jyswRlEiia9J6E9hhPZADguxAsOV1ysyFoedbN5qRT_sYQHVkNf5tSneItp9LiXEBRY6bBjEAxFvBwecO3dyetHKF_uxDIOfQdbqWra2S99O27OEU6q9Q1bYZZ3SCzpNcR5zlAQWdhBrHyHEnlrcBLw-uERz0_uLWtzEExUO8p5wTktvm6LzlilMBoYqeOh1CSvk8aon3RpR2KJE1cdMFxNQu-HzUPZauuoaqG5zwd4dNK9DkUmQXRzU-qPc" />
            </div>
            <div>
              <p className="text-sm font-black text-[#1c1c0d] uppercase italic">Alex Hero</p>
              <p className="text-[10px] font-black text-[#1c1c0d]/40 uppercase tracking-widest">Fleet Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 pt-28">
        {/* Top Bar */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#1c1c0d] uppercase italic tracking-tighter">Fleet Console</h2>
            <p className="text-lg font-bold text-[#1c1c0d]/50 italic">Monitoring 180 active heroes across the city.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#1c1c0d]/40 font-black">search</span>
              <input className="pl-12 pr-6 py-4 bg-white border-4 border-[#1c1c0d] rounded-2xl focus:ring-0 focus:border-[#f9f506] w-full md:w-80 shadow-chunky transition-all font-bold placeholder:text-accent-dark/30" placeholder="Search riders..." type="text" />
            </div>
            <button className="neo-brutalism-btn px-8 py-4 rounded-2xl flex items-center gap-3">
              <span className="material-symbols-outlined font-black">person_add</span>
              Add Rider
            </button>
          </div>
        </header>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div whileHover={{ y: -5 }} className="neo-brutalism-card p-6 rounded-[2rem] flex items-center gap-6">
            <div className="size-16 bg-[#4ade80] border-4 border-[#1c1c0d] rounded-2xl flex items-center justify-center shadow-chunky-sm">
              <span className="material-symbols-outlined text-3xl font-black">check_circle</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1c1c0d]/40 mb-1">Active Riders</p>
              <p className="text-3xl font-black text-[#1c1c0d] italic">142<span className="text-sm font-bold opacity-30">/180</span></p>
              <p className="text-[10px] font-black text-green-600 uppercase">+12% Hero activity</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="neo-brutalism-card p-6 rounded-[2rem] flex items-center gap-6">
            <div className="size-16 bg-[#60a5fa] border-4 border-[#1c1c0d] rounded-2xl flex items-center justify-center shadow-chunky-sm">
              <span className="material-symbols-outlined text-3xl font-black">timer</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1c1c0d]/40 mb-1">Avg. Delivery</p>
              <p className="text-3xl font-black text-[#1c1c0d] italic">24<span className="text-sm font-bold">m</span></p>
              <p className="text-[10px] font-black text-red-500 uppercase">-5% efficiency loss</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="neo-brutalism-card p-6 rounded-[2rem] flex items-center gap-6">
            <div className="size-16 bg-[#f9f506] border-4 border-[#1c1c0d] rounded-2xl flex items-center justify-center shadow-chunky-sm">
              <span className="material-symbols-outlined text-3xl font-black">local_shipping</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1c1c0d]/40 mb-1">Total Orders</p>
              <p className="text-3xl font-black text-[#1c1c0d] italic">1,284</p>
              <p className="text-[10px] font-black text-green-600 uppercase">+18% Peak Power</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Riders List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Real-Time Status</h3>
              <div className="flex gap-2">
                <button className="px-5 py-2 bg-[#1c1c0d] text-white rounded-full text-[10px] font-black uppercase border-2 border-[#1c1c0d] shadow-chunky-sm">All</button>
                <button className="px-5 py-2 bg-white border-2 border-[#1c1c0d] rounded-full text-[10px] font-black uppercase hover:bg-[#f9f506] transition-colors">Online</button>
                <button className="px-5 py-2 bg-white border-2 border-[#1c1c0d] rounded-full text-[10px] font-black uppercase hover:bg-[#f9f506] transition-colors">Busy</button>
              </div>
            </div>
            <div className="neo-brutalism-card rounded-[2.5rem] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#1c1c0d] text-white">
                  <tr>
                    <th className="px-6 py-5 font-black uppercase text-xs italic">Hero Name</th>
                    <th className="px-6 py-5 font-black uppercase text-xs italic">Vehicle</th>
                    <th className="px-6 py-5 font-black uppercase text-xs italic">Status</th>
                    <th className="px-6 py-5 font-black uppercase text-xs italic">Orders</th>
                    <th className="px-6 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y-4 divide-[#1c1c0d]/5">
                  {riders.map((rider, idx) => (
                    <tr key={idx} className="hover:bg-[#f9f506]/5 transition-colors group">
                      <td className="px-6 py-5 flex items-center gap-4">
                        <div className="size-14 rounded-2xl border-4 border-[#1c1c0d] overflow-hidden shrink-0 shadow-chunky-sm group-hover:-translate-y-1 transition-transform">
                          <img alt="Rider" className="w-full h-full object-cover" src={rider.img} />
                        </div>
                        <span className="font-black uppercase italic text-sm">{rider.name}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="flex items-center gap-2 font-black text-xs uppercase italic opacity-60">
                          <span className="material-symbols-outlined text-sm font-black">{rider.vehicle === 'Scooter' ? 'moped' : rider.vehicle === 'E-Bike' ? 'pedal_bike' : 'directions_car'}</span>
                          {rider.vehicle}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`status-badge ${rider.status === 'Online' ? 'bg-[#4ade80]' : rider.status === 'Busy' ? 'bg-[#fbbf24]' : 'bg-slate-200 opacity-50'}`}>
                          {rider.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-black text-lg italic">{rider.orders}</td>
                      <td className="px-6 py-5">
                        <button className="material-symbols-outlined text-[#1c1c0d] font-black hover:scale-125 transition-transform">more_vert</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-slate-50 text-center border-t-4 border-[#1c1c0d]">
                <button className="text-[10px] font-black text-[#1c1c0d] uppercase tracking-widest hover:underline underline-offset-4 decoration-4">View All Fleet Activity</button>
              </div>
            </div>
          </div>

          {/* Live Map Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter">Fleet Hotspots</h3>
            <div className="neo-brutalism-card rounded-[2.5rem] overflow-hidden h-[450px] relative border-4 border-[#1c1c0d] shadow-chunky">
              <div className="absolute inset-0 map-placeholder flex items-center justify-center">
                <div className="w-full h-full bg-[#1c1c0d]/10 flex items-center justify-center backdrop-blur-[2px]">
                   <p className="bg-white px-4 py-2 border-2 border-black font-black uppercase text-xs italic shadow-chunky-sm">Live GPS Matrix Initializing...</p>
                </div>
              </div>
              
              {/* Mock Map Pins */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-1/4 left-1/3 bg-[#f9f506] border-2 border-[#1c1c0d] p-1.5 rounded-full shadow-chunky-sm">
                <span className="material-symbols-outlined text-xs font-black">electric_scooter</span>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute top-1/2 left-2/3 bg-[#f9f506] border-2 border-[#1c1c0d] p-1.5 rounded-full shadow-chunky-sm">
                <span className="material-symbols-outlined text-xs font-black">electric_scooter</span>
              </motion.div>
              <div className="absolute bottom-1/4 right-1/4 bg-[#4ade80] border-2 border-[#1c1c0d] p-2 rounded-full shadow-chunky-sm animate-pulse">
                <span className="material-symbols-outlined text-xs font-black">location_on</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white border-4 border-[#1c1c0d] p-4 rounded-2xl flex items-center justify-between shadow-chunky-sm">
                <div className="flex items-center gap-3">
                  <span className="size-3 bg-green-500 rounded-full animate-pulse border-2 border-[#1c1c0d]"></span>
                  <p className="text-[10px] font-black uppercase italic">Live Track Active</p>
                </div>
                <button className="bg-[#f9f506] px-4 py-2 text-[10px] font-black uppercase rounded-full border-2 border-[#1c1c0d] hover:translate-y-0.5 transition-transform">Expand</button>
              </div>
            </div>

            {/* Performance Card */}
            <motion.div whileHover={{ scale: 1.02 }} className="neo-brutalism-card bg-[#1c1c0d] text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-black uppercase italic tracking-tighter text-xl">Monthly Ace</h4>
                  <span className="material-symbols-outlined text-[#f9f506] text-3xl font-black">emoji_events</span>
                </div>
                <div className="flex items-center gap-5 mb-8">
                  <div className="size-16 rounded-2xl border-4 border-[#f9f506] overflow-hidden shadow-[4px_4px_0_0_#f9f506]">
                    <img alt="Top Rider" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4LqQavl19VQVoeDOU4Sx19aFHK0ACJfZi0kKa-h1aQTA2U1VLwxbK2vwPQLjloYgrOa6VBJRPLOIyKbdGKG_rKpK5T7qK893jBz-SXbBjiQ4bxLCVNndLiAIUU94ku5wTPkDYOvc876irACDmF9ccz7D3211ojVvaUTApnISurh1uiTM_GzH7VAvJVoB0QP-hAMKUEySIY0lvAVDUK8spxHJCJ20nPVvEEQpw56iOigyp6u0J-oBVP1E-kNHSrQStUADAGbKvTgQ" />
                  </div>
                  <div>
                    <p className="font-black uppercase italic">Derrick Wang</p>
                    <p className="text-xs font-bold text-[#f9f506]/70 italic">42 deliveries today</p>
                  </div>
                </div>
                <div className="w-full bg-[#fcfcf8]/20 h-4 rounded-full overflow-hidden border-2 border-white/20">
                  <div className="bg-[#f9f506] h-full w-[85%] border-r-2 border-white"></div>
                </div>
                <p className="text-[10px] mt-3 font-black text-[#f9f506] uppercase tracking-widest text-right italic">85% Weekly Target Reached</p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-12 -right-12 text-[140px] text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">workspace_premium</span>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiderFleetDashboard;
