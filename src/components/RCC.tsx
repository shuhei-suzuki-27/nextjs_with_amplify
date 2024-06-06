'use client';
import { useEffect, useState } from 'react';

export default function RCC() {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    fetcher().then((message) => setMessage(message));
  }, []);
  if (!message) {
    return <div>Loading...</div>;
  }
  return <div>RCC</div>;
}

const fetcher = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'React Client Components';
};
