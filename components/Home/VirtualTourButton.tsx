"use client";

import { useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";

const VirtualTourModal = dynamic(() => import("./VirtualTourModal"), {
    ssr: false,
});

export default function VirtualTourButton() {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        triggerRef.current?.focus();
    }, []);

    return (
        <>
            <button
                ref={triggerRef}
                onClick={() => setIsOpen(true)}
                aria-label="Play virtual campus tour video"
                className="group flex items-center justify-center
                           w-20 h-20 max-md:w-16 max-md:h-16
                           rounded-full bg-accent hover:bg-accent/90
                           shadow-lg shadow-accent/30
                           transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                           hover:scale-110 active:scale-95
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
                <svg
                    className="w-7 h-7 max-md:w-5 max-md:h-5 text-white ml-1
                               transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
            </button>

            <VirtualTourModal isOpen={isOpen} onClose={handleClose} />
        </>
    );
}
