import home1 from '../img/home1.png';
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt='home1' variants={photoAnimation} />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
