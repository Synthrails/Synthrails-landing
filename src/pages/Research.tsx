import { Link } from "react-router-dom";

const posts = [
    {
        slug: "object-centric-grounding",
        title: "Object-centric grounding for general-purpose robots",
        summary:
            "First results on the substrate our foundation models are being built around. Policies that reason over object-centric structure instead of raw pixels are 3× more sample efficient and 40 points more reliable in cluttered, out-of-distribution scenes.",
        date: "May 2026",
        tag: "Research",
    },
];

const Research = () => {
    return (
        <div>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="max-w-4xl">
                    <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-4">
                        Research
                    </div>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.035em] leading-[1.02] text-stone-900">
                        How we're building it.
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
                        Notes from the Synthrails team on what we're working
                        on, why, and what we're learning along the way.
                        Early posts validating the ideas our foundation
                        models will be built around.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="border-t border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                    <div className="max-w-5xl">
                        <ul className="divide-y divide-stone-200">
                            {posts.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        to={`/research/${post.slug}`}
                                        className="group grid md:grid-cols-12 gap-8 py-10 md:py-14 items-start"
                                    >
                                        <div className="md:col-span-4">
                                            <ResearchThumbnail />
                                        </div>
                                        <div className="md:col-span-8">
                                            <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                                                <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
                                                    {post.tag}
                                                </span>
                                                <span>{post.date}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="mt-4 text-stone-600 leading-relaxed max-w-2xl">
                                                {post.summary}
                                            </p>
                                            <div className="mt-5 inline-flex items-center text-sm text-stone-900">
                                                Read the post
                                                <span className="ml-1 transition-transform group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ResearchThumbnail = () => (
    <div className="aspect-[4/3] rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden flex items-center justify-center">
        <svg
            viewBox="0 0 320 240"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden
        >
            {/* Subtle background grid */}
            <defs>
                <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="#e7e5e4"
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>
            <rect width="320" height="240" fill="url(#grid)" />

            {/* Faint distractor objects (background) */}
            <circle cx="60" cy="60" r="14" fill="#e7e5e4" opacity="0.7" />
            <rect x="240" y="50" width="22" height="22" rx="3" fill="#e7e5e4" opacity="0.7" />
            <circle cx="270" cy="180" r="10" fill="#e7e5e4" opacity="0.7" />
            <rect x="40" y="170" width="18" height="14" rx="2" fill="#e7e5e4" opacity="0.7" />

            {/* Two highlighted "tracked" objects with bounding boxes */}
            <g>
                <rect
                    x="100"
                    y="80"
                    width="58"
                    height="58"
                    rx="6"
                    fill="none"
                    stroke="#1c1917"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                />
                <circle cx="129" cy="109" r="20" fill="#1c1917" />
                <text
                    x="100"
                    y="74"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9"
                    fill="#1c1917"
                >
                    target
                </text>
            </g>

            <g>
                <rect
                    x="180"
                    y="120"
                    width="70"
                    height="50"
                    rx="6"
                    fill="none"
                    stroke="#1c1917"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                />
                <rect x="190" y="130" width="50" height="32" rx="3" fill="#1c1917" />
                <text
                    x="180"
                    y="114"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9"
                    fill="#1c1917"
                >
                    receptacle
                </text>
            </g>
        </svg>
    </div>
);

export default Research;
