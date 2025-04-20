// // import React from 'react'
// // import Link from 'next/link';

// // const Banner = () => {
// //   return (
// //     <div className='banner-container'>
// //       <div>
// //         <p className='beats-solo'>SMALL TEXT</p>
// //         <h3>MID TEXT</h3>
// //         <img src="" alt="Samosa" className='banner-image'/>
// //         <div>
// //           <Link href={product/ID}>

// //           <Link/>
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// // export default Banner

// import Link from 'next/link'

// const Banner = () => {
//   const productId = '123' // Replace with actual ID or prop

//   return (
//     <div className='banner-container'>
//       <div>
//         <p className='beats-solo'>SMALL TEXT</p>
//         <h3>MID TEXT</h3>
//         <img src="" alt="Samosa" className='banner-image' />
//         <div>
//           <Link href={`/product/${productId}`}>
//             <button type='button'>button</button>
//           </Link>
//           <div className='desc'>
//             <h5>description</h5>
//             <p>DESCRIPTION</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner



import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Banner = ({ Banner }) => {
  return (
    <div className="banner-container">
      <div>
        <p className="beats-solo">{Banner.smallText}</p>
        <h3>{Banner.midText}</h3>
        <h1>{Banner.largeText1}</h1>
        <img src={urlFor(Banner.image)} alt="Samosa" className="banner-image" />

        <div>
          <Link href={`/product/${Banner.product}`}>
            <button type="button">{Banner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{Banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner