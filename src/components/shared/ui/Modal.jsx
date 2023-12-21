import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {Button} from "./Button";

export function Modal({show, setShow, title, description}) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setShow}>
                <div className="flex items-center justify-center min-h-screen mx-4 text-center block p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black/80 transition-opacity"/>
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"/>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

                        <div className="inline-block bg-gray-950 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle sm:max-w-md w-full p-6">
                            <div>
                                <div className="text-center mt-5">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-300">
                                        {title}
                                    </Dialog.Title>

                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button
                                    className="w-full flex justify-center border-transparent bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 disabled:bg-indigo-800"
                                    onClick={() => setShow(false)}>
                                    Got it
                                </Button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
};