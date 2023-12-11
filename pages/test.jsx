import React from 'react';
import {motion} from 'framer-motion'
const Test = () => {
    return (
        <div>




<motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -400,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.2 * 2,
                                    ease: "easeInOut",
                                    duration: 1,
                                },
                            },
                        }}
                        className={`flex flex-col space-y-1 text-deepGreen hover:text-brightGreen duration-200 ease-in cursor-pointer text-center text-5xl
                        CodeMirror text-blue-400 
                        `}
                    >
                    PATATA
                    </motion.div>
            
        </div>
    );
}

export default Test;
