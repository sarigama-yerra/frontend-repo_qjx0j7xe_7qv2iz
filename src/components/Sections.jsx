export function TransitionSection() {
  return (
    <section id="transition" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            title: 'Lower Carbon Solutions',
            text: 'Reducing emissions across the value chain with advanced carbon management and efficiency.',
            img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop'
          }, {
            title: 'Renewables & Power',
            text: 'Scaling wind, solar and hydro with smart grids to power homes and industries sustainably.',
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop'
          }, {
            title: 'Future Fuels',
            text: 'Advancing biofuels and hydrogen to decarbonize hard-to-abate sectors like aviation and shipping.',
            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop'
          }].map((card) => (
            <div key={card.title} className="group rounded-xl overflow-hidden border border-gray-200 hover:border-teal-300 transition-all">
              <div className="h-56 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.text}</p>
                <a href="#" className="mt-4 inline-block text-teal-700 font-semibold hover:underline">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Integrated solutions for every sector</h2>
          <a href="#" className="text-teal-700 font-semibold hover:underline">All solutions →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: 'Upstream',
            text: 'Responsible exploration and production with strong environmental stewardship.'
          },{
            title: 'Downstream',
            text: 'High-quality fuels, lubricants and petrochemical products for global markets.'
          },{
            title: 'New Energy',
            text: 'Partnerships and innovation to accelerate renewable adoption at scale.'
          },{
            title: 'Digital & AI',
            text: 'Data-driven optimization and predictive analytics across operations.'
          },{
            title: 'Logistics & Trading',
            text: 'Efficient, transparent supply chains supported by world-class trading.'
          },{
            title: 'Retail & Customers',
            text: 'Everyday convenience and mobility solutions for millions of customers.'
          }].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-teal-600/10 ring-1 ring-teal-600/20 grid place-items-center text-teal-700 font-bold">★</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
              <a href="#" className="mt-4 inline-block text-teal-700 font-semibold hover:underline">Discover →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl overflow-hidden border border-gray-200">
              <img src={`https://images.unsplash.com/photo-15${i}1810${i}5${i}2-0${i}3${i}a${i}1e${i}c${i}d0?q=80&w=1400&auto=format&fit=crop`} alt="Story" className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">Sustainability</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">Innovating towards a lower-carbon future</h3>
                <p className="mt-2 text-gray-600">See how partnerships and technology drive meaningful emissions reductions.</p>
                <a href="#" className="mt-4 inline-block text-teal-700 font-semibold hover:underline">Read story →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InvestorsCta() {
  return (
    <section id="investors" className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Built on resilience. Focused on long-term value.</h2>
            <p className="mt-3 text-teal-50">Explore our performance, governance, and strategy for sustainable growth.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#" className="px-6 py-3 rounded-md bg-white text-teal-700 font-semibold hover:bg-teal-50 transition-colors">Investors Hub</a>
            <a href="#" className="px-6 py-3 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors">ESG Reports</a>
          </div>
        </div>
      </div>
    </section>
  )
}
