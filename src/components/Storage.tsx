'use client';

import { useEffect, useState } from 'react';
import { useStorageRead, useStorageWrite } from '@/blockchain/hooks';
import useToast from '@/hooks/useToast';

export default function Storage() {
  const toast = useToast();

  const storageRetrieve = useStorageRead<string>('retrieve');

  const [storedValue, setStoredValue] = useState(0);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    const value = storageRetrieve.data;
    setStoredValue(Number(value));
  }, [storageRetrieve.data]);

  const storeNewValue = useStorageWrite('store', {
    onSuccess(data) {
      console.log('data: new value store ', data);
    },
  });

  const handleStorage = async () => {
    if (!newValue) return toast('Please enter new value', 'error');
    const success = await storeNewValue.write([newValue]);
    console.log('success: ', success);
    if (!success) return toast('Store failed', 'error');
    setStoredValue(Number(newValue));
    setNewValue('');
    toast('Store successful', 'success');
  };

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <div className="w-full flex justify-start">
        <p>
          Storage Retrieve: <span className="text-green-500 font-bold">{storedValue || 0}</span>
        </p>
      </div>

      <div className="w-full flex justify-start gap-5">
        <input
          type="text"
          placeholder="Enter new storage value"
          className="p-2 border-none rounded-md focus:outline-cyan-300 text-black"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="border-cyan-700 border-2 rounded-md px-3 py-1" onClick={handleStorage}>
          Store
        </button>
      </div>
    </div>
  );
}
