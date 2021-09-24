import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {
    const variants = {
        initial: {
            opacity : 0,
            transition : { duration : 0.5 },
            x : 100,
        },
        visible : {
            opacity: 1,
            x : 0,
        },
        exit : {
            opacity : 0,
            transition : { duration : 0.3 },
            x : -100,
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div 
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                className="home"
            >
                <Navigation/> 
                <SocialNetwork/>
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag onDragEnd>ToWebApp</motion.h1>
                        <motion.h3 drag onDragEnd>Your Website</motion.h3>
                        <motion.h2 drag onDragEnd>
                            <DynamicText />
                        </motion.h2>
                    </div>
                </div>
                <ButtonsBottom  right={"/portefolio/cscb"}/>
            </motion.div>
        </main>
    );
};

export default Home;