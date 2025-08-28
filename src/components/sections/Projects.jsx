import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-300
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-zinc-800">
                            <h3 className="text-xl font-bold mb-2">TBD-Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Scalable cloud infrastructure management with real-time
                                monitoring and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-zinc-900 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-600
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-default
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Live Demo →
                                </a>
                                <a
                                    href="" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Code →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-cyan-300
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-zinc-800
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Movie Rating Application</h3>
                            <p className="text-gray-400 mb-4">
                                A full-stack React app that pulls movie data from the IMDb API, lets users rate films,
                                and manages data with Appwrite.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS", "JavaScript", "API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-zinc-900 text-cyan-400 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-zinc-600 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-default
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="../../../projects/movie-rating-app/" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Live Demo →
                                </a>
                                <a
                                    href="" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Code →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-cyan-300
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-zinc-800
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Insert App</h3>
                            <p className="text-gray-400 mb-4">
                                Insert description.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Tech", "Tech", "Tech", "Tech"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-zinc-900 text-cyan-400 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-zinc-600 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-default
                    "
                                        >
                      {tech}
                    </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Live Demo →
                                </a>
                                <a
                                    href="" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Code →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-cyan-300
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-zinc-800
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Insert App</h3>
                            <p className="text-gray-400 mb-4">
                                Insert description.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Tech", "Tech", "Tech", "Tech"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-zinc-900 text-cyan-400 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-zinc-600 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-default
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="#" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Live Demo →
                                </a>
                                <a
                                    href="" target="_blank" rel="noopener noreferrer"
                                    className="text-sky-400 hover:text-cyan-200 transition-colors my-4"
                                >
                                    View Code →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};