export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-900"
        style={{
          backgroundImage: "url('/src/assets/images/IMG_4337_edited.jpg')",
          animation: 'changeBackground 20s infinite'
        }}
      >
        <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl animate-pop-in">
            El Dorado PCC
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/80 animate-fade-in">
            The Future of Cannabis Experience
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* About Section */}
        <section className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Welcome to El Dorado</h2>
          <div className="prose prose-lg text-white">
            <p>
              The premier marijuana dispensary in Port Elizabeth, located at 145 Main Road, Walmer, within the prestigious Bloomingdales Lifestyle Centre. Established in 2024, our sleek and modern facility is revolutionizing the way people experience cannabis.
            </p>
            <p>
              Our mission is to provide superior quality products and exceptional customer service, while modernizing the space and changing the perspective of the industry.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Our Products</h2>
          <div className="prose prose-lg text-white">
            <p>
              At El Dorado, we offer a wide range of products to cater to diverse needs and preferences:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <li>Top-shelf flower</li>
              <li>Oils and dabs</li>
              <li>THC carts</li>
              <li>Edibles</li>
              <li>Paraphernalia</li>
              <li>Joints/pre-rolls</li>
              <li>Vapes</li>
            </ul>
          </div>
        </section>

        {/* Membership Section */}
        <section className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Membership</h2>
          <div className="prose prose-lg text-white">
            <p>
              As a members club, we offer a seamless sign-up process, providing access to an exclusive range of THC and CBD products. Our goal is to change the industry&apos;s landscape by prioritizing quality, convenience, and customer satisfaction.
            </p>
            <p>
              Whether you&apos;re a seasoned cannabis connoisseur or just starting to explore its benefits, our friendly and approachable staff are here to guide you every step of the way.
            </p>
          </div>
        </section>

        {/* Hours Section */}
        <section className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Trading Hours</h2>
          <div className="prose prose-lg text-white">
            <ul className="space-y-2">
              <li>Monday to Thursday: 10 AM - 9 PM</li>
              <li>Friday: 10 AM - 11 PM</li>
              <li>Saturday: 10 AM - 9 PM</li>
              <li>Sunday: 9 AM - 4 PM</li>
            </ul>
            <p className="mt-4">
              Visit us at your convenience and experience the El Dorado difference. Join our community today by signing up for membership, and discover why El Dorado is the go-to destination for cannabis enthusiasts in Port Elizabeth.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}