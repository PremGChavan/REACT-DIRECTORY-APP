import { useState } from 'react';
import { UserX } from 'lucide-react';

function RetrieveInfo() {
  const [aadhar, setAadhar] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const stored = JSON.parse(localStorage.getItem('directory') || '[]');
    const match = stored.find(p => p.aadhar === aadhar);
    setResult(match || 'none');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Aadhar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value.replace(/\D/g, ''))}
          className="border px-3 py-2 w-full"
          inputMode="numeric"
          pattern="\d*"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {result === 'none' ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 p-6">
          <UserX className="w-16 h-16 text-red-400 mb-4" />
          <h2 className="text-xl font-semibold">No records found</h2>
          <p className="text-sm mt-2 text-center">
            We couldn’t find any records with given AADHAR NUMBER
          </p>
          <p className="text-sm mt-2 text-center">
            Try Re-Entering or check back later.
          </p>
        </div>
      ) : result ? (
        <div className="border p-4 rounded shadow-sm bg-white">
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>DOB:</strong> {result.dob}</p>
          <p><strong>Aadhar:</strong> {result.aadhar}</p>
          <p><strong>Mobile No:</strong> {result.mobile}</p>
          <p><strong>Age:</strong> {result.age}</p>
        </div>
      ) : null}
    </div>
  );
}

export default RetrieveInfo;