"use client"; 

import { useState } from 'react';
import { submitOrder } from '@/services/api';

export default function OrderPage() {
  const [itemId, setItemId] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Processing order...");
    setIsError(false);

    try {
      const data = await submitOrder(itemId, quantity);
      setMessage(`✅ ${data.message} | Total: ${data.total_charged} Tk`);
      setItemId('');
      setQuantity('');
    } catch (error: any) {
      setIsError(true);
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto py-6">
      <h1 className="text-3xl font-bold text-slate-800 text-center mb-6">Place an Order</h1>
      
      <form onSubmit={handleOrder} className="flex flex-col gap-4">
        <input 
          type="number" 
          placeholder="Enter Item ID" 
          value={itemId} 
          onChange={(e) => setItemId(e.target.value)} 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button 
          type="submit" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-md transition shadow-md"
        >
          Submit Order
        </button>
      </form>

      {message && (
        <p className={`mt-6 text-center font-bold p-3 rounded-md ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </p>
      )}
    </div>
  );
}