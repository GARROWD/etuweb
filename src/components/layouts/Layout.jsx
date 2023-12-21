import React from 'react';
import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {motion} from "framer-motion";

const animation = {
    hidden: {
        opacity: 0,
        filter: "blur(20px)"
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5},
        filter: "blur(0px)"
    },
}

export function Layout({children}) {
    return (
        <>
            <div initial="hidden"
                        whileInView="visible" variants={animation} className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-gray-950 shadow-glow"/>
                </div>
            </div>

            <div initial="hidden"
                        whileInView="visible" variants={animation} className="relative">
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};
