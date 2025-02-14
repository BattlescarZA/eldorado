export default function Contact() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=145+Main+Road%2C+Walmer%2C+Port+Elizabeth"
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.041284715918!2d25.57283731521289!3d-33.98398098061915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad4e8b4f4b4b5%3A0x1e7ad4e8b4f4b4b5!2s145%20Main%20Rd%2C%20Walmer%2C%20Gqeberha%2C%206071!5e0!3m2!1sen!2sza!4v1705520845000!5m2!1sen!2sza"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="prose prose-lg text-white">
              <p>
                We&apos;d love to hear from you! Whether you have questions about our products, membership, or just want to say hello, feel free to reach out.
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:eldoradopcc2024@gmail.com" className="text-blue-400 hover:text-blue-300">
                  eldoradopcc2024@gmail.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> {' '}
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  145 Main Road, Walmer, Port Elizabeth
                </a>
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                title="El Dorado PCC Location"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}