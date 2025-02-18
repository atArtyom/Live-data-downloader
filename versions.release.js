/**
 Original source: https://github.com/BiosNod/Live-data-loader.git

 🧡 Bring back some data for your game and have fun
 Our discord invite: https://discord.gg/MfxYRNdD9x

 🧡 Please make pull request to the original repository if you have {client, version, suffix} from other versions

 {Client type, version, suffix} you can retrieve from dispatch (when login) from:
 https://oseurodispat**.yuansh**.com/query_cur_region?version=OSRELWin2.8.0&lang=1&platform=1&binary=1&time=90&channel_id=1&sub_channel_id=1&account_type=1&dispatchSeed=xxxxxx
 You need to decrypt response by key (yes, it's encrypted, before 3.2 use key 3, from 3.2 it's key 5)
 If you dunno about query_cur_region, about keys and how to decrypt the response - ask in #support or #development

 Known list:
 1.2_live --res 1627898_91f6370608 -b
 1.2_live --res 1771533_84f00c80ae --client 1816310_cf16f91abf --silence 1847412_b792271859
 1.3_live --res 1872772_6118ab1016 -b
 1.3_live --res 2079798_299eb183c6 --client 2189670_415e19bf37 --silence 2088824_487227b3c0
 1.4_live --client 2316848_6b1ce6c5b2 --silence 2316848_6b1ce6c5b2
 1.4_live --res 2147343_7e09fd6db0 -b
 1.4_live --res 2381708_53b1e84ce4 --client 2396714_52338ab3d4 --silence 2396714_52338ab3d4
 OSRELWin1.4.0_R2381708:53b1e84ce4_S2396714:52338ab3d4_D2396714:52338ab3d4
 OSRELWin1.5.0_R2663089:25a12eeea5_S2771742:99f775138c_D2762856:4ebb02e19b
 OSRELWin1.5.0_R2775769:c196739952_S2785677:dd8d2f28b5_D2780670:19133fa79e
 OSRELWin1.5.0_R2775769:c196739952_S2797188:f772fde953_D2808729:7a9522338e
 OSRELWin1.5.0_R2866676:eaf0bb745e_S2901119:aae6a5b3eb_D2934686:907ecc1dcb
 1.5_live --res 2578841_2f54353c16 -b
 1.5_live --res 2663089_25a12eeea5 --client 2762856_4ebb02e19b --silence 2771742_99f775138c
 1.5_live --res 2775769_c196739952 --client 2780670_19133fa79e --silence 2785677_dd8d2f28b5
 1.5_live --client 2808729_7a9522338e --silence 2797188_f772fde953
 1.5_live --res 2866676_eaf0bb745e --client 2934686_907ecc1dcb --silence 2901119_aae6a5b3eb
 1.6_live --res 3070488_2862694a85 -b
 1.6_live --res 3305047_ecff173daf --client 3353303_242157b1de --silence 3266913_b1501b6955
 1.6_live --res 3557509_5979a935f8 --client 3526661_2b3db51945
 1.6_live --client 3163037_a912c00ea4 --silence 3163037_a912c00ea4
 OSRELWin1.6.1_R3305047:ecff173daf_S3266913:b1501b6955_D3353303:242157b1de
 OSRELWin1.6.1_R3557509:5979a935f8_S3266913:b1501b6955_D3526661:2b3db51945
 OSRELWin2.0.0_R3696781:eb2d9ce860_S3774214:ef5e090f93_D3774214:ef5e090f93
 2.0_live --res 3617618_49462a674e -b
 2.0_live --res 3696781_eb2d9ce860 --client 3774214_ef5e090f93 --silence 3774214_ef5e090f93
 2.0_live --client 3804637_c78deabdb1 --silence 3788800_47abc13ddb
 OSRELWin2.2.0_R4547778:7237ac14c3_S4645171:60d2dd6b16_D4645171:60d2dd6b16
 2.2_live --res 4464168_15e305fa22 -b
 2.2_live --res 4547778_7237ac14c3 --silence 4645171_60d2dd6b16 --client 4645171_60d2dd6b16
 2.3_live --res 4861639_d46789fa5a -b
 OSRELWin2.3.0_R5134813:4ada34ec9f_S5082883:023295ee18_D5278928:9487c22876
 2.4_live --client 5692577_effa23b6c4 --silence 5692577_effa23b6c4
 2.4_live --res 5691054_b6bda5cd2b
 2.4_live --res 5233271_36b54fc9cd -b
 2.6_live --client 6731353_adfeb8be71 --silence 6731353_adfeb8be71
 2.6_live --res 6626848_04b2f48aaf
 2.6_live --res 6305792_c7157103d7 -b
 2.6_live --client 6641322_2afec624fe --silence 6641322_2afec624fe
 OSRELWin2.6.0_R6708157:7a34a36a6e_S6731353:adfeb8be71_D6731353:adfeb8be71
 OSRELWin2.7.0_R6855943:1490a59df9_S6801534:69e473b331_D6902895:d6252eb166
 OSRELWin2.7.0_R8029328:4cecb3db74_S8227893:b9d91614c6_D8227893:b9d91614c6
 OSRELWin2.8.0_R8589120:fc51cefe86_S8812249:af39852a33_D8644052:1ce48fca2c
 OSRELWin3.0.0_R10283122:ec58ff372e_S10446836:320895326e_D10316937:4fcac11e23
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10660688:b69559f811_D10693398:99e1a99fd2
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10660688:b69559f811_D10772333:09136b2529
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10805493:3222597d09_D10772333:09136b2529
 OSRELWin3.1.0_R10916590:847ba6bd45_S10805493:3222597d09_D10941477:af48dac880
 OSRELWin3.2.0_R11149961:d6b14858bc_S11212885:766b0a2560_D11319614:f9c5287efd
 OSRELWin3.2.0_R11353770:6428631800_S11212885:766b0a2560_D11364183:175a3e3bff
 OSRELWin3.2.0_R11353770:6428631800_S11212885:766b0a2560_D11404032:d92901d0b2
 OSRELWin3.2.0_R11468593:cb0b1a9c56_S11212885:766b0a2560_D11498071:3c3178adcd
 OSRELWin3.2.0_R11611027:8bf0cf5f3d_S11212885:766b0a2560_D11643430:3a8c4fc04c
 OSRELWin3.2.0_R11611027:8bf0cf5f3d_S11212885:766b0a2560_D11793813:1bb7eba264
 3.2 output_11611739_50a8ffbbbd  - iOS exclusive
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D11990274:d46e5e55e2 - day1 hotfix
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12100776:793a112718 - maybe BP issue fix?
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12136874:f3a4b38d81
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12238912:e3a8cb3c35
 OSRELWin3.3.0_R12335344:2474549507_S12361027:f6d6187d41_D12361027:f6d6187d41
 OSRELWin3.3.0_R12335344:2474549507_S12451827:2d419b12a6_D12361027:f6d6187d41
 OSRELWin3.4.0_R12707997:bf4adced0e_S12671397:9e164143ef_D12723272:f607c5b3e3
 OSRELWin3.4.0_R12707997:bf4adced0e_S12671397:9e164143ef_D12787608:ddd0d98162

 *
 * Short pattern:
 * ${buildName}${version}_R${resClientVersion}:${resClientSuffix}_S${silentClientVersion}:${silentClientSuffix}_D${clientVersion}:${clientSuffix}
 *
 * Long pattern:
 * @type {{"version_live": [{res: {Suffix: string, Version: number}, clientSilence: {Suffix: string, Version: number}, client: {Suffix: string, Version: number}}]}}
 */

