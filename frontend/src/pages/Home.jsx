export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">DiagnoAssist</h1>
            <nav>
              <a href="/" className="mr-4 text-gray-700">Home</a>
              <a href="/about" className="mr-4 text-gray-700">About</a>
              <a href="/contact" className="mr-4 text-gray-700">Contact</a>
              <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
            </nav>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Accurate Diagnoses, Better Care</h2>
            <p className="mb-8">AI-powered diagnostic assistance for healthcare professionals.</p>
            <div>
              <a href="/dashboard" className="bg-white text-blue-600 px-6 py-3 rounded mr-4">Get Started</a>
              <a href="/dashboard" className="border border-white text-white px-6 py-3 rounded">Login</a>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Analyze Medical Images</h3>
              <p>Upload and analyze X-rays, MRIs, and more.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Patient Data Management</h3>
              <p>Store and manage patient records securely.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Symptom-Based Diagnosis</h3>
              <p>Get AI-powered insights based on symptoms.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Treatment Recommendations</h3>
              <p>Receive tailored treatment plans.</p>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-white shadow mt-12">
          <div className="container mx-auto px-6 py-4 text-center">
            <p>&copy; 2023 DiagnoAssist. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }