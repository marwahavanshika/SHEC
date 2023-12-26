
import "./styles.css";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="sec">
            <div ref={ref} className="di">
                <img src={`/${id}.jpg`} alt="A London skyscraper" />
            </div>
            {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
        </section>
    );
}

export default function Parallax() {

    return (
        <div className="flex flex-col h-screen">
            <div className="snap">
                {[1, 2, 3].map((image) => (
                    <Image id={image} />
                ))}
            </div>
        </div>
    );
}
