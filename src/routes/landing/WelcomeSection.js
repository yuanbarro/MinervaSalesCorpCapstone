import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../assets/images/welcome-section/pizza-one-parallax.webp'
import PizzaTwo from '../../assets/images/welcome-section/pizza-two-parallax.webp'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo} alt="" className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -100
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne} alt="" className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 100
          }}
          transition={{ duration: 5 }}
        />
        <h2 className="txt-white">
          Welcome to <span>Minerva Sales</span> Corporation
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis, dolor quis efficitur ultrices, 
        dolor tellus ornare massa, in interdum tortor velit ac quam. Integer pulvinar fringilla ullamcorper. 
        Aliquam euismod eget tellus non dictum. Aliquam et rhoncus ex. Sed porttitor sit amet dolor nec gravida. 
        Fusce et luctus orci, sed laoreet nisl. Vestibulum sagittis nisl sit amet odio blandit, aliquam vehicula 
        leo cursus. Aenean sem eros, vestibulum sed aliquet eget, dignissim at mauris. Aliquam erat volutpat. 
        Nullam porttitor justo a sapien auctor, non sodales neque ultricies. Donec ut cursus nisl. Cras commodo 
        nunc sit amet sem dapibus placerat.
        </p>
      </section>
      <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;