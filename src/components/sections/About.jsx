import { RevealOnScroll } from "../RevealOnScroll";
import {Fragment} from "react";

export const About = () => {
    const frontendSkills = [
        "React",
        "HTML5",
        "TypeScript",
        "TailwindCSS",
        "JavaScript",
    ];

    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "PostgreSQL"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-zinc-800">
                        <p className="text-gray-300 mb-6">
                            I’m <span className="text-cyan-300">Joss</span>, a hands-on engineer turned full-stack developer based in <span className="text-cyan-300">
                            Dallas, TX</span>. I combine real-world experience troubleshooting complex machinery
                            with coding skills in JavaScript, React, Node.js, and SQL to build practical, efficient, and user-focused applications.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-zinc-900 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-zinc-900 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-zinc-800">
                            <h3 className="text-xl font-bold mb-4">  Education  </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Professional Certificate | Full Stack Engineer </strong> - Codecademy
                                    (2017/2025)
                                </li>
                                <li>
                                    <strong> Relevant Coursework:</strong> Full Stack Web Development, RESTful API Development, Database Design
                                    and Management, Git/GitHub Version Control, Deployment and Integration of Full-Stack Applications
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-zinc-800">
                            <h3 className="text-xl font-bold mb-4">  Other Relevant Information  </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <p>
                                        If you would like to learn more about me, please visit my resume attached at the
                                        top of the page or click
                                        <a href="/projects/resume.pdf"
                                           target="_blank"
                                           rel="noreferrer"
                                           className="text-sky-400 hover:text-cyan-300 font-bold transition-colors"> here</a>!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};