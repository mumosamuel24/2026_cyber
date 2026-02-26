import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Services & Cyber Solutions Hub
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            IT Support, Government Services Assistance, Web Development,
            Graphic Design & Professional Cyber Café Services — All in One Place.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Services
            </Link>

            <Link
              href="/request"
              className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Request a Service
            </Link>
            <Link
              href="/request"
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Call/Whatsapp +25412643156 Email smumo4751@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Fast & Reliable Service 
              </h3>
              <p className="text-gray-600">
                Quick turnaround times for cyber café services, IT support,
                and government applications.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Secure & Confidential
              </h3>
              <p className="text-gray-600">
                We handle your documents and sensitive information with the
                highest level of security.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Professional Team
              </h3>
              <p className="text-gray-600">
                Experienced staff in IT, design, online services and
                digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}