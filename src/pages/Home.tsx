import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.06),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          {/* What's new pill */}
          <div
            className="mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            <Link
              to="/research/object-centric-grounding"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/80 backdrop-blur text-xs text-stone-700 hover:border-stone-300 hover:bg-white transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-medium text-stone-900">New research</span>
              <span className="text-stone-300">/</span>
              <span>Object-centric grounding for general-purpose robots</span>
              <span className="text-stone-400">→</span>
            </Link>
          </div>

          <h1
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-[-0.04em] leading-[0.98] text-stone-900 max-w-5xl animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            Foundation models for general-purpose robots.
          </h1>

          <p
            className="mt-10 text-lg md:text-2xl text-stone-600 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Synthrails builds general-purpose robots and the foundation
            models that drive them. We design every layer of the model to be
            inspectable, because the robots that actually get deployed will
            be the ones somebody can audit when they fail.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href="mailto:abhinav@synthrails.com"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/research"
              className="inline-flex items-center px-5 py-3 rounded-full border border-stone-300 text-stone-900 text-sm font-medium hover:bg-stone-100 transition-colors"
            >
              See our research
            </Link>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold sticky top-24">
              What we believe
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.025em] text-stone-900 leading-[1.1]">
              Black boxes don't ship.
            </h2>
            <div className="mt-10 space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl">
              <p>
                Most robot foundation models today are end-to-end black
                boxes: pixels go in one side, torques come out the other,
                and everything between sits in latent vectors nobody on the
                team can read. That works fine when training data covers
                what the robot actually sees in deployment. When it doesn't,
                you get strange failure modes that are hard to debug, and
                the field's response has been to throw more data at the
                problem.
              </p>
              <p>
                We don't think that scales forever. Our architecture is
                neurosymbolic: each layer is neural inside, but the things
                that pass between layers are structured. The perception
                layer hands objects to the planner. The planner hands a
                sequence of named subgoals to the dynamics layer. The
                dynamics layer hands predicted states to the policy. We
                understand each one of those interfaces. This is a major
                architectural choice that ends up changing how we debug
                and improve the model.
              </p>
              <p>
                There's an analogy to language models worth taking
                seriously. They reason in tokens, not in their hidden
                states. That's most of why prompting works, why
                chain-of-thought works, why evaluation works at all. Replace
                the text interface with raw latents and most of what makes
                those models actually useful goes away. Object-centric,
                named representations are what we think the
                physical-intelligence version of that interface looks like.
              </p>
              <p>
                We're training our foundation models with this structure
                baked in from the start. It isn't a perception layer bolted
                onto an existing VLA, and it isn't a debugger you run after
                the fact. It's the structure of the model itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we're building */}
      <section className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-4">
              What we're building
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.025em] text-stone-900 leading-[1.1]">
              Robots and the models that run them.
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              We work all of it: the model, the representation it reasons
              over, and the hardware it runs on. Not because integration is
              fashionable. Because each piece constrains the others, and
              we'd rather make those tradeoffs ourselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Capability
              num="01"
              icon={<FoundationIcon />}
              title="Our own foundation models"
              body="Robot policies trained on neurosymbolic, grounded architecture from day one. Not a wrapper around an existing VLA, not an interpretability layer added later."
            />
            <Capability
              num="02"
              icon={<InterpretIcon />}
              title="Observable at every layer"
              body="Each layer in the model puts out structured representations a person on the team can read. When the robot does something wrong, we can usually point at which layer broke."
            />
            <Capability
              num="03"
              icon={<RealtimeIcon />}
              title="Real-time on-robot control"
              body="Control loops fast enough for contact-rich manipulation. Everything runs on-board. Nothing batches up to the cloud."
            />
            <Capability
              num="04"
              icon={<HardwareIcon />}
              title="Hardware where it matters"
              body="We're not making our own robots yet. For now we take open platforms and modify them with what they need to do real work. Custom hardware comes once the model is real."
            />
          </div>
        </div>
      </section>

      {/* Latest research / proof point */}
      <section className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-stone-500 font-semibold mb-4">
                First results
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.025em] text-stone-900 leading-[1.1] max-w-2xl">
                The first numbers we wanted to see.
              </h2>
            </div>
            <Link
              to="/research"
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              All research →
            </Link>
          </div>

          <Link
            to="/research/object-centric-grounding"
            className="block group rounded-3xl border border-stone-200 bg-white hover:border-stone-300 transition-colors overflow-hidden"
          >
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7 p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-5">
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
                    Research
                  </span>
                  <span>May 2026</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] text-stone-900 group-hover:text-stone-700 transition-colors leading-[1.1]">
                  Object-centric grounding for general-purpose robots
                </h3>
                <p className="mt-5 text-stone-600 leading-relaxed text-base md:text-lg">
                  We measured what happens when a robot policy operates on
                  the kind of structured observation our foundation models
                  will eventually use natively. The short version: it
                  converges on a fraction of the data, and it doesn't fall
                  apart when the lighting or the table changes.
                </p>
                <div className="mt-8 inline-flex items-center text-sm text-stone-900 font-medium">
                  Read the post
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
              <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-stone-200 bg-stone-50 p-8 md:p-12 flex flex-col justify-center">
                <dl className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <Stat label="Sample efficiency" value="3×" />
                  <Stat label="Cluttered success" value="+42%" />
                  <Stat
                    label="Lighting Δ"
                    value="−8%"
                    sub="vs. −31% baseline"
                  />
                  <Stat
                    label="Validated on"
                    value="OpenArm"
                    sub="unseen embodiment"
                  />
                </dl>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-stone-200 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Build with us.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl">
              We're putting together the founding team. If you want to work
              on robot foundation models that aren't black boxes, get in
              touch.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:abhinav@synthrails.com"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-stone-900 text-sm font-medium hover:bg-stone-200 transition-colors"
              >
                Get in touch
                <span aria-hidden>→</span>
              </a>
              <Link
                to="/team"
                className="inline-flex items-center px-5 py-3 rounded-full border border-stone-700 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Stat = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) => (
  <div>
    <dt className="text-[11px] uppercase tracking-[0.12em] text-stone-500 font-medium">
      {label}
    </dt>
    <dd className="mt-1.5 text-3xl font-semibold tracking-[-0.02em] text-stone-900">
      {value}
    </dd>
    {sub && (
      <div className="text-xs text-stone-500 mt-1">{sub}</div>
    )}
  </div>
);

