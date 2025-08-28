import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import profilePic from '/src/assets/profile-pic.png';
import { Socials } from '../Socials';


export const Home = () => {
    // noinspection JSValidateTypes
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <div className="aspect-square w-[40%] sm:w-[30%] md:w-[20%] p-0.75 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 mx-auto">
                        <img
                            src={profilePic}
                            alt="profile pic"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>


                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent leading-right pt-6">
                        Hi, I'm Joss!
                    </h1>


                    <Socials />


                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-sky-400 text-zinc-900 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(110, 255, 255, 0.8)]"
                        >
                            View Projects
                        </a>

                        <a
                            href="/projects/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-sky-500 text-sky-400 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};