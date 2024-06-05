import { Suspense } from 'react';
import RSC from '@/components/RSC';
import RCC from '@/components/RCC';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RSC />
      </Suspense>
      <RCC />
    </>
  );
}
