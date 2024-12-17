import React from 'react'
import Image from 'next/image'
function product() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold"> featured Product</h1>
      </div>
      <div className="flex justify-center">
        <Image
          src="/Products (2).png"
          alt="maskgroup"
          width={312}
          height={377}
        />
        <Image src="/Image.png" alt="maskgroup" width={312} height={377} />
        <Image
          src="/Products (3).png"
          alt="maskgroup"
          width={312}
          height={377}
        />
        <Image src="/Products.png" alt="maskgroup" width={312} height={377} />
      </div>
      <div>
        <h1>TOP Categories</h1>
      </div>
      <div className="categories flex justify-center py-5">
              <Image src="/Category (3).png" alt="maskgroup" width={424} height={424} />
              <Image src="/Image (2).png" alt="maskgroup" width={424} height={424} />
              <Image src="/Category (4).png" alt="maskgroup" width={424} height={424} />


          </div>
          <div>
              
          </div>
    </div>
  );
}

export default product