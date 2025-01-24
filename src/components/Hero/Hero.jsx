import React from 'react'
import SwiperWidjet from './SwiperWidjet'
import villaMain from '../../assets/1.jpg'
import villaMain1 from '../../assets/2.jpg'
import villaMain2 from '../../assets/3.jpg'
import villaMain3 from '../../assets/4.jpg'
import villaMain4 from '../../assets/5.jpg'
import villaMain5 from '../../assets/6.jpg'


const Hero = () => {

    const data = [
        {
            id:1,
            img: villaMain
        },
        {
            id:2,
            img: villaMain1
        },
        {
            id:3,
            img: villaMain2
        },
        {
            id:4,
            img: villaMain3
        },
        {
            id:5,
            img: villaMain4
        },
        {
            id:6,
            img: villaMain5
        }
]
  return (
    <div className='h-[300px] md:h-[500px] w-full bg-black flex justify-center items-center mt-[93px] md:mt-[100px] lg:mt-[120px]' id='Home'>
        <img src={villaMain} alt='' className='h-full bg-cover w-full'/>
        <div className='container absolute z-10'>
        <SwiperWidjet data={data}/>
        </div>
    </div>
  )
}

export default Hero