const Capability = ({
  num,
  title,
  body,
  icon,
}: {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) => (
  <div className="rounded-2xl bg-white border border-stone-200 p-7 hover:border-stone-300 transition-colors">
    <div className="flex items-center justify-between mb-6">
      <div className="text-stone-900">{icon}</div>
      <div className="text-xs font-mono text-stone-400">{num}</div>
    </div>
    <h3 className="text-lg font-semibold tracking-tight text-stone-900 leading-snug">
      {title}
    </h3>
    <p className="mt-3 text-stone-600 leading-relaxed text-sm">{body}</p>
  </div>
);

const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const FoundationIcon = () => (
  <svg {...iconProps} aria-hidden>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <rect x="3" y="10" width="18" height="4" rx="1" />
    <rect x="3" y="16" width="18" height="4" rx="1" />
    <circle cx="7" cy="6" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="7" cy="12" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="7" cy="18" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const InterpretIcon = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M2 12 C 4 6, 8 4, 12 4 C 16 4, 20 6, 22 12 C 20 18, 16 20, 12 20 C 8 20, 4 18, 2 12 z" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const RealtimeIcon = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M13 2 L4 14 L11 14 L10 22 L20 9 L13 9 Z" />
  </svg>
);

const HardwareIcon = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M5 21 L5 17 L9 13" />
    <path d="M9 13 L14 8" />
    <path d="M14 8 L18 4" />
    <circle cx="5" cy="17" r="1.5" fill="white" />
    <circle cx="9" cy="13" r="1.5" fill="white" />
    <circle cx="14" cy="8" r="1.5" fill="white" />
    <rect x="16.5" y="2.5" width="4" height="3" rx="0.5" transform="rotate(45 18.5 4)" />
  </svg>
);

export default Home;
