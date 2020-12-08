import React, { useEffect } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

import { Link } from 'react-router-dom';


export default function HomeScreen() {

  const dispatch = useDispatch();
const productList = useSelector((state)=> state.productList);
const {loading, error, products } = productList;

useEffect(() => {
  dispatch(listProducts());

  }, [dispatch]);
  return (

    <>
    <Carousel showArrows autoPlay showThumbs={false}>
  
        <Link >
        <img 
      src="https://isteam.wsimg.com/ip/74693bac-ce46-423e-9206-934df1e5dcce/ols/3190_original/:/rs=w:870,h:870"
      alt="balmain sweater"
      />
              </Link >
              <Link >

        <img 
      src="https://isteam.wsimg.com/ip/74693bac-ce46-423e-9206-934df1e5dcce/ols/2785_original/:/rs=w:870,h:870"
      alt="gcsweater"
      />
              </Link >

              <Link >

<img 
      src="https://isteam.wsimg.com/ip/74693bac-ce46-423e-9206-934df1e5dcce/ols/3175_original/:/rs=w:870,h:870"
      alt="burberryheart"
      />
         
        </Link>

        <Link >

<img 
      src="https://isteam.wsimg.com/ip/74693bac-ce46-423e-9206-934df1e5dcce/ols/2732_original/:/rs=w:870,h:870"
      alt="4tigers"
      />
         
        </Link>
     
      
    
 
  </Carousel>


    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
