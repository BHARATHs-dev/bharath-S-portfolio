const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-border"></div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex items-start gap-4">
            <div className="w-3 h-3 bg-brand-magenta rounded-full mt-1.5 ml-1.5 flex-shrink-0"></div>
            <div className="flex-1 pb-6">
              <div className="bg-brand-navy rounded-lg p-4 shadow-sm border border-brand-border">
                <h4 className="font-semibold text-brand-text">{exp.role || exp.program}</h4>
                <p className="text-sm text-brand-muted-text" style={{opacity: 0.7}}>{exp.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
