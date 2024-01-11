import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation
} from "../config/motion"
import state from "../store/index"
import CustomButton from "../components/CustomButton";

const Home = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('left')}>
            <img src="./lg.png" alt="logo" className="w-16 h-17 object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden"/> DO IT.
              </h1>
            </motion.div>
            <motion.div>
              <p className="pb-3">
                Create your unique and exclusive tshirt with our brand new 3d customization tool. <strong>Unleash your imagination</strong>{""} and define your own style.
              </p>
              <CustomButton 
                type='filled' 
                title="Customize It"
                handleClick={()=> state.intro = false} 
                customStyles="w-fit px-4 py-2.5 text-sm font-bold "/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home