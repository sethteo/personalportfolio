import React from "react";
import { motion } from "framer-motion";
import { hobbies } from '../constants';
import Slider from "./Slider";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const HobbyCard = ({index, title, icon}) => {
    return (
      <div className='xs:w-[200px] w-full'>
        <div
          variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] 
            py-5 px-12 md:min-h-[150px] flex 
            justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='md:w-12 md:h-12 object-contain h-10 w-10' />
            <h3 className='text-white md:text-[18px] font-bold text-center text-[12px] mt-1'>{title}</h3>
          </div>
        </div>
      </div>
    )
  }

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText}`}>Hobbies.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {/* Change under projects */}
          Snippets of my personal life
        </motion.p>
      </div>
      <Slider/>
      <div className='grid grid-cols-2 gap-10 sm:mt-10 mt-5 lg:flex justify-center'>
      {hobbies.map((service, index) => (
        <div className="flex justify-center">
          <HobbyCard key={hobbies.title} index={index} {...service} />
        </div>
      ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");