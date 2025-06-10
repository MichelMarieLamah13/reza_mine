export const DATA = [
    {
        id: 1,
        title: "Cognitive Coding (16 kbps)",
        content: [
            {
                title: "First male sample",
                content: [
                    {
                        title: "Original input",
                        path: "FB_samples/Original/M1.wav"
                    },
                    {
                        title: "Cognitive coding at 16 kbps",
                        path: "FB_samples/CC_16000/M1.flac"
                    },
                    {
                        title: "EVS at 16.4 kbps",
                        path: "FB_samples/EVS_16400/M1.wav"
                    },
                    {
                        title: "EVS at 24.4 kbps",
                        path: "FB_samples/EVS_24400/M1.wav"
                    }

                ]
            },
            {
                title: "Second male sample",
                content: [
                    {
                        title: "Original input",
                        path: "FB_samples/Original/M2.wav"
                    },
                    {
                        title: "Cognitive coding at 16 kbps",
                        path: "FB_samples/CC_16000/M2.flac"
                    },
                    {
                        title: "EVS at 16.4 kbps",
                        path: "FB_samples/EVS_16400/M2.wav"
                    },
                    {
                        title: "EVS at 24.4 kbps",
                        path: "FB_samples/EVS_24400/M2.wav"
                    }

                ]
            },
            {
                title: "First female sample",
                content: [
                    {
                        title: "Original input",
                        path: "FB_samples/Original/F1.wav"
                    },
                    {
                        title: "Cognitive coding at 16 kbps",
                        path: "FB_samples/CC_16000/F1.flac"
                    },
                    {
                        title: "EVS at 16.4 kbps",
                        path: "FB_samples/EVS_16400/F1.wav"
                    },
                    {
                        title: "EVS at 24.4 kbps",
                        path: "FB_samples/EVS_24400/F1.wav"
                    }

                ]
            },
            {
                title: "Second female sample",
                content: [
                    {
                        title: "Original input",
                        path: "FB_samples/Original/F2.wav"
                    },
                    {
                        title: "Cognitive coding at 16 kbps",
                        path: "FB_samples/CC_16000/F2.flac"
                    },
                    {
                        title: "EVS at 16.4 kbps",
                        path: "FB_samples/EVS_16400/F2.wav"
                    },
                    {
                        title: "EVS at 24.4 kbps",
                        path: "FB_samples/EVS_24400/F2.wav"
                    }

                ]
            },
        ]
    },
    {
        id: 2,
        title: "Cognitive Coding (8 kbps)",
        content: [
            {
                title: "First male sample",
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac"
                    },
                    {
                        title: "Cognitive coding at 8 kbps",
                        path: "WB_samples/CC_8000/M1.flac"
                    },
                    {
                        title: "AMR-WB at 8.85 kbps",
                        path: "WB_samples/AMR-WB-8850/M1.wav"
                    },
                    {
                        title: "AMR-WB at 12.65 kbps",
                        path: "WB_samples/AMR-WB-12650/M1.wav"
                    },

                ]
            },
            {
                title: "Second male sample",
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac"
                    },
                    {
                        title: "Cognitive coding at 8 kbps",
                        path: "WB_samples/CC_8000/M2.flac"
                    },
                    {
                        title: "AMR-WB at 8.85 kbps",
                        path: "WB_samples/AMR-WB-8850/M2.wav"
                    },
                    {
                        title: "AMR-WB at 12.65 kbps",
                        path: "WB_samples/AMR-WB-12650/M2.wav"
                    },

                ]
            },
            {
                title: "First female sample",
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac"
                    },
                    {
                        title: "Cognitive coding at 8 kbps",
                        path: "WB_samples/CC_8000/F1.flac"
                    },
                    {
                        title: "AMR-WB at 8.85 kbps",
                        path: "WB_samples/AMR-WB-8850/F1.wav"
                    },
                    {
                        title: "AMR-WB at 12.65 kbps",
                        path: "WB_samples/AMR-WB-12650/F1.wav"
                    },

                ]
            },
            {
                title: "Second female sample",
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac"
                    },
                    {
                        title: "Cognitive coding at 8 kbps",
                        path: "WB_samples/CC_8000/F2.flac"
                    },
                    {
                        title: "AMR-WB at 8.85 kbps",
                        path: "WB_samples/AMR-WB-8850/F2.wav"
                    },
                    {
                        title: "AMR-WB at 12.65 kbps",
                        path: "WB_samples/AMR-WB-12650/F2.wav"
                    },

                ]
            }
        ]
    }
]

export const NOTE = [
    "Speech compression with Cognitive Coding (CC) at 16 kbps is compared with EVS at 16.4 kbps and 24.4 kbps. Both codecs operate in  full band mode (i.e. both input and output speech signals have 48 kHz sampling rate).",
    "Speech compression with Cognitive Coding (CC) at 8 kbps is compared with AMR-WB at 8.85 kbps and 12.65 kbps. Both codecs operate in  wideband mode (i.e. both input and output speech signals have 16 kHz sampling rate).",
    "Audio samples at 8 kbps accompanying the paper <i>Practical Cognitive Speech Compression </i> submitted to IEEE DSLW."
]