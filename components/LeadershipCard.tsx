"use client";

import { useState } from 'react';
import Image from 'next/image';

interface LeaderProp {
    name: string;
    title: string;
    image: string;
    paras: string[];
    quote: string;
}

export default function LeadershipCard({ leader }: { leader: LeaderProp }) {
    const [active, setActive] = useState(false);

    return (
        <div className={`leader-card card-appear group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 relative transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl h-full ${active ? 'active' : ''}`}>
            
            {/* Background gradient effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-[1] pointer-events-none"></div>

            <div className="leader-image-wrapper relative h-80 overflow-hidden">
                <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill
                    className="object-cover object-top transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-heading/0 via-heading/0 to-heading/60"></div>
            </div>
            
            <div className="p-6 md:p-7 relative z-10 bg-white/10">
                <div className={`h-[2px] bg-gradient-to-r from-heading to-accent transition-all duration-400 mb-4 ${active ? 'w-full' : 'w-0'}`}></div>
                
                <h3 className="font-zilla text-2xl font-bold mb-1 text-heading transition-colors duration-400 group-hover:text-accent">
                    {leader.name}
                </h3>
                
                <p className="font-source text-sm text-accent font-bold tracking-wide uppercase mb-5 flex items-center gap-2">
                    {leader.title}
                </p>
                
                <button 
                    onClick={() => setActive(!active)}
                    className="w-full text-left cursor-pointer flex justify-between items-center group/btn outline-none"
                    aria-expanded={active}
                >
                    <span className="font-source text-sm font-bold tracking-wide uppercase text-heading group-hover/btn:text-accent transition-colors">
                        {active ? 'Close Message' : 'Read Message'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-heading group-hover/btn:bg-accent transition-colors flex items-center justify-center text-white relative">
                        <svg 
                            width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-400 ${active ? 'rotate-180' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
            </div>
            
            <div 
                className={`overflow-hidden transition-[max-height] duration-600 ease-in-out bg-cool relative z-10 ${active ? 'max-h-[2000px]' : 'max-h-0'}`}
            >
                <div className="px-6 md:px-7 pt-5 pb-6 border-t border-gray-200">
                    {leader.paras.map((para, idx) => (
                        <p key={idx} className="font-source text-sm text-gray-700 leading-relaxed text-justify mb-4">
                            {para}
                        </p>
                    ))}
                    
                    {leader.quote && (
                        <div className="p-5 rounded-xl mb-6 border-l-4 border-accent bg-white shadow-sm">
                            <p className="text-base font-zilla font-bold italic text-heading leading-snug">
                                &quot;{leader.quote}&quot;
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
