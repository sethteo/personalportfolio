import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc'; 
import { slideIn } from '../utils/motion';

import {

  instagram,
  linkedin,
  githublogo,
  email,

} from "../assets";

const Contact = () => {

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='flex items-center w-1/2 h-1/2'>
          
          <div className='w-10 h-10 p-2'>
            <img src={linkedin} alt="linkedin" className='object-contain'/>
          </div>
          <a href='https://www.linkedin.com/in/hongruiteo/'>LinkedIn</a>

        </div>
        
        <div className='flex items-center w-1/2 h-1/2'>
          
          <div className='w-10 h-10 p-2'>
            <img src={instagram} alt="instagram" className='object-contain'/>
          </div>
          <a href='https://www.instagram.com/hoongruii/'>Instagram</a>

        </div>

        <div className='flex items-center w-1/2 h-1/2'>
          
          <div className='w-10 h-10 p-2'>
            <img src={githublogo} alt="github" className='object-contain'/>
          </div>
          <a href='https://github.com/sethteo'>Github</a>

        </div>

        <div className='flex items-center w-1/2 h-1/2'>
          
          <div className='w-10 h-10 p-2'>
            <img src={email} alt="github" className='object-contain'/>
          </div>
          <a href="mailto: e0957708@u.nus.edu">Email me</a>

        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")