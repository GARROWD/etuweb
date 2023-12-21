import {useEffect, useRef} from 'react'
import {motion} from "framer-motion";

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
    let ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

/*const animation = {
    hidden: {
        opacity: 0,
        filter: "blur(20px)"
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5},
        filter: "blur(0px)"
    },
}*/

export default function App({Component, pageProps, router}) {
    let previousPathname = usePrevious(router.pathname)

    return (
        <>
            {/*<motion.div initial="hidden"
                        whileInView="visible" variants={animation} className="inline">*/}
                <Component previousPathname={previousPathname} {...pageProps} />
            {/*</motion.div>*/}
        </>
    )
}
