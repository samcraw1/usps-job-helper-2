const STAGES = [
  { id: 1, label: "Application Received" },
  { id: 2, label: "Assessment / Exam" },
  { id: 3, label: "Pre-Hire List" },
  { id: 4, label: "Hiring List" },
  { id: 5, label: "Selection List" },
  { id: 6, label: "Offer Phase (Ext)" },
  { id: 7, label: "Offer Accepted" },
];

export default function PipelineTracker() {
  return (
    <div className="mb-10">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-5 left-[5%] right-[5%] h-0.5 bg-navy-200" />
        {STAGES.map((stage) => (
          <a
            key={stage.id}
            href={`#stage-${stage.id}`}
            className="relative flex flex-col items-center w-[14%] group"
          >
            <div className="w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm z-10 group-hover:bg-accent-600 transition-colors">
              {stage.id}
            </div>
            <span className="text-xs text-navy-600 text-center mt-2 leading-tight group-hover:text-navy-900 transition-colors">
              {stage.label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden flex flex-col gap-0">
        {STAGES.map((stage, i) => (
          <a
            key={stage.id}
            href={`#stage-${stage.id}`}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-xs z-10 group-hover:bg-accent-600 transition-colors">
                {stage.id}
              </div>
              {i < STAGES.length - 1 && (
                <div className="w-0.5 h-6 bg-navy-200" />
              )}
            </div>
            <span className="text-sm text-navy-600 group-hover:text-navy-900 transition-colors -mt-1">
              {stage.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
