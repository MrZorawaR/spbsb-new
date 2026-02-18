"use client";

import { useEffect, useRef, useCallback } from "react";

interface VirtualTourModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key === "Tab" && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last?.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first?.focus();
                    }
                }
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
            closeButtonRef.current?.focus();
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <div
            className={`fixed inset-0 z-[60] flex items-center justify-center p-4
                        transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                        ${isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
            role="dialog"
            aria-modal="true"
            aria-label="Virtual Campus Tour Video"
            ref={dialogRef}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-heading/70 backdrop-blur-sm
                            transition-opacity duration-300
                            ${isOpen ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden
                            transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                            ${isOpen ? "scale-100" : "scale-95"}`}
            >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold font-zilla text-heading">
                        Virtual Campus Tour
                    </h3>
                    <button
                        ref={closeButtonRef}
                        onClick={onClose}
                        className="flex items-center justify-center w-9 h-9 rounded-full
                                   bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-heading
                                   transition-colors duration-200
                                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        aria-label="Close virtual tour"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Video container — 16:9 aspect ratio */}
                <div className="relative aspect-video bg-gray-900">
                    {isOpen && (
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/arnFS6rf454?si=Q4wO0zz2W1yic6wy&autoplay=1"
                            title="SPBSB Virtual Campus Tour — 360° walkthrough of campus facilities and classrooms"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
