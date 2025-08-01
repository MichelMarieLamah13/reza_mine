export const DATA = [
    {
        title: "Reducing (Features vs Frames)",
        hide: false,
        description: [
            "To achieve a bitrate of 3.6 kbps by reducing the features, we halve the number of features used in the 7.2 kbps model—using 32 features instead of 64 at each level of the codec.",
            "Alternatively, to reach the same 3.6 kbps bitrate by reducing the number of frames, we also halve the number of frames at each level: from 100 to 50 frames at the lower level, and from 12.5 to 6.25 frames at the upper level.",
            "<b>exp1_sm</b> is the model trained on a reduced, balanced dataset derived from LibriSpeech-100, which contains an equal number of audio samples for each speaker",
            "<b>exp1_lg</b> is obtained by continuing the training of exp1_sm on the full LibriSpeech-100 dataset",
            "<b>exp2_lg</b> is obtained by further training exp1_lg on the full LibriSpeech-100 dataset",
            "<b>exp3_lg</b> is obtained by continuing the training of exp2_lg, again using the full LibriSpeech-100 dataset",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1: Reducing frames</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_50_fs_64_sm_01/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_01/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_02/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_03/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1: Reducing features</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_sm_01/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_01/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_02/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2: Reducing frames</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_50_fs_64_sm_01/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_01/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_02/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_03/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2: Reducing features</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_sm_01/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_01/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_02/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1: Reducing frames</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_50_fs_64_sm_01/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_01/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_02/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_03/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1: Reducing features</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_sm_01/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_01/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_02/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2: Reducing frames</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_50_fs_64_sm_01/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_01/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_02/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_50_fs_64_lg_03/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2: Reducing features</i>",
                hide: false,
                content: [
                    {
                        title: "exp1_sm = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_sm_01/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp1_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_01/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp2_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_02/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp3_lg ",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp5)",
        hide: false,
        description: [
            "<b>exp3_lg</b> the baseline see <a href='#section-1'>features vs frames</a>.",
            "<b>exp4_lg</b> is obtained by continuing the training of <b>exp3_lg</b>.",
            "<b>exp5_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp5_lg",
                        path: "WB_samples/nf_100_fs_32_lg_05/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp5_lg",
                        path: "WB_samples/nf_100_fs_32_lg_05/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp5_lg",
                        path: "WB_samples/nf_100_fs_32_lg_05/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp5_lg",
                        path: "WB_samples/nf_100_fs_32_lg_05/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp6)",
        hide: false,
        description: [
            "<b>exp6_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b> and a <b>weighted multi-scale spectrogram loss</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp6_lg",
                        path: "WB_samples/nf_100_fs_32_lg_06/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp6_lg",
                        path: "WB_samples/nf_100_fs_32_lg_06/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp6_lg",
                        path: "WB_samples/nf_100_fs_32_lg_06/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp6_lg",
                        path: "WB_samples/nf_100_fs_32_lg_06/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp7)",
        hide: false,
        description: [
            "<b>exp7_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram</b> and a <b>waveform loss</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp7_lg",
                        path: "WB_samples/nf_100_fs_32_lg_07/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp7_lg",
                        path: "WB_samples/nf_100_fs_32_lg_07/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp7_lg",
                        path: "WB_samples/nf_100_fs_32_lg_07/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp7_lg",
                        path: "WB_samples/nf_100_fs_32_lg_07/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp8)",
        hide: false,
        description: [
            "<b>exp8_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b> and a <b>multi-scale stfd discriminator</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp8_lg",
                        path: "WB_samples/nf_100_fs_32_lg_08/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp8_lg",
                        path: "WB_samples/nf_100_fs_32_lg_08/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp8_lg",
                        path: "WB_samples/nf_100_fs_32_lg_08/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp8_lg",
                        path: "WB_samples/nf_100_fs_32_lg_08/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp9)",
        hide: false,
        description: [
            "<b>exp9_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b> and a <b>multi-resolution discriminator</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp9_lg",
                        path: "WB_samples/nf_100_fs_32_lg_09/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp9_lg",
                        path: "WB_samples/nf_100_fs_32_lg_09/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp9_lg",
                        path: "WB_samples/nf_100_fs_32_lg_09/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp9_lg",
                        path: "WB_samples/nf_100_fs_32_lg_09/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp10)",
        hide: false,
        description: [
            "<b>exp10_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b> and both <b>multi-resolution</b> and <b>multi-scale stfd</b> discriminators.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp10_lg",
                        path: "WB_samples/nf_100_fs_32_lg_10/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp10_lg",
                        path: "WB_samples/nf_100_fs_32_lg_10/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp10_lg",
                        path: "WB_samples/nf_100_fs_32_lg_10/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp10_lg",
                        path: "WB_samples/nf_100_fs_32_lg_10/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp11)",
        hide: false,
        description: [
            "<b>exp11_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b>, a <b>multi-scale spectrogram loss</b> and a <b>waveform loss</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp11_lg",
                        path: "WB_samples/nf_100_fs_32_lg_11/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp11_lg",
                        path: "WB_samples/nf_100_fs_32_lg_11/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp11_lg",
                        path: "WB_samples/nf_100_fs_32_lg_11/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp11_lg",
                        path: "WB_samples/nf_100_fs_32_lg_11/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp12)",
        hide: false,
        description: [
            "<b>exp12_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b>, a <b>multi-scale spectrogram loss</b>, a <b>waveform loss</b> and a <b>multi-scale stfd discriminator</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp12_lg",
                        path: "WB_samples/nf_100_fs_32_lg_12/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp12_lg",
                        path: "WB_samples/nf_100_fs_32_lg_12/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp12_lg",
                        path: "WB_samples/nf_100_fs_32_lg_12/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp12_lg",
                        path: "WB_samples/nf_100_fs_32_lg_12/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp13)",
        hide: false,
        description: [
            "<b>exp13_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b>, a <b>multi-scale spectrogram loss</b>, a <b>waveform loss</b> and a <b>multi-resolution discriminator</b>.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp13_lg",
                        path: "WB_samples/nf_100_fs_32_lg_13/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp13_lg",
                        path: "WB_samples/nf_100_fs_32_lg_13/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp13_lg",
                        path: "WB_samples/nf_100_fs_32_lg_13/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp13_lg",
                        path: "WB_samples/nf_100_fs_32_lg_13/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
    {
        title: "Modifying Loss: weighting mel band (exp14)",
        hide: false,
        description: [
            "<b>exp14_lg</b> is obtained by continuing the training of <b>exp3_lg</b> by adding to the baseline a <b>weighted mel spectrogram loss</b>, a <b>multi-scale spectrogram loss</b>, a <b>waveform loss</b> and both <b>multi-resolution</b> and <b>multi-scale stfd</b> discriminators.",
            "Go to <a href='#section-0'>Menu</a>"
        ],
        content: [
            {
                title: "<i class='fas fa-male'></i> M1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M1.flac",
                        hide: false
                    },
                    {
                        title: "exp14_lg",
                        path: "WB_samples/nf_100_fs_32_lg_14/M1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/M2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-male'></i> M2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/M2.flac",
                        hide: false
                    },
                    {
                        title: "exp14_lg",
                        path: "WB_samples/nf_100_fs_32_lg_14/M2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F1.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F1</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F1.flac",
                        hide: false
                    },
                    {
                        title: "exp14_lg",
                        path: "WB_samples/nf_100_fs_32_lg_14/F1.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>: Original",
                hide: false,
                content: [
                    {
                        title: "Original input",
                        path: "WB_samples/original/F2.flac",
                        hide: false
                    },
                    {
                        title: "7.2 kbps (original)",
                        path: "WB_samples/CC_8000/F2.flac",
                        hide: false
                    },

                ]
            },
            {
                title: "<i class='fas fa-female'></i> F2</i>",
                hide: false,
                content: [
                    {
                        title: "exp3_lg = 3.6 kbps",
                        path: "WB_samples/nf_100_fs_32_lg_03/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp4_lg",
                        path: "WB_samples/nf_100_fs_32_lg_04/F2.flac",
                        hide: false
                    },
                    {
                        title: "exp14_lg",
                        path: "WB_samples/nf_100_fs_32_lg_14/F2.flac",
                        hide: false
                    },

                ]
            },
        ]
    },
]

export const NOTE = [
    "The original version of our model used a <b>scalar quantizer with delta modulation</b> and was trained on the full <em>LibriSpeech clean-100</em> dataset, which contains <b>28,539 audio files</b> from <b>251 different speakers</b>. Training on this dataset takes up to <b>three weeks</b>.",
    "At the lower level of the encoder, there are <b>100 frames per second</b>, and each frame contains <b>64 features</b>.",
    "To reduce training time, we created a <b>balanced dataset</b> by selecting the same number of audio samples per speaker — specifically, the minimum available: <b>26 samples per speaker</b>. This resulted in a new training set with <b>6,526 audio files</b>, bringing the total training time down to about <b>one week</b> for both encoder and decoder.",
    "We also replaced the standard delta modulation with <b>Continuously Variable Slope Delta Modulation (CVSD)</b>, an <b>adaptive quantization method</b>. Our aim is to investigate how much we can <b>lower the bitrate</b> without noticeably degrading audio quality.",
    `The bitrate for a scalar quantizer is computed as:<br>
    \\( \\text{Bitrate (bps)} = N_{\\text{frames}} \\times N_{\\text{features}} \\times N_{\\text{bits}} \\)<br>
    Where:
    <ul>
        <li>\\( N_{\\text{frames}} \\) is the number of frames per second</li>
        <li>\\( N_{\\text{features}} \\) is the number of features per frame</li>
        <li>\\( N_{\\text{bits}} \\) is the number of bits per feature</li>
    </ul>`,
    ` To reduce the bitrate, we can either decrease \\( N_{\\text{frames}} \\) or \\( N_{\\text{features}} \\), since \\( N_{\\text{bits}} \\) is already at its minimum: <b>1 bit</b>.`,
    `
    The audio samples provided here were generated by reducing the <b>number of frames</b> or the <b>number of features</b>. 
    In another work, we will explore the impact of using a <b>vector quantizer</b>.`,
    "The samples include both female (<i class='fas fa-female'></i>) and male (<i class='fas fa-male'></i>) voices."
  
]