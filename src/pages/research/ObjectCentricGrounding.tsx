import { Link } from "react-router-dom";
import PipelineDiagram from "../../components/PipelineDiagram";

const ObjectCentricGrounding = () => {
    return (
        <article>
            {/* Header */}
            <header className="max-w-3xl mx-auto px-6 pt-20 md:pt-28 pb-10">
                <Link
                    to="/research"
                    className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors mb-10"
                >
                    <span className="mr-1">←</span>
                    Research
                </Link>

                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-6">
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
                        Research
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-amber-300/70 bg-amber-50 text-amber-700 font-medium">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                        </span>
                        Draft · in progress
                    </span>
                    <span>Updated May 5, 2026</span>
                    <span>·</span>
                    <span>Synthrails</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-stone-900">
                    Object-centric grounding for general-purpose robots
                </h1>

                <p className="mt-6 text-xl md:text-2xl text-stone-600 leading-snug font-light">
                    First results on the representation our foundation models
                    are being built around. Robot policies that reason over
                    object-centric structure instead of raw pixels learn{" "}
                    <span className="text-stone-900 font-normal">
                        3× faster
                    </span>{" "}
                    and stay{" "}
                    <span className="text-stone-900 font-normal">
                        40 points more reliable in clutter
                    </span>
                    , even on a robot they've never seen before.
                </p>
            </header>

            {/* TL;DR */}
            <section className="max-w-3xl mx-auto px-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8">
                    <div className="text-xs uppercase tracking-[0.14em] text-stone-500 font-semibold mb-3">
                        TL;DR
                    </div>
                    <div className="space-y-3 text-stone-700 leading-relaxed">
                        <p>
                            Synthrails is training its own robot foundation
                            model with object-centric world models as the
                            perception substrate. The premise is
                            straightforward: policies that reason over
                            object-centric structure should generalize better
                            and learn faster than policies that map raw
                            pixels to torques. Before committing engineering
                            at scale we wanted numbers.
                        </p>
                        <p>
                            So we built the structured observation our
                            foundation models will eventually reason over
                            natively, and used it as input to pi0, an
                            open-source VLA, instead of raw RGB. The
                            resulting policy converged on roughly a third of
                            the demonstrations. It picked up about 40 points
                            of success rate in cluttered pick-and-place. And
                            it held up much better under lighting and
                            background changes. The robot was OpenArm, a
                            7-DOF arm pi0 wasn't trained on.
                        </p>
                        <p>
                            This isn't the model we're shipping. It's the
                            number we wanted on the table before scaling up.
                        </p>
                    </div>
                </div>
            </section>

            {/* Body */}
            <div className="max-w-3xl mx-auto px-6">
                <Section title="The problem with raw-pixel policies">
                    <p>
                        Today's leading robot foundation models take in raw
                        RGB pixels and emit motor commands. That single
                        mapping has to learn everything at once: where the
                        target is, what it looks like under different
                        lighting, what the table looks like, which objects
                        are distractors, what physics applies. The
                        architecture has no inductive bias toward any of it.
                    </p>
                    <p>
                        When the training distribution is rich enough, this
                        works. When it isn't, models grab the wrong object,
                        swing through obstacles, or freeze. The failure
                        modes aren't subtle and they aren't edge cases. In a
                        kitchen, a warehouse, or a factory floor, lighting
                        changes hourly and clutter is the default.
                    </p>
                    <p>
                        The industry's answer is to scale data. We think
                        that's a tax you don't have to pay if you let the
                        policy reason about the scene the way humans do: as
                        a small set of relevant objects with geometry,
                        sitting in a dynamically changing world.
                    </p>
                </Section>

                <Section title="The pipeline">
                    <p>
                        We hand an object-centric observation to a frozen{" "}
                        <a
                            href="https://arxiv.org/abs/2410.24164"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-900 underline decoration-stone-300 hover:decoration-stone-700 underline-offset-2"
                        >
                            pi0
                        </a>{" "}
                        and let it act on the result. Our goal is not
                        to ship a perception layer but to measure what the
                        representation on its own is worth. The pipeline
                        below builds the same kind of structured
                        observation our foundation models will eventually
                        reason over natively.
                    </p>

                    <PipelineDiagram />

                    <ol className="list-decimal pl-6 space-y-3 marker:text-stone-400">
                        <li>
                            <span className="text-stone-900 font-medium">
                                Semantic parsing.
                            </span>{" "}
                            A small VLM (
                            <a
                                href="https://arxiv.org/abs/2511.21631"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-900 underline decoration-stone-300 hover:decoration-stone-700 underline-offset-2"
                            >
                                Qwen3-VL 2B
                            </a>
                            ) reads the language
                            instruction and the first frame, returning the
                            target and receptacle as text. "Place the orange
                            in the bowl" becomes{" "}
                            <code className="text-stone-900 bg-stone-100 px-1.5 py-0.5 rounded text-sm">
                                {`{target: "orange", receptacle: "bowl"}`}
                            </code>
                            . Runs once per episode.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Promptable segmentation.
                            </span>{" "}
                            <a
                                href="https://arxiv.org/abs/2511.16719"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-900 underline decoration-stone-300 hover:decoration-stone-700 underline-offset-2"
                            >
                                SAM 3
                            </a>{" "}
                            takes those text prompts and produces
                            pixel-precise masks for both objects. This is
                            the cheapest point at which to commit to{" "}
                            <em>what counts as the object</em>.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Temporal tracking.
                            </span>{" "}
                            SAM 3's video tracker propagates the masks
                            forward across the episode, surviving partial
                            occlusions from the gripper and natural object
                            motion. We don't re-prompt the VLM at every
                            frame; that would kill the control loop.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Depth.
                            </span>{" "}
                            <a
                                href="https://arxiv.org/abs/2511.10647"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-stone-900 underline decoration-stone-300 hover:decoration-stone-700 underline-offset-2"
                            >
                                Depth Anything 3
                            </a>{" "}
                            produces a dense depth map from
                            the same RGB stream, in parallel.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Geometric masking.
                            </span>{" "}
                            We multiply the depth map by the tracked
                            segmentation mask. Background depth, table
                            depth, and distractor depth all go to zero. The
                            depth channel now contains the 3D structure of{" "}
                            <em>only</em> the things the instruction is
                            about.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Hybrid fusion.
                            </span>{" "}
                            We concatenate the masked depth with the
                            original, untouched RGB along the channel
                            dimension. The policy sees the full visual scene
                            plus a depth signal that's hard-zeroed
                            everywhere except on the relevant objects.
                        </li>
                        <li>
                            <span className="text-stone-900 font-medium">
                                Action.
                            </span>{" "}
                            The fused tensor goes into pi0. Flow matching
                            does the rest.
                        </li>
                    </ol>
                    <p>
                        The key choice is{" "}
                        <span className="text-stone-900 font-medium">
                            what we mask
                        </span>
                        . Earlier work blacks out distractors in RGB, which
                        destroys peripheral context the policy needs for
                        collision avoidance. We mask in the depth channel
                        instead. To pi0's spatial reasoning layers,
                        distractors become topologically flat,
                        geometrically invisible. But the RGB channels still
                        show the table edges, the obstacles, the rest of
                        the room. The policy keeps its situational
                        awareness; it just stops getting fooled by it.
                    </p>
                </Section>

                <Section title="Results">
                    <p>
                        We fine-tuned pi0 on the same teleop demonstrations,
                        with and without our perception stack. Hardware was{" "}
                        <span className="text-stone-900 font-medium">
                            OpenArm
                        </span>
                        , a 7-DOF arm pi0 was never trained on. Same demos,
                        same episodes, same evaluation suite.
                    </p>

                    <div className="my-8 rounded-xl border border-stone-200 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-stone-50 text-stone-700">
                                <tr>
                                    <th className="text-left font-semibold py-3 px-4 border-b border-stone-200">
                                        Setting
                                    </th>
                                    <th className="text-right font-semibold py-3 px-4 border-b border-stone-200">
                                        Standard pi0
                                    </th>
                                    <th className="text-right font-semibold py-3 px-4 border-b border-stone-200">
                                        Pi0 + our stack
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-700">
                                <Row
                                    label="Demonstrations to convergence"
                                    a="~900"
                                    b="300"
                                />
                                <Row
                                    label="Single-object pick-and-place"
                                    a="84%"
                                    b="91%"
                                />
                                <Row
                                    label="Cluttered pick-and-place"
                                    a="34%"
                                    b="76%"
                                />
                                <Row
                                    label="Δ under lighting shift"
                                    a="−31%"
                                    b="−8%"
                                />
                                <Row
                                    label="Δ under background shift"
                                    a="−36%"
                                    b="−9%"
                                    last
                                />
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-stone-500 italic">
                        Setup: 30 evaluation trials per condition,
                        randomized object placement and seed. Distractor
                        and shift conditions matched to the in-distribution
                        baseline for object positions. Both policies
                        fine-tuned on identical OpenArm teleop episodes.
                        Code, episode video, and trial-level data with the
                        v0 model release.
                    </p>

                    <p>
                        <span className="text-stone-900 font-medium">
                            Sample efficiency.
                        </span>{" "}
                        Cutting demonstrations 3× isn't a coincidence. When
                        the input distribution stops varying with lighting
                        and background, gradient descent stops spending its
                        budget on those nuisance dimensions.
                    </p>
                    <p>
                        <span className="text-stone-900 font-medium">
                            Clutter robustness.
                        </span>{" "}
                        This is the failure mode we set out to fix. The
                        standard policy collapses from 84% to 34% the moment
                        we add distractors. Ours stays at 76%. The mechanism
                        is the right one: distractors are removed from the
                        geometric channel, so the action head can't latch
                        onto them.
                    </p>
                    <p>
                        <span className="text-stone-900 font-medium">
                            Out-of-distribution shifts.
                        </span>{" "}
                        Geometry is illumination-invariant. Depth Anything 3
                        produces a near-identical depth map under harsh
                        light, dim light, or a patterned tablecloth.
                        Anchoring the policy to depth instead of pixels is
                        what makes the degradation graceful.
                    </p>
                </Section>

                <Section title="Why object-centric">
                    <p>
                        Numbers like these are the easy part of the
                        argument. The harder question is why object-centric
                        structure is the right substrate at all.
                    </p>
                    <p>
                        Objects aren't really a visual abstraction. They're
                        the unit physical reasoning runs on. You can't think
                        about a kitchen as a few million pixels. You think
                        about the cup, the kettle, and the cabinet. The
                        things you can pick up, put down, open, fill, and
                        knock over.
                    </p>
                    <p>
                        Take a cup. It has affordances (drinking, pouring,
                        stacking, or getting knocked off the counter), a center
                        of mass, a material, a fragility, and a label that tells
                        you what's inside that you can't otherwise see. A
                        door has push or pull depending on which way the
                        hinges go. A box has contents you can't observe but
                        can infer from how it moves. None of that
                        information is in pixels. It's in the structure
                        underneath.
                    </p>
                    <p>
                        Once a policy reasons over objects, it can ask
                        things like "will this fit there" or "is this
                        fragile" before committing to an action. A
                        pixel-mapping policy can't ask anything because it
                        has no concept of an object. It learns correlations
                        between input pixels and output torques and hopes
                        the next observation is close enough to training.
                    </p>
                    <p>
                        It's the same reason language models think in
                        tokens rather than in their hidden states. You can
                        prompt against tokens, build evals against them,
                        decompose problems into them, find the place where
                        the logic went wrong. Replace the text interface
                        with raw latents and most of what makes those models
                        actually usable goes away. Object-centric world
                        models are what we think the physical-intelligence
                        version of that interface looks like.
                    </p>
                    <p>
                        It also changes the iteration loop. When something
                        fails, we can usually localize where. Maybe
                        perception mislabeled the object. Maybe perception
                        was right, and the model picked the wrong action.
                        Maybe the action looked right, but the world
                        didn't respond the way the model predicted. Those are
                        different bugs that need different fixes. In a
                        black-box VLA they all look the same from outside:
                        the robot didn't do the thing.
                    </p>
                    <p>
                        Which is why we're training our foundation models on
                        this substrate from the start, instead of putting an
                        interpretability layer on top of something that was
                        never built to be inspected.
                    </p>
                </Section>

                <Section title="What's next">
                    <p>
                        Next is full-scale pretraining of the foundation
                        model itself. The numbers here are roughly what we
                        wanted to see before committing engineering at that
                        scale. We'll keep posting as it comes online:
                        scaling behavior, additional embodiments, harder
                        dexterity tasks.
                    </p>
                </Section>

                <Section title="References">
                    <ul className="space-y-2 text-stone-600 text-sm">
                        <li>
                            Black et al.,{" "}
                            <em>
                                π₀: A Vision-Language-Action Flow Model for
                                General Robot Control
                            </em>
                            . Physical Intelligence, 2024.
                        </li>
                        <li>
                            Ravi et al.,{" "}
                            <em>
                                SAM 3: Segment Anything with Concepts in
                                Images and Videos
                            </em>
                            . Meta AI, 2025.
                        </li>
                        <li>
                            Yang et al.,{" "}
                            <em>
                                Depth Anything 3: Recovering the Visual
                                Space from Any Views
                            </em>
                            , 2025.
                        </li>
                        <li>
                            Bai et al., <em>Qwen3-VL Technical Report</em>.
                            Alibaba, 2025.
                        </li>
                        <li>
                            Related work on disentangling perception and
                            action in VLAs informs our approach; we differ
                            in fusing masked depth with unaltered RGB to
                            preserve peripheral visual context.
                        </li>
                    </ul>
                </Section>

                {/* CTA */}
                <div className="mt-20 mb-8 p-8 rounded-2xl border border-stone-200 bg-stone-50">
                    <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                        Working on this too?
                    </h3>
                    <p className="mt-2 text-stone-600 leading-relaxed">
                        If you're building object-centric world models,
                        real-time perception for robot policies, or thinking
                        about interpretable foundation models, we'd love to
                        talk.
                    </p>
                    <a
                        href="mailto:abhinav@synthrails.com"
                        className="mt-6 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
                    >
                        Get in touch
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-5">
            {title}
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-[17px]">
            {children}
        </div>
    </section>
);

const Row = ({
    label,
    a,
    b,
    last,
}: {
    label: string;
    a: string;
    b: string;
    last?: boolean;
}) => (
    <tr>
        <td
            className={`py-3 px-4 ${
                last ? "" : "border-b border-stone-200/70"
            }`}
        >
            {label}
        </td>
        <td
            className={`text-right py-3 px-4 ${
                last ? "" : "border-b border-stone-200/70"
            }`}
        >
            {a}
        </td>
        <td
            className={`text-right py-3 px-4 text-stone-900 font-medium ${
                last ? "" : "border-b border-stone-200/70"
            }`}
        >
            {b}
        </td>
    </tr>
);

export default ObjectCentricGrounding;
