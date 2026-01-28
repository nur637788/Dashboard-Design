export default function StatCard({ title, value, percent, icon, }) {
  return (
    <div className="bg-[#0B1639] rounded-xl p-5 shadow-glow flex justify-between ">
      <div>
        <p className="text-sm text-white/60">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <span
          className={`text-xs mt-1 ${percent.startsWith("-") ? "text-red-400" : "text-green-400"
            }`}>
          {percent}
        </span>
      </div>
      <div className=" ">{icon}</div>

      {/* <div className="bg-[#0B1639] rounded-xl p-5 shadow-glow flex justify-between items-center">
        <div>
          <p className="text-sm text-white/60">{title}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
          <p className="text-xs text-green-400 mt-1">{subtitle}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5">{icon}</div>
      </div> */}
    </div>
  );
}
