'use client'
import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const CallToAction = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-subtitle mt-5">{" "}Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts</p>
          <motion.img src={starImage.src} style={{translateY}} width={360} alt="star" className="absolute -top-[137px] -left-[350px]" />
          <motion.img src={springImage.src} style={{translateY}} width={360} alt="spring" className="absolute -top-[19px] -right-[331px]" />
        </div>
          <div className="flex gap-2 mt-10 justify-center">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1"><span>
              Learn more
              </span>
              <ArrowRight className="w-4 h-4" />
              </button>
          </div>
      </div>
    </section>
  );
};

