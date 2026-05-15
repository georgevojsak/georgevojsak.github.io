export default function ToftoyPlumbingWebsite() {
  const hours = [
    { day: 'Monday', hours: '9 AM – 6 PM' },
    { day: 'Tuesday', hours: '9 AM – 6 PM' },
    { day: 'Wednesday', hours: '9 AM – 6 PM' },
    { day: 'Thursday', hours: '9 AM – 6 PM' },
    { day: 'Friday', hours: '9 AM – 6 PM' },
    { day: 'Saturday', hours: '11 AM – 4 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const services = [
    'Emergency Plumbing Repairs',
    'Drain Cleaning',
    'Water Heater Installation',
    'Leak Detection & Repair',
    'Pipe Replacement',
    'Residential Plumbing Services',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Reliable Plumbing Services in Fredericksburg, VA
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-8">
              Toftoy Plumbing LLC delivers dependable plumbing solutions for homes and businesses with fast response times and professional service you can trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15404083754"
                className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://maps.google.com/?q=600+Princess+Anne+St,+Fredericksburg,+VA+22408"
                target="_blank"
                rel="noreferrer"
                className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-sky-700 transition"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+15404083754" className="text-sky-100 hover:text-white">
                  +1 (540) 408-3754
                </a>
              </div>

              <div>
                <p className="font-semibold">Address</p>
                <p>600 Princess Anne St</p>
                <p>Fredericksburg, VA 22408</p>
              </div>

              <div>
                <p className="font-semibold">Business Hours</p>
                <div className="space-y-1 text-sky-100">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between border-b border-white/10 py-1">
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Plumbing Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From quick repairs to complete plumbing installations, Toftoy Plumbing LLC provides high-quality workmanship backed by dependable customer care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 text-2xl">
                🔧
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service}</h3>
              <p className="text-slate-600">
                Professional service delivered with attention to detail and reliable support for your plumbing needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="Professional plumber working"
              className="rounded-3xl shadow-xl object-cover h-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Toftoy Plumbing LLC?</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We focus on honest service, quality repairs, and dependable plumbing solutions for homeowners and businesses throughout the Fredericksburg area.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl">
                <h3 className="font-semibold text-xl mb-2">Fast Response Times</h3>
                <p className="text-slate-600">
                  Quick scheduling and responsive service to keep your plumbing issues from becoming bigger problems.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <h3 className="font-semibold text-xl mb-2">Experienced Professionals</h3>
                <p className="text-slate-600">
                  Skilled plumbing expertise for installations, repairs, maintenance, and emergency calls.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <h3 className="font-semibold text-xl mb-2">Customer-Focused Service</h3>
                <p className="text-slate-600">
                  Friendly communication, dependable workmanship, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Need Plumbing Help Today?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Contact Toftoy Plumbing LLC for dependable plumbing services in Fredericksburg, Virginia.
          </p>

          <a
            href="tel:+15404083754"
            className="inline-block bg-white text-sky-700 font-bold px-8 py-4 rounded-2xl text-lg hover:scale-105 transition shadow-lg"
          >
            Call +1 (540) 408-3754
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Toftoy Plumbing LLC</h3>
            <p>
              Reliable plumbing services for Fredericksburg, VA and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p>600 Princess Anne St</p>
            <p>Fredericksburg, VA 22408</p>
            <a href="tel:+15404083754" className="block mt-2 hover:text-white">
              +1 (540) 408-3754
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Business Hours</h4>
            <div className="space-y-1 text-sm">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Toftoy Plumbing LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
