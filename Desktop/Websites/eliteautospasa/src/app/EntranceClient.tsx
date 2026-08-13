'use client';

import dynamic from 'next/dynamic';

const Entrance = dynamic(() => import('@/components/Entrance/Entrance'), { ssr: false });

export default function EntranceClient() {
  return <Entrance />;
}
