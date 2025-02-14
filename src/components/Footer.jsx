export default function Footer() {
  return (
    <footer className="bg-black/50 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} El Dorado PCC. All rights reserved.
          </p>
          <p className="mt-1">
            Built by <span className="font-medium">Quantanova AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}