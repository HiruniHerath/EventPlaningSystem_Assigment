import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const boxVariant = {
  visible: { opacity: 2, scale: 0.9, transition: { duration: 2.9 } },
  hidden: { opacity: 1, scale: 0 }
};
const Box = ({ data,num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Card >
        <Card.Body>
          <Card.Title>  
            {num}      
          </Card.Title>
          <Card.Text>
            {data}
            
          </Card.Text>

        </Card.Body>
      </Card>

    </motion.div>
  );
};

export default function Aboutbox() {
  return (
    <div className="App">
      <Box num={1} data={'hi hi hi'}/> 
      <Box num={2} data={'nrw mkfshksf'}/>
      <Box num={3} data={'kkf jjdj kjkk'}/>
      <Box num={4} data={'hh hh jjjhh'}/>
      <Box num={5} data={'Hi ModA Kyra'}/>

    </div>
  );
}