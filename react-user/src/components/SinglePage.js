import React from 'react';
import { useParams } from 'react-router-dom';
import { st } from '../productsStore/St';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import "../styles/SinglePage.css";
import { AiFillStar } from "react-icons/ai";
import SinglePageFAQ from './SinglePageFAQ';

import AutoPlayMethods from './SingleAlsoLike';
import JournalSection from "./JournalSection"
import SearchBox from './SearchBox';
import Review1 from './Review1';

import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import SPFooter from './SPFooter';
import {GiCardboardBoxClosed} from "react-icons/gi";
import { useToast } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";

const SinglePage = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();


  const addItemToCartHandler = (e) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        image,
      })

      
    );
  
  };

  const prodClicked = st.find((item) => item.id === id);
  const { name, price, primaryImage, hoverImg } = prodClicked;
  let title = name;
  let image = primaryImage;

  const [activeImg, setActiveImg] = useState(primaryImage);
  const [imgChange, setImgChange] = useState(false);

  const imgSrcTarget = (e) => {
    setActiveImg(e.target.src);
    setImgChange(true);
  };

  const defaultImageSrc = () => {
    setActiveImg(primaryImage);
    setImgChange(false);
  };

  let numOfRev = Math.floor(Math.random() * (4 - 4 + 1)) + 4;
  const toast = useToast();

  return (
    <div className="singlePageMainParent">
      <div className="bgGrey h-14 sinLih">
        <BreadCrumb name={title} />
      </div>

      <div className="flex items-start">
        <figure className="singlePageMainPicHold">
          {imgChange ? (
            <img
              src={activeImg}
              className="w-48 cursor-pointer rounded-2xl object-cover singlePageMainPic"
            />
          ) : (
            <img
              src={image}
              className="w-48 cursor-pointer rounded-2xl object-cover singlePageMainPic"
            />
          )}
        </figure>

    

        <div className="namePriceSP flex flex-col gap-6 ml-4">
          <p className="font-semibold text-xl w-80">{name}</p>
          <p className="text-xl sp">${price}</p>
          
          <div className="card-actions" onClick={() =>
                            toast({
                                title: '',
                                description: "Successfully Added",
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                            })
                        }>
                            <button className="btn btn-primary" onClick={addItemToCartHandler}>ADD TO CART</button>
          
         
          {/* Product info */}
          
        </div>
        <div className='productInfo'>
          <SinglePageFAQ />
  </div>
        </div>
      </div>

      <p className="singleLinetop text-gray-300 mt-4">
        _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________
      </p>

      {/* <div className="flex items-center gap-2 starHold">
        {Array.from({ length: numOfRev }, (_, index) => (
          <AiFillStar key={index} />
        ))}
        <p className="font-semibold l1rem">
          {Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews{" "}
        </p>
      </div> */}

      <div>
        {/* Product description or info goes here */}
      </div>

      <div className="spfooterHold mt-20">
        <SPFooter />
      </div>
    </div>
  );
};

export default SinglePage;
