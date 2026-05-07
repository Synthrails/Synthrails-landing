const PipelineDiagram = () => {
    return (
        <figure className="my-10">
            <svg
                viewBox="0 0 640 720"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                role="img"
                aria-label="Diagram of the object-centric perception pipeline. RGB input feeds Qwen3-VL, SAM 3, and Depth Anything 3 in parallel. The mask from SAM 3 is multiplied with the depth from Depth Anything 3 to produce a masked depth tensor. That tensor is concatenated with the original RGB to form a fused observation. The fused observation is passed to the pi0 policy, which outputs joint actions at 50 hertz."
            >
                <defs>
                    <marker
                        id="pipeline-arrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a8a29e" />
                    </marker>
                    <marker
                        id="pipeline-arrow-dark"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#1c1917" />
                    </marker>
                </defs>

                {/* Stage 1: RGB observation */}
                <rect
                    x="240"
                    y="20"
                    width="160"
                    height="56"
                    rx="10"
                    fill="#f5f5f4"
                    stroke="#d6d3d1"
                    strokeWidth="1"
                />
                <text
                    x="320"
                    y="44"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    RGB observation
                </text>
                <text
                    x="320"
                    y="62"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#78716c"
                >
                    base + wrist cameras
                </text>

                {/* Branches from RGB to 3 FMs */}
                <path
                    d="M 320 76 C 320 96, 110 100, 110 120"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />
                <path
                    d="M 320 76 L 320 120"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />
                <path
                    d="M 320 76 C 320 96, 530 100, 530 120"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />

                {/* Stage 2: Three foundation models */}
                <rect
                    x="40"
                    y="120"
                    width="140"
                    height="64"
                    rx="10"
                    fill="white"
                    stroke="#d6d3d1"
                    strokeWidth="1"
                />
                <text
                    x="110"
                    y="148"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    Qwen3-VL
                </text>
                <text
                    x="110"
                    y="166"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#78716c"
                >
                    semantic parse
                </text>

                <rect
                    x="250"
                    y="120"
                    width="140"
                    height="64"
                    rx="10"
                    fill="white"
                    stroke="#d6d3d1"
                    strokeWidth="1"
                />
                <text
                    x="320"
                    y="148"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    SAM 3
                </text>
                <text
                    x="320"
                    y="166"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#78716c"
                >
                    segment + track
                </text>

                <rect
                    x="460"
                    y="120"
                    width="140"
                    height="64"
                    rx="10"
                    fill="white"
                    stroke="#d6d3d1"
                    strokeWidth="1"
                />
                <text
                    x="530"
                    y="148"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    Depth Anything 3
                </text>
                <text
                    x="530"
                    y="166"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#78716c"
                >
                    monocular depth
                </text>

                {/* Lateral arrow: VLM output → SAM 3 prompt */}
                <path
                    d="M 180 152 L 246 152"
                    stroke="#a8a29e"
                    strokeWidth="1.25"
                    fill="none"
                    markerEnd="url(#pipeline-arrow)"
                />
                <text
                    x="213"
                    y="144"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9.5"
                    fill="#78716c"
                >
                    "target", "receptacle"
                </text>

                {/* Output labels under SAM 3 and DA3 */}
                <text
                    x="320"
                    y="206"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="10.5"
                    fill="#78716c"
                    fontStyle="italic"
                >
                    mask
                </text>
                <text
                    x="530"
                    y="206"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="10.5"
                    fill="#78716c"
                    fontStyle="italic"
                >
                    depth
                </text>

                {/* Lines from mask + depth → × node */}
                <path
                    d="M 320 184 L 320 248"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />
                <path
                    d="M 530 184 L 530 230 C 530 252, 360 244, 340 254"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />

                {/* × node */}
                <circle
                    cx="320"
                    cy="266"
                    r="20"
                    fill="white"
                    stroke="#1c1917"
                    strokeWidth="1.5"
                />
                <text
                    x="320"
                    y="273"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="18"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    ×
                </text>

                <text
                    x="320"
                    y="318"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="11"
                    fill="#78716c"
                    fontStyle="italic"
                >
                    masked depth
                </text>

                <path
                    d="M 320 286 L 320 348"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />

                {/* RGB pass-through line (loops around left side) */}
                <path
                    d="M 240 48 L 30 48 L 30 366 L 300 366"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    strokeDasharray="4,4"
                    fill="none"
                />
                <text
                    x="40"
                    y="200"
                    textAnchor="start"
                    fontFamily="ui-monospace, monospace"
                    fontSize="10.5"
                    fill="#78716c"
                    fontStyle="italic"
                >
                    RGB (unchanged)
                </text>

                {/* ⊕ node */}
                <circle
                    cx="320"
                    cy="366"
                    r="20"
                    fill="white"
                    stroke="#1c1917"
                    strokeWidth="1.5"
                />
                <text
                    x="320"
                    y="373"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="16"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    ⊕
                </text>

                <path
                    d="M 320 386 L 320 430"
                    stroke="#d6d3d1"
                    strokeWidth="1.25"
                    fill="none"
                />

                {/* Stage 5: Fused observation */}
                <rect
                    x="220"
                    y="430"
                    width="200"
                    height="64"
                    rx="10"
                    fill="#f5f5f4"
                    stroke="#1c1917"
                    strokeWidth="1.5"
                />
                <text
                    x="320"
                    y="458"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    Fused observation
                </text>
                <text
                    x="320"
                    y="476"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#78716c"
                >
                    RGB + masked depth, channel-wise
                </text>

                <path
                    d="M 320 494 L 320 540"
                    stroke="#1c1917"
                    strokeWidth="1.25"
                    fill="none"
                    markerEnd="url(#pipeline-arrow-dark)"
                />

                {/* Stage 6: pi0 */}
                <rect
                    x="240"
                    y="550"
                    width="160"
                    height="64"
                    rx="10"
                    fill="#1c1917"
                />
                <text
                    x="320"
                    y="578"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="white"
                >
                    pi0
                </text>
                <text
                    x="320"
                    y="596"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fill="#a8a29e"
                >
                    flow-matching policy
                </text>

                <path
                    d="M 320 614 L 320 660"
                    stroke="#1c1917"
                    strokeWidth="1.25"
                    fill="none"
                    markerEnd="url(#pipeline-arrow-dark)"
                />

                {/* Stage 7: Action */}
                <text
                    x="320"
                    y="688"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                    fill="#1c1917"
                >
                    Joint actions
                </text>
            </svg>
            <figcaption className="mt-4 text-sm text-stone-500 text-center max-w-2xl mx-auto">
                The perception pipeline used for this experiment. Three
                foundation models process the RGB stream in parallel, their
                outputs combine into a single object-centric observation
                tensor, and pi0 acts on it.
            </figcaption>
        </figure>
    );
};

export default PipelineDiagram;
