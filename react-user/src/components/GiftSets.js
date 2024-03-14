import React from 'react'
import "../styles/GiftSets.css";
import { store } from '../productsStore/Store';
import { st } from '../productsStore/St';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
const GiftSets = () => {
    return (
        <div className='giftSetMainParent'>

            <p className='categoryText font-bold'> CATEGORY </p>

            <div className='flex flex-col gap-8 bestSellerPriceHolder'>

                <Link to={"/Bricks"} >
                    <p className="hover:underline"> BRICKS </p>
                </Link>

                <Link to={"/cement"} >
                    <p className="hover:underline"> CEMENT </p>
                </Link>

                <Link to={"/Sand"} >
                    <p className="hover:underline"> SAND </p>
                </Link>

                <Link to={"/Dust"} >
                    <p className="hover:underline"> DUST </p>
                </Link>

            </div>

            <div className='flex fle-row gap-20 giftHold'>

                {st.map((item) => {
                    if (item.id == "2" || item.id == "7"|| item.id == "8")
                        return (
                            <Link to={`/${item.id}`} key={item.id}>

                                <div key={item.id} className="giftIndivitual">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="GiftImage w-48 rounded-lg mb-6" />
                                    <p className='giftName text-center text-md mb-2'> {item.name} </p>
                                    <p className='giftPrice font-normal text-center' >${item.price} </p>
                                </div>
                            </Link>
                        )
                })}



            </div>
        </div>
    )
}
export default GiftSets