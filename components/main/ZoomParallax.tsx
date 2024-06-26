import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: '/images/armanMalik01.jpg',
            scale: scale4
        },
        {
            src: '/images/glimpses1.png',
            scale: scale5
        },
        {
            src: '/images/glimpses2.png',
            scale: scale6
        },
        {
            src: '/images/glimpses3.png',
            scale: scale5
        },
        {
            src:'/images/img (11).jpg',
            scale: scale6
        },
        {
            src: '/images/glimpses5.png',
            scale: scale8
        },
        {
            src: '/images/img (3).jpg',
            scale: scale9
        },
        
    ]

    return (
        <div ref={container} className='container2'>
            <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space text-transparent  m-10'>Glimpses of Infinitus 2023</h1>
            <div className='sticky'>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className='el'>
                            <div className='imageContainer2'>
                                <img
                                    src={src}
                                    alt="image"
                                    style={{ transform: `scale(${scale})`, objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
