import { UserX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { calculateAge } from '../utils/calculateAge';

function AddPerson() {
  const [rows, setRows] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('directory') || '[]');
    setUserData(stored);
  }, []);

  const handleAddRow = () => {
    setShowAddForm(true);
    setRows([{ name: '', dob: '', aadhar: '', mobile: '', age: '', saved: false }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    if (field === 'dob') {
      updated[index].age = calculateAge(value);
    }
    setRows(updated);
  };

  const handleSave = (index) => {
    const person = rows[index];

    if (!person.name || !person.dob || !person.aadhar || !person.mobile) {
      alert('Please fill all fields.');
      return;
    }
    if (!/^[0-9]{12}$/.test(person.aadhar)) {
      alert('Aadhar number must be 12 digits.');
      return;
    }
    if (!/^[0-9]{10}$/.test(person.mobile)) {
      alert('Mobile number must be 10 digits.');
      return;
    }

    const stored = JSON.parse(localStorage.getItem('directory') || '[]');
    stored.push(person);
    localStorage.setItem('directory', JSON.stringify(stored));

    const updated = [...rows];
    updated[index].saved = true;
    setRows(updated);
    setUserData([...stored]);
    setShowAddForm(false);
  };

  const handleDeleteUser = (aadhar) => {
    let stored = JSON.parse(localStorage.getItem('directory') || '[]');
    stored = stored.filter(p => p.aadhar !== aadhar);
    localStorage.setItem('directory', JSON.stringify(stored));
    setUserData(stored);
  };

  return (
    <div>
      {!showAddForm && (
        <button
          onClick={handleAddRow}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New
        </button>
      )}

      {showAddForm && (
        <table className="w-full border mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">DOB</th>
              <th className="p-2 border">Aadhar</th>
              <th className="p-2 border">Mobile</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="bg-white">
                <td className="p-2 border">
                  <input type="text" value={row.name} onChange={(e) => handleChange(idx, 'name', e.target.value)} className="w-full border px-2" />
                </td>
                <td className="p-2 border">
                  <input type="date" value={row.dob} onChange={(e) => handleChange(idx, 'dob', e.target.value)} className="w-full border px-2" />
                </td>
                <td className="p-2 border">
                  <input type="text" value={row.aadhar} onChange={(e) => handleChange(idx, 'aadhar', e.target.value)} className="w-full border px-2" />
                </td>
                <td className="p-2 border">
                  <input type="text" value={row.mobile} onChange={(e) => handleChange(idx, 'mobile', e.target.value)} className="w-full border px-2" />
                </td>
                <td className="p-2 border bg-gray-400 text-center">{row.age}</td>
                <td className="flex justify-center p-2 border ">
                  <button onClick={() => handleSave(idx)} className="bg-green-500 text-white px-2 py-1 rounded">Save User Data</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Saved Users Table */}
      {userData.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Saved Users</h2>
          <table className="w-full border rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">Aadhar</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.dob}</td>
                  <td className="p-2 border">{user.aadhar}</td>
                  <td className="p-2 border">{user.mobile}</td>
                  <td className="p-2 border">{user.age}</td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => handleDeleteUser(user.aadhar)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 p-6">
          <UserX className="w-50 h-50 text-red-400 mb-4" />
          <h2 className="text-5xl font-bold">No User Data Found</h2>
          <p className="text-xl mt-2 text-center">
            We couldn’t find any user data.
          </p>
          <p className="text-l mt-2 text-center text-red-400">
            To add data Please use  Add New Button.
          </p>
        </div>  
      )}
    </div>
  );
}

export default AddPerson;
