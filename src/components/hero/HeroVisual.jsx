const HeroVisual = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-magenta to-brand-pink rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
        <div className="absolute inset-0 border-4 border-dashed border-brand-border rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-4 border-2 border-brand-border rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">💻</span>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual
