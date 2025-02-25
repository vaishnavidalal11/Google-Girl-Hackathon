import { useState } from "react";

export default function Dashboard() {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate AI analysis
    setResults({
      condition: "Sample Condition",
      treatment: "Sample Treatment",
      tests: ["Blood Test", "X-Ray"],
      specialist: "Cardiologist",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white shadow w-64 fixed h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <nav className="mt-6">
            <a href="#" className="block py-2 text-gray-700">Profile</a>
            <a href="#" className="block py-2 text-gray-700">Upload Data</a>
            <a href="#" className="block py-2 text-gray-700">Diagnosis History</a>
            <a href="#" className="block py-2 text-gray-700">Results</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-8">Upload Patient Data</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Symptoms</label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter symptoms..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Medical Images</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>

        {/* Results Section */}
        {results && (
          <div className="mt-8 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Diagnosis Results</h2>
            <p><strong>Condition:</strong> {results.condition}</p>
            <p><strong>Treatment:</strong> {results.treatment}</p>
            <p><strong>Tests:</strong> {results.tests.join(", ")}</p>
            <p><strong>Consult:</strong> {results.specialist}</p>
          </div>
        )}
      </div>
    </div>
  );
}