import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <p className='text-4xl mt-20 text-center welcomStore'>WELCOME</p>
            <br />
            <br />


            <p className='heroDescription relative text-xl flex flex-wrap text-center' style={{ marginLeft: '170px', marginRight: '20px', paddingRight: '10px' }}>Crafting Tomorrow With Today's Finest Bricks</p>






            <div className='heroPicHold flex flex-row '>
                {/* <img src={one} className=" w-20" />
                <img src={two} className=" w-20" />
                <img src={three} className=" w-20" /> */}
            </div>
            <br></br>
            <br></br>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Sustainable Sourcing </p>
                <p> Exceptional Quality </p>
                <p> Natural </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p>Products that renew, embodying<br/>sustainable construction principles.</p>
                <p>Unmatched durability, ensuring <br/>lasting construction strength.</p>
                <p>Eco-friendly materials, conscientiously<br/>chosen for responsible building.</p>
            </div>
        </div>
    )
}

export default HeroSection