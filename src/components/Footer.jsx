export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-teal-500" />
              <span className="font-semibold text-gray-900">EnergyCo</span>
            </div>
            <p className="mt-3 text-gray-600">Sustainable energy solutions for industries and communities worldwide.</p>
          </div>
          {[
            { title: 'Company', links: ['About', 'Careers', 'Leadership', 'Sustainability'] },
            { title: 'Solutions', links: ['Upstream', 'Downstream', 'New Energy', 'Digital & AI'] },
            { title: 'Resources', links: ['Newsroom', 'Investors', 'Reports', 'Contact'] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-gray-900">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-gray-600 hover:text-teal-700">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} EnergyCo. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