const list =
    {
        '1.0_rel': [
            {
                res: {Version: 1135452, Suffix: "1dda342ed1"},
                clientSilence: {Version: 1141718, Suffix: "f1b1d4173a"},
                client: {Version: 1146939, Suffix: "35b7968eda"},
            },

            {
                res: {Version: 1139692, Suffix: "d2f2ff22c7"},
            },
        ],

        '1.0_live': [
            {
                res: {Version: 1284249, Suffix: "ba7ad33643"},
                clientSilence: {Version: 1358691, Suffix: "cdc3f383ef"},
                client: {Version: 1358691, Suffix: "cdc3f383ef"},
            },
 
            {
                clientSilence: {Version: 1393824, Suffix: "2599c61c7b"},
            },
        ],

        '1.4_live': [
            {
                res: {Version: 2381708, Suffix: "53b1e84ce4"},
                clientSilence: {Version: 2396714, Suffix: "52338ab3d4"},
                client: {Version: 2396714, Suffix: "52338ab3d4"},
            },
        ],

        '1.5_live': [
            {
                res: {Version: 2484655, Suffix: "d25bf77fa4"},
                clientSilence: {Version: 2494513, Suffix: "3ddaee14c9"},
                client: {Version: 2502139, Suffix: "d0d890eb69"},
            },

            {
                res: {Version: 2663089, Suffix: "25a12eeea5"},
                clientSilence: {Version: 2771742, Suffix: "99f775138c"},
                client: {Version: 2762856, Suffix: "4ebb02e19b"},
            },

            {
                res: {Version: 2775769, Suffix: "c196739952"},
                clientSilence: {Version: 2785677, Suffix: "dd8d2f28b5"},
                client: {Version: 2780670, Suffix: "19133fa79e"},
            },

            {
                clientSilence: {Version: 2797188, Suffix: "f772fde953"},
                client: {Version: 2808729, Suffix: "7a9522338e"},
            },

            {
                res: {Version: 2866676, Suffix: "eaf0bb745e"},
                clientSilence: {Version: 2901119, Suffix: "aae6a5b3eb"},
                client: {Version: 2934686, Suffix: "907ecc1dcb"},
            },
        ],

        '1.6_live': [
            {
                res: {Version: 3305047, Suffix: "ecff173daf"},
                clientSilence: {Version: 3266913, Suffix: "b1501b6955"},
                client: {Version: 3353303, Suffix: "242157b1de"},
            },

            {
                res: {Version: 3557509, Suffix: "5979a935f8"},
                client: {Version: 3526661, Suffix: "2b3db51945"},
            },
        ],

        '2.0_live': [
            {
                res: {Version: 3696781, Suffix: "eb2d9ce860"},
                clientSilence: {Version: 3788800, Suffix: "47abc13ddb"},
                client: {Version: 3804637, Suffix: "c78deabdb1"},
            },
        ],

        '2.2_live': [
            {
                res: {Version: 4547778, Suffix: "7237ac14c3"},
                clientSilence: {Version: 4645171, Suffix: "60d2dd6b16"},
                client: {Version: 4645171, Suffix: "60d2dd6b16"},
            },
        ],

        '2.3_live': [
            {
                res: {Version: 5134813, Suffix: "4ada34ec9f"},
                clientSilence: {Version: 5082883, Suffix: "023295ee18"},
                client: {Version: 5278928, Suffix: "9487c22876"},
            },
        ],

        '2.6_live': [
            {
                res: {Version: 6708157, Suffix: "7a34a36a6e"},
                clientSilence: {Version: 6731353, Suffix: "adfeb8be71"},
                client: {Version: 6731353, Suffix: "adfeb8be71"},
            },
        ],
        
        '2.7_live': [
            {
                res: {Version: 6855943, Suffix: "1490a59df9"},
                clientSilence: {Version: 6801534, Suffix: "69e473b331"},
                client: {Version: 6902895, Suffix: "d6252eb166"},
            },
            {
                res: {Version: 8029328, Suffix: "4cecb3db74"},
                clientSilence: {Version: 8227893, Suffix: "b9d91614c6"},
                client: {Version: 8227893, Suffix: "b9d91614c6"},
            }
        ],

        '2.8_live': [
            {
                res: {Version: 8589120, Suffix: "fc51cefe86"},
                clientSilence: {Version: 8812249, Suffix: "af39852a33"},
                client: {Version: 8644052, Suffix: "1ce48fca2c"},
            }
        ],

        '3.0_live': [
            {
                // base version with sound data in AudioAssets (Japanese, Korean, etc...)
                res: {Version: 9624836, Suffix: "ed0599bc5b"},
                client: {Version: 9915492, Suffix: "930253475d"},
            },

            {
                res: {Version: 10283122, Suffix: "ec58ff372e"},
                clientSilence: {Version: 10446836, Suffix: "320895326e"},
                client: {Version: 10316937, Suffix: "4fcac11e23"},
            }
        ],

        '3.1_live': [
            {
                res: {Version: 10345388, Suffix: "db455059e3"},
                clientSilence: {Version: 10289512, Suffix: "36a8dc6d48"},
                client: {Version: 10350544, Suffix: "7a97cd5fbb"},
            },

            {
                // base version with sound data in AudioAssets (Japanese, Korean, etc...)
                res: {Version: 10457664, Suffix: "3bdde23eb8"},
            },

            {
                res: {Version: 10676272, Suffix: "ab446cd9d8"},
                clientSilence: {Version: 10660688, Suffix: "b69559f811"},
                client: {Version: 10693398, Suffix: "99e1a99fd2"},
            },

            {
                clientSilence: {Version: 10660688, Suffix: "b69559f811"},
                client: {Version: 10772333, Suffix: "09136b2529"},
            },

            {
                clientSilence: {Version: 10805493, Suffix: "3222597d09"},
                client: {Version: 10772333, Suffix: "09136b2529"},
            },

            {
                res: {Version: 10916590, Suffix: "847ba6bd45"},
                clientSilence: {Version: 10805493, Suffix: "3222597d09"},
                client: {Version: 10941477, Suffix: "af48dac880"},
            }
        ],

        '3.2_live': [
            {
                res: {Version: 11149961, Suffix: "d6b14858bc"},
                clientSilence: {Version: 11212885, Suffix: "766b0a2560"},
                client: {Version: 11319614, Suffix: "f9c5287efd"},
            },

            {
                res: {Version: 11353770, Suffix: "6428631800"},
                client: {Version: 11364183, Suffix: "175a3e3bff"},
            },

            {
                client: {Version: 11404032, Suffix: "d92901d0b2"},
            },

            {
                res: {Version: 11611027, Suffix: "8bf0cf5f3d"},
                client: {Version: 11793813, Suffix: "1bb7eba264"},
            },
        ],

        '3.3_live': [
            {
                res: {Version: 11972804, Suffix: "a46af65d51"},
                clientSilence: {Version: 11938958, Suffix: "b040c0ebeb"},
                client: {Version: 12136874, Suffix: "f3a4b38d81"},
            },
        ],

        '3.4_live': [
            {
                res: {Version: 11994380, Suffix: "6091cf4556"},
                clientSilence: {Version: 12103638, Suffix: "774f2bebb4"},
                client: {Version: 12117976, Suffix: "9ddf06370b"},
            },
        ],
    }

module.exports = {list}