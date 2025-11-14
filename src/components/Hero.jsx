export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-white" />
        <svg className="absolute -top-24 -right-24 h-[600px] w-[600px] text-teal-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.2,-56.2C58.7,-49.8,68.8,-35.6,71.2,-21C73.7,-6.4,68.5,8.6,60.5,22.1C52.6,35.6,41.9,47.6,28.9,53.8C16,59.9,1,60.2,-14.6,61.6C-30.2,62.9,-46.4,65.2,-56.4,57.9C-66.4,50.5,-70.1,33.5,-70.9,17.2C-71.7,1,-69.6,-13.5,-63.3,-26.2C-56.9,-38.8,-46.3,-49.6,-34.4,-56C-22.6,-62.4,-11.3,-64.4,2.1,-67.5C15.4,-70.6,30.8,-74.8,45.2,-56.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 text-teal-700 font-medium bg-teal-50 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              Progressive energy for a better tomorrow
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Reimagining energy for people and planet
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              We deliver sustainable energy solutions that power industries, communities and everyday life while accelerating the global transition.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#solutions" className="px-6 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">Explore Solutions</a>
              <a href="#stories" className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">Latest Stories</a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop" alt="Energy infrastructure" className="rounded-xl shadow-2xl object-cover w-full h-[360px] md:h-[520px]" />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 md:p-6 border border-gray-100">
                <p className="text-sm text-gray-500">Our impact in numbers</p>
                <div className="mt-2 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+70</p>
                    <p className="text-xs text-gray-500">Countries</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50k</p>
                    <p className="text-xs text-gray-500">Employees</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Net-Zero</p>
                    <p className="text-xs text-gray-500">By 2050</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
