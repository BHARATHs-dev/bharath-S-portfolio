const AvailabilityBadge = ({ status = "Open to work" }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 border border-brand-magenta/20 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-magenta"></span>
      </span>
      <span className="text-sm font-medium text-brand-pink">{status}</span>
    </div>
  )
}

export default AvailabilityBadge
