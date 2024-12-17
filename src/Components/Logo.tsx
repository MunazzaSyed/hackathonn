import React from 'react'
import Image from 'next/image';

function logo() {
  return (
      <div className='py-7 flex justify-center gap-6 item center'>
      
      <Image src="/Logo (2).png" alt="maskgroup" width={67} height={60} />
      <Image src="/Logo (3).png" alt="maskgroup" width={67} height={60} />
      <Image src="/Logo (4).png" alt="maskgroup" width={67} height={60} />
      
      <Image src="/Logo (6).png" alt="maskgroup" width={67} height={60} />
      <Image src="/Logo (7).png" alt="maskgroup" width={67} height={60} />
    </div>
  );
}

export default logo