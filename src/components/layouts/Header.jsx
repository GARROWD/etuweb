import React, {Fragment} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from "next/future/image";
import {Popover, Transition} from '@headlessui/react'
import clsx from 'clsx'
import {Container} from '@/components/layouts/Container'
import cat from "@/images/cat.gif";

function Logo() {
    return (
        <Image src={cat} alt="" className="aspect-square object-cover"/>
    )
}

function MobileNavLink({href, children, className}) {
    return (
        <li>
            <Popover.Button as={Link} href={href}
                            className={clsx(
                                "block font-medium hover:text-indigo-500 p-1 m-1 rounded-md outline-none focus-visible:ring-2 ring-indigo-500 transition-all duration-400",
                                className)}>
                {children}
            </Popover.Button>
        </li>
    )
}

function MobileNavIcon({open}) {
    return (
        <svg aria-hidden="true"
             className="h-3.5 w-3.5"
             fill="none"
             strokeWidth={2}
             strokeLinecap="round">
            <path d="M0 1H14M0 7H14M0 13H14"
                  className={clsx('origin-center transition-all', open && 'scale-90 opacity-0')}/>
            <path d="M2 2L12 12M12 2L2 12" className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}/>
        </svg>
    )
}

function MobileNavigation(props) {
    return (
        <Popover {...props}>
            <Popover.Button
                className="z-50 overflow-visible stroke-zinc-100 hover:stroke-indigo-500 relative items-center p-2 m-1 rounded-md outline-none focus-visible:ring-2 ring-indigo-500 transition">
                {({open}) => <MobileNavIcon open={open}/>}
            </Popover.Button>

            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">

                    <Popover.Overlay className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/80"/>
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Popover.Panel
                        focus
                        className="absolute z-50 inset-x-0 flex flex-col origin-top rounded-2xl p-8 bg-gray-950 mx-4 shadow-glow">
                        <nav>
                            <ul className="-my-2 text-base text-zinc-300">
                                <MobileNavLink href="/home">Home</MobileNavLink>
                                <MobileNavLink href="/news">News</MobileNavLink>
                                <MobileNavLink href="/contacts">Contacts</MobileNavLink>
                                <MobileNavLink href="/about">About</MobileNavLink>

                                <hr className="my-1 rounded border-zinc-100/5 border"/>

                                <MobileNavLink href="/sign-in" className="last:hover:text-amber-600">Sign
                                    In</MobileNavLink>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

function DesktopNavLink({href, children, className}) {
    let isActive = useRouter().pathname === href

    return (
        <li>
            <Link href={href}>
                <button className={clsx('transition relative block',
                                        isActive ? 'text-indigo-500' : 'hover:text-indigo-500',
                                        className)}>{children}</button>
                {/*{isActive
                    && (<span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"/>)}*/}
            </Link>
        </li>
    )
}

function DesktopNavigation(props) {
    return (
        <nav {...props}>
            <ul className="flex space-x-4 text-sm font-medium text-zinc-200">
                <DesktopNavLink href="/home">Home</DesktopNavLink>
                <DesktopNavLink href="/news">News</DesktopNavLink>
                <DesktopNavLink href="/contacts">Contacts</DesktopNavLink>
                <DesktopNavLink href="/about">About</DesktopNavLink>

                <hr className="mx-4 rounded border-zinc-100/5 border h-6"/>

                <DesktopNavLink href="/sign-in" className='last:hover:text-amber-600'>Sign
                    In</DesktopNavLink>
            </ul>
        </nav>
    )
}

export function Header() {
    return (
        <>
            <header className="pointer-events-none relative z-50 z-10 h-10">
                <Container className="fixed w-full" variant="blur">
                    <div className="h-12 flex">
                        <div className="flex justify-center">
                            <Logo/>
                        </div>

                        <div className="flex flex-1 flex-col justify-center">
                            <p className="px-3 text-xl font-medium text-indigo-500">

                            </p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <MobileNavigation className="pointer-events-auto md:hidden"/>
                            <DesktopNavigation className="pointer-events-auto hidden md:block"/>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}
