// import React from 'react';
// import {client} from '../lib/client';
// import {Product,Cart,Banner,Layout,Navbar,Footer, FooterBanner} from '../components';

// function Home() {
//   return (
//     <>
//     <Banner></Banner>


//     <div className="products-heading" >
//         <h2>Best Selling Products</h2>
//         <p>our shop offers the best food for best price</p>
//     </div>

//     <div className='products-container'>
//         {['product 1','product 2'].map((product)=>product)}
//     </div>

//     <FooterBanner></FooterBanner>
//     </>
//   )
// }

// export default Home;

import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, Banner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <Banner Banner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best food Store</h2>
      <p>dine in or have atke aways</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;