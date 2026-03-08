// app/components/PredictionForm.tsx
'use client'; // This is essential for interactivity in Next.js App Router

import { useState } from 'react';
import api from '../../src/services/api'; 

export default function PredictionForm() {
  const [formula, setFormula] = useState('');
  const [size, setSize] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handlePredict = async () => {
    try {
      const response = await api.post('/predict', {
        formula,
        size: parseFloat(size),
      });
      setResult(response.data.bandgap);
    } catch (error) {
      console.error("Prediction failed:", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <input 
        onChange={(e) => setFormula(e.target.value)} 
        placeholder="Formula (e.g., CdSe)" 
      />
      <input 
        onChange={(e) => setSize(e.target.value)} 
        placeholder="Size (nm)" 
      />
      <button onClick={handlePredict}>Get Prediction</button>
      {result !== null && <h3>Predicted Bandgap: {result} eV</h3>}
    </div>
  );
}