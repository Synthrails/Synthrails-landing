const founders = [
    {
        name: "Abhinav Reddy Palle",
        role: "CEO",
        image: "https://zwive.s3.us-west-1.amazonaws.com/founder+images/Abhinav.JPG",
        bio: "Founded QuickSight, where he trained vision-language models for long-form video understanding. Previously engineering at Waymo, Intuitive Surgical, and Flexport. MS Computer Science, UC Riverside.",
        linkedin: "https://www.linkedin.com/in/abhinavreddy-palle/",
    },
    {
        name: "Luella Fu",
        role: "Chief Scientist",
        image: "https://zwive.s3.us-west-1.amazonaws.com/founder+images/Luella.jpeg",
        bio: "Tenured Associate Professor of Statistics at SFSU. Hands-on with model training. Her research on large-scale inference is the methodology behind how we evaluate generalization in our policies. PhD Statistics, USC. MS Yale.",
        linkedin: "https://www.linkedin.com/in/luella-fu-9575551b/",
    },
];

const engineering = [
    {
        name: "David Jo",
        role: "ML Intern",
        school: "UC Berkeley",
    },
    {
        name: "Aiden Man",
        role: "Mechanical Engineering Intern",
        school: "UC Berkeley",
    },
];

const openRoles = [
    {
        title: "Founding ML Engineer",
        body: "Train policies end-to-end. Own the data pipeline and the evaluation loop.",
    },
    {
        title: "Founding Robotics Engineer",
        body: "Get models running on real hardware in real environments. Firmware, integration, on-robot debugging.",
    },
];

const initials = (name: string) =>
    name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

const Team = () => {
    return (
        <div>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
                <div className="max-w-4xl">
                    <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-4">
                        Team
                    </div>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.035em] leading-[1.02] text-stone-900">
                        Team.
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
                        Two co-founders. Both of us train the models. One
                        came up doing autonomy engineering at scale, the
                        other researching the mathematical foundations of
                        AI. Interpretable robot foundation models need
                        both: structured representations the system can
                        reason over, and rigorous methods for proving the
                        reasoning works.
                    </p>
                </div>
            </section>

            {/* Founders */}
            <section className="border-t border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-12">
                        Founders
                    </div>
                    <div className="grid md:grid-cols-2 gap-14 md:gap-20 max-w-5xl">
                        {founders.map((founder) => (
                            <div key={founder.name} className="flex flex-col">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover mb-7"
                                />
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">
                                    {founder.name}
                                </h2>
                                <div className="text-sm text-stone-500 mt-1">
                                    {founder.role}
                                </div>
                                <p className="mt-5 text-stone-600 leading-relaxed max-w-md">
                                    {founder.bio}
                                </p>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 font-medium hover:text-stone-600 transition-colors"
                                >
                                    LinkedIn
                                    <span aria-hidden>→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering */}
            <section className="border-t border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-10">
                        Engineering
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
                        {engineering.map((person) => (
                            <div
                                key={person.name}
                                className="flex items-center gap-4 p-5 rounded-2xl border border-stone-200 bg-white"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm font-semibold">
                                    {initials(person.name)}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-base font-semibold text-stone-900 truncate">
                                        {person.name}
                                    </div>
                                    <div className="text-sm text-stone-500 whitespace-nowrap">
                                        {person.role}
                                    </div>
                                    <div className="text-xs text-stone-400 mt-0.5">
                                        {person.school}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring */}
            <section className="border-t border-stone-200 bg-stone-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="max-w-3xl">
                        <div className="text-xs uppercase tracking-[0.16em] text-stone-400 font-semibold mb-4">
                            Hiring
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-white leading-[1.1]">
                            We're building our founding team.
                        </h2>

                        <div className="mt-10 space-y-5">
                            {openRoles.map((role) => (
                                <div
                                    key={role.title}
                                    className="rounded-2xl border border-stone-700 bg-stone-800/40 p-6"
                                >
                                    <div className="text-base font-semibold text-white">
                                        {role.title}
                                    </div>
                                    <p className="mt-2 text-stone-300 leading-relaxed">
                                        {role.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-stone-300 leading-relaxed">
                            Or write to us if you think you should be here.
                        </p>

                        <a
                            href="mailto:abhinav@synthrails.com"
                            className="mt-8 inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-stone-900 text-sm font-medium hover:bg-stone-200 transition-colors"
                        >
                            Get in touch
                            <span aria-hidden>→</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
