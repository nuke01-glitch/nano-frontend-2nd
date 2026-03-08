// app/components/PredictionForm.tsx
'use client';
import { useState } from 'react';
import api from '../../src/services/api'; 

export default function PredictionForm() {
  const [data, setData] = useState({ formula: '', size: '', material_class: '', shape: '', crystal_structure: '' });
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await api.post('/predict', {
        ...data,
        size: parseFloat(data.size)
      });
      setResult(response.data.bandgap);
    } catch (err) { console.error(err); } 
    finally { setLoading(false); }
  };

  return (
    <div className="p-6 border rounded-xl bg-zinc-900 text-white space-y-4">
      {['formula', 'size', 'material_class', 'shape', 'crystal_structure'].map((field) => (
        <input key={field} placeholder={field.replace('_', ' ')} 
          className="block w-full p-2 bg-zinc-800 border-none rounded"
          onChange={(e) => setData({...data, [field]: e.target.value})} 
        />
      ))}
      <button onClick={handlePredict} className="w-full bg-blue-600 p-2 rounded">
        {loading ? 'Predicting...' : 'Get Prediction'}
      </button>
      {result !== null && <h3 className="text-xl font-bold">Bandgap: {result} eV</h3>}
    </div>
  );
}
