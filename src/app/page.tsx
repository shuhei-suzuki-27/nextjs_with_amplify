import { Suspense } from 'react';
import DummyRSC from '@/components/DummyRSC';

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DummyRSC />
    </Suspense>
  );
}
