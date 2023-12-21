import React from 'react';
import Image from "next/future/image";
import power from "@/images/power.gif";
import {InstagramIcon, VkIcon} from "@/components/shared/constants/SocialIcons";
import clsx from "clsx";
import Link from "next/link";
import {motion} from "framer-motion";

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link href={href} className="group flex text-sm font-medium transition text-zinc-200 hover:text-amber-600 mt-2">
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-600"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}


const animation = {
    hidden: {
        x: -100,
        opacity: 0,
        filter: "blur(20px)"
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
        filter: "blur(0px)"
    }),
}

export function Hero() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <motion.div custom={2} variants={animation} className="lg:pl-20">
                <div className="max-w-xs lg:max-w-none">
                    <Image
                        src={power}
                        alt=""
                        className="aspect-square rounded-3xl bg-zinc-100 object-cover dark:bg-zinc-800"/>
                </div>
            </motion.div>

            <motion.div custom={1} variants={animation} className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                    Contrary to popular belief, <a className="text-indigo-500">Lorem Ipsum</a> is not simply random text.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                </div>
            </motion.div>


            <motion.div custom={2} variants={animation} className="lg:pl-20">
                <ul role="list">
                    <SocialLink href="https://www.instagram.com/garrowtm/" icon={InstagramIcon}>
                        All the Lorem
                    </SocialLink>

                    <SocialLink href="https://vk.com/garr1k" icon={VkIcon}>
                        All the Lorem
                    </SocialLink>
                </ul>
            </motion.div>


        </motion.div>
    );
};

export default Hero;
