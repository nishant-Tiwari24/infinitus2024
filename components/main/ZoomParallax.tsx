import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
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
            src: '/images/img (6).jpg',
            scale: scale5
        },
        {
            src: '/images/maffick-shows.jpg',
            scale: scale6
        },
        {
            src: '/images/maffick-shows.jpeg',
            scale: scale5
        },
        {
            src:'/images/img (11).jpg',
            scale: scale6
        },
        {
            src: '/images/maffick-shows.png',
            scale: scale8
        },
        {
            src: '/images/armanMalik01.jpg',
            scale: scale9
        },
        
    ]

    return (
        <div ref={container} className='container2'>
            <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent  m-10'>Infinitus 2023</h1>
            <div className='sticky'>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className='el'>
                            <div className='imageContainer2'>
                                <Image
                                    src={src}
                                    alt="image"
                                    fill
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}