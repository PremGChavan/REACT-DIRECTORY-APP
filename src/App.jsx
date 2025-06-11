import { useState } from 'react';
import AddPerson from './components/AddPerson';
import RetrieveInfo from './components/RetrieveInfo';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('add');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            onClick={() => setActiveTab('add')}
          >
            Add New Person
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'retrieve' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            onClick={() => setActiveTab('retrieve')}
          >
            Retrieve Information
          </button>
        </div>

        {activeTab === 'add' ? 
          <AddPerson className="bg-gray-300" /> 
          : 
          <RetrieveInfo className="bg-gray-300"/>
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;