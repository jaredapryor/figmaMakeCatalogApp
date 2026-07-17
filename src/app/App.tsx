import { useState, useMemo, createContext, useContext, useEffect } from "react";
import { X, ArrowLeft, Search, Plus, Pencil, Trash2, Music, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import { Toaster, toast } from "sonner";

// ─── Artist Photo Imports ─────────────────────────────────────────────────────
import imgCleoSterling from "@/imports/Artists/629591e353030fa597f22547cf5a231c2df4ca33.png";
import imgAustralia from "@/imports/Artists/dbd987e7a37c86c71ebe850ba8ea96c15466e1d2.png";
import imgCrimsonAtlas from "@/imports/Artists/3d50ead32c01ecb5b47119643b3ecca40f989248.png";
import imgArgentina from "@/imports/Artists/20c4c95748fc8ea9d6a18e25afe8d9919ff51df8.png";
import imgDeepCurrent from "@/imports/Artists/74cbb3469032b1458d4a61826025a00fc39bb1cf.png";
import imgSouthAfrica from "@/imports/Artists/ae4af28823bc5bcdda25c8ed1376c8aad60c2679.png";
import imgDmitriVolkov from "@/imports/Artists/840b1445a965dde9c17ff977f5e596285dd0af2c.png";
import imgRussia from "@/imports/Artists/702442b705ade0fdca3e5efd3c5c8a977100764c.png";
import imgEchoAssembly from "@/imports/Artists/fd9e78c0d36b29e95d78bc0061110af5925b95bb.png";
import imgGermany from "@/imports/Artists/6cf73d922d72ac8fce47e6f494a04129d719483e.png";
import imgElaraVind from "@/imports/Artists/f57af44522dcfc86b6bd37afc67442c47b22ed45.png";
import imgNorway from "@/imports/Artists/bdfa440b450c434248da8e98daf25faa49e0b32e.png";
import imgFractalDawn from "@/imports/Artists/9db23c15a2487b4f4592608380e712c7d8ede527.png";
import imgHanaMizuki from "@/imports/Artists/26d1caa7ae5d95a76994d531f9e7cd874ede70c2.png";
import imgJapan from "@/imports/Artists/005c45af9a8ce06d3dfba29f2ae01d818cd25edb.png";
import imgIslaCrane from "@/imports/Artists/9a58aa7ded7d1a91ac6d14186862fd6eb8154ef2.png";
import imgNewZealand from "@/imports/Artists/d5440851059638eec2509e89c9fe62b8122fe13d.png";
import imgKaiSundara from "@/imports/Artists/c4944ac0eb6e3448667d2151bb45addb90cb4f2a.png";
import imgLenaVoss from "@/imports/Artists/993d172c52b9d3dcf3f0a506889ca9ee1b98169a.png";
import imgSweden from "@/imports/Artists/d6a098d3b7e09f80e2604a466909237360ce29c2.png";
import imgMaraSoleil from "@/imports/Artists/2fcb7d2b73fa1bac64a1a12f435c7d53564e0433.png";
import imgFrance from "@/imports/Artists/a7baf6237774ca9b643c9f2da0bc5b9a0a7b5e15.png";
import imgNadiaFontaine from "@/imports/Artists/0bbc6cf4c33b820e6a8259e508d898ce6af7597c.png";
import imgBelgium from "@/imports/Artists/a49af91422b4ec21cc9a6949926ed0d04192d670.png";
import imgNeonVeins from "@/imports/Artists/cac58f2f9842578a4d678b01143de169f5e4bbe7.png";
import imgUnitedStates from "@/imports/Artists/31837ce8ddd2a679753c22bddb78a60dd3bafb4c.png";
import imgOrbitBlack from "@/imports/Artists/e8686cd93013af7d89c3cd75264c06fd216f5dfb.png";
import imgPriyaMenon from "@/imports/Artists/aaadbd21068b4ba721ad5e49cda6227ae233c005.png";
import imgIndia from "@/imports/Artists/bcd84d4ca18b5f665f759377b82f7cd1da3bbb62.png";
import imgPulsarTwins from "@/imports/Artists/25ab3fea7da6bc0c54477203bf94da14f6ae7545.png";
import imgRafaelDumont from "@/imports/Artists/6e3c37d1683036b8bc5d43e96b57e4bb686c7574.png";
import imgBrazil from "@/imports/Artists/7829320e91d88c1f4671cc43d171c23c5ec2f2e5.png";
import imgSorenHolt from "@/imports/Artists/922ad3553e61c4ce50459b8f56e58c0ccff2eed4.png";
import imgDenmark from "@/imports/Artists/0c7bbd3f3078539cf263badf0226df20bd06cee8.png";
import imgStaticEmpire from "@/imports/Artists/6458070e3dffac539b4ff55eef6b17c40efee6e5.png";
import imgCanada from "@/imports/Artists/95ecd1576f3b7d83a078adb9dfa83695251ebff9.png";
import imgTheAmberCircuit from "@/imports/Artists/59e7a155c17e2b84ddb3cf338f6db93aa9acdb05.png";
import imgNetherlands from "@/imports/Artists/c00a6a8198de115064fee2af586aa42b88f0e606.png";
import imgTheDriftCollective from "@/imports/Artists/094e2ce1501f135cfd75e7191a869bdc7be20cba.png";
import imgUnitedKingdom from "@/imports/Artists/b8c3380dd5a5243098bbc6c99b309f549f6e99e4.png";
import imgTheGlassMenagerie from "@/imports/Artists/867faa1004bba9988647907cceacbfd8b4fb16ba.png";
import imgTheIronShore from "@/imports/Artists/e82d9688a856fe72c9b03c31786359da69317a35.png";
import imgIreland from "@/imports/Artists/ebb8872439d3dfd5e3c92653a176225468c0f849.png";
import imgTheLunarWolves from "@/imports/Artists/6192ec3cb5df7f5cd90e54ab9d6ca430fddc3a7b.png";
import imgTheSaltFlats from "@/imports/Artists/6d14be70514586051a7d60189ae4f68f5e51ca48.png";
import imgTomasReyes from "@/imports/Artists/c6de21dc8d5456ac2ebb4baa69acae9abfd6bd71.png";
import imgMexico from "@/imports/Artists/e1a7f69bafb5773ee1b24c32fe0b1519e1720cca.png";
import imgVoidSignal from "@/imports/Artists/8934c094ec0252fdf8bc4f8dc921d9ccfa26e952.png";
import imgSouthKorea from "@/imports/Artists/b3bd5036243125c7eb05624202bfb544b2fd84c6.png";
import imgYaraOsei from "@/imports/Artists/d055eff3014753f8cf2064305b7581c6999e88be.png";
import imgGhana from "@/imports/Artists/48498b3ca378147acadd31b2b6f451facfb3b883.png";
import imgZuriNakamura from "@/imports/Artists/7904cb0025b39f222fadb1ef662026d6f6865817.png";

// ─── Album Cover Imports ──────────────────────────────────────────────────────
import imgAlkaliDreams from "@/imports/Albums/e17558f5bed6bb7e264d81bd9728141cd33d17b9.png";
import imgAmberHours from "@/imports/Albums/69ac7ca749dd4fe4bf115630418c61d94d7933e5.png";
import imgAndesTransmission from "@/imports/Albums/1b39505b66d18eff6813e33c5fd421e6db86a6e4.png";
import imgArchipelago from "@/imports/Albums/a1c11f9f33e66cb14d94b438324c4b2db5ca1a7e.png";
import imgAuroraBorealisEp from "@/imports/Albums/7c022241965b1db796f7a3e9a66cd0dbfbcba196.png";
import imgBadlandsHymnal from "@/imports/Albums/e72d3768593af02d8bd7e2af9a2a9001cf25c27f.png";
import imgBasalt from "@/imports/Albums/16e2161a0f34eb206d6a09eb27f6975459914301.png";
import imgBeiraMar from "@/imports/Albums/fabca24b9882225060d3c321bbbe9ae666d99b94.png";
import imgBifurcationPoint from "@/imports/Albums/19a66cbcd0db35b05002dd2284559eab938bd706.png";
import imgBinaryStar from "@/imports/Albums/514adbb1136883b83d0ed64be92501fd392098f8.png";
import imgBrugesNocturne from "@/imports/Albums/c371f9c8d8123a032115a812f110b558ad234ddf.png";
import imgCapeTownFrequencies from "@/imports/Albums/6936fe59fc98708d7a9cb3ca0a7ab4d5e76dfd3f.png";
import imgCherryBlossomStatic from "@/imports/Albums/ff883c1bd7a4f5c6e8a5a772b2bea6f987e7aa02.png";
import imgChocolateBox from "@/imports/Albums/9603f91b9d17bc20293d630b3b8ff2c68040eed8.png";
import imgChromaticPulse from "@/imports/Albums/dd4e73619bb6d1a9765e5e93532f886ed346f6d2.png";
import imgCiudadFantasma from "@/imports/Albums/a798418419d2296c810d4e8175639b4d3595b2db.png";
import imgCollapseTheory from "@/imports/Albums/7a650197de18dce87b0200d68f22363cc2aa1823.png";
import imgCrescentTide from "@/imports/Albums/65a7e6db83a74ac5cd01d028013d6855ff773bfc.png";
import imgCrystalLattice from "@/imports/Albums/6278a3348d5559ca5d61d5467e10ddb587954237.png";
import imgCurrentAffairs from "@/imports/Albums/04136d33a342f1c090f5e542d8a4c7f14419139b.png";
import imgDarkMatter from "@/imports/Albums/7ba17e46dd47cac762012569d859dcd8c6ae25c8.png";
import imgDarkSideFrequencies from "@/imports/Albums/12f3183c33ba83331573a6fabc7c307bb245a13f.png";
import imgDebut from "@/imports/Albums/e2e5a8d68a60105902e16ce4688b4ccf69d6be69.png";
import imgEchoChamber from "@/imports/Albums/d7058457e2811bedfee244f9748dc2612795687a.png";
import imgEclats from "@/imports/Albums/e59f8dc0c59f3d42179b1d10af1e501d014f5eea.png";
import imgEmpireStateOfBass from "@/imports/Albums/c270bd3d5886af9f3861f57b2a57ae5a0aa51666.png";
import imgEventHorizonIi from "@/imports/Albums/d17c4425fbf6bfa7c73f8a5b3dd517b9edbe9b96.png";
import imgExoplanet from "@/imports/Albums/7893b79a5ee91c8c3e1e393187d37a7c693bd61e.png";
import imgFeatherweight from "@/imports/Albums/0b299af63ae34e7065d4826e80ce5f0486afb47a.png";
import imgFeedbackLoop from "@/imports/Albums/12abe8bf053762f69ff6012610605d9599ed0112.png";
import imgFjordlight from "@/imports/Albums/5f60fa2a43de1a2cb43728a6509bd0a51b03406e.png";
import imgFragileArchitecture from "@/imports/Albums/7ae5da6a97c507bf5b9daa87c5ab64ad184e0230.png";
import imgFrontera from "@/imports/Albums/2d7f38540521dc505faf58c374476eb46bdcef57.png";
import imgGhostFrequencies from "@/imports/Albums/c2afb2729957c0d496aa50c5617ed6c12bb56915.png";
import imgHorizonDore from "@/imports/Albums/dc5c6cfd57b09db911526fcd5e9c2c4742788535.png";
import imgHorizonteRojo from "@/imports/Albums/1bc386bb5d83996f738529947cb39eecb0d2cf45.png";
import imgHowlAtApogee from "@/imports/Albums/0821294e9c807c5cadee930b19d287df038f3dab.png";
import imgIndigoFrequencies from "@/imports/Albums/8976b4e6121f0e36c6c63959f553c2f60667c640.png";
import imgIndlela from "@/imports/Albums/fd661c3941076d37f023e7da10fd009db319a431.png";
import imgIterationZero from "@/imports/Albums/91aece18a33934f5a86a1a2536745ebe71592272.png";
import imgKrugerSessions from "@/imports/Albums/14837cc01ed1ed57b551ffefab64acb651e3f6f7.png";
import imgMandelbrotSuite from "@/imports/Albums/82d9a6149d02514e003a4a302ab0dca67f86b296.png";
import imgMeridian from "@/imports/Albums/972597ecedfdfeb06c3759d4b2473121c8532967.png";
import imgMineralSongs from "@/imports/Albums/90d90f5f089d20bd41c56c2b2b4191c9009005cb.png";
import imgPaperLanterns from "@/imports/Albums/c6083575041e0a791b0e3c88cfdff3fff6126441.png";
import imgWhiteNoiseWinter from "@/imports/Albums/4780f9ce65fd6d87849b8cde125a43c4b1f991d9.png";
import imgPremiereLumiere from "@/imports/Albums/ea454b5a82a71eff7740f5c8fa58932edbf2224c.png";
import imgRefraction from "@/imports/Albums/b08610045f7a3fb9b5d85ef09b799f4af5d4d834.png";
import imgResonanzfeld from "@/imports/Albums/b4dacebd8b2ee2a2bde5ea066b39fd60d36b39a5.png";
import imgSeaGlass from "@/imports/Albums/bc1c23b1875c7564ba8777860826068b42966ecf.png";
import imgSevenRivers from "@/imports/Albums/d3b421f8ab9d73594c9b779403e72be1ef36bf64.png";
import imgShorelineHymns from "@/imports/Albums/145779d90773e80d677bdca2ad33e2752e91e0f1.png";
import imgSolstice from "@/imports/Albums/b9f6ec0070d4c61867623da0e927e1fdb07d6c0f.png";
import imgSignalDecay from "@/imports/Albums/4c6ab56e9e00ad9842d96b11dc92fa64078dcd6e.png";
import imgStormSeason from "@/imports/Albums/2fdd111813695b4d0d549c5149b7e02acb7bc302.png";
import imgUltraviolet from "@/imports/Albums/9870358f3d1370e0a2821486fa40c51e1380af9d.png";
import imgVoltageDreams from "@/imports/Albums/8da1620ddfaaf88e1843bff9a2e3a1aeaeb44227.png";
import imgWingspan from "@/imports/Albums/41c584360cabd1aff7c01d5e8c543df2d0168425.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type ArtistType = "Solo" | "Group";
type Cert = "Gold" | "Platinum" | "Diamond" | null;
type StreamingPlatform = "SP" | "AM" | "AZ";

interface Artist {
  id: string;
  name: string;
  photo: string;
  flag: string;
  countryCode: string;
  type: ArtistType;
  groupSize?: number;
  since: number;
}

interface Album {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  artistPhoto: string;
  label: string;
  year: number;
  sold: string;
  tracks: number;
  singles: number;
  cert: Cert;
  streaming: StreamingPlatform[];
  cover: string;
}

// ─── Country / Flag Map ───────────────────────────────────────────────────────
const FLAG_MAP: Record<string, string> = {
  AU: imgAustralia,
  AR: imgArgentina,
  ZA: imgSouthAfrica,
  RU: imgRussia,
  DE: imgGermany,
  NO: imgNorway,
  JP: imgJapan,
  NZ: imgNewZealand,
  SE: imgSweden,
  FR: imgFrance,
  BE: imgBelgium,
  US: imgUnitedStates,
  IN: imgIndia,
  BR: imgBrazil,
  DK: imgDenmark,
  CA: imgCanada,
  NL: imgNetherlands,
  UK: imgUnitedKingdom,
  IE: imgIreland,
  MX: imgMexico,
  KR: imgSouthKorea,
  GH: imgGhana,
};

const COUNTRY_NAMES: Record<string, string> = {
  AU: "Australia", AR: "Argentina", ZA: "South Africa", RU: "Russia",
  DE: "Germany", NO: "Norway", JP: "Japan", NZ: "New Zealand",
  SE: "Sweden", FR: "France", BE: "Belgium", US: "United States",
  IN: "India", BR: "Brazil", DK: "Denmark", CA: "Canada",
  NL: "Netherlands", UK: "United Kingdom", IE: "Ireland", MX: "Mexico",
  KR: "South Korea", GH: "Ghana",
};

// ─── Theme Context ────────────────────────────────────────────────────────────
interface ThemeCtx { isDark: boolean; toggle: () => void; }
const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggle: () => {} });
const useTheme = () => useContext(ThemeContext);

// Theme-aware class helpers
function t(dark: string, light: string, isDark: boolean) {
  return isDark ? dark : light;
}

// ─── Palette constants ────────────────────────────────────────────────────────
// Used inline via the t() helper
// Dark:  bg #09090f, card #13131c, text #f2f2f8, muted #7070a0, accent #a855f7
// Light: bg #faf8f4, card rgba(255,255,255,0.85), text #1c1917, muted #78716c, accent #9333ea

// ─── Initial Data ─────────────────────────────────────────────────────────────
const INITIAL_ARTISTS: Artist[] = [
  { id: "cleo-sterling", name: "Cleo Sterling", photo: imgCleoSterling, flag: imgAustralia, countryCode: "AU", type: "Solo", since: 2021 },
  { id: "crimson-atlas", name: "Crimson Atlas", photo: imgCrimsonAtlas, flag: imgArgentina, countryCode: "AR", type: "Group", groupSize: 4, since: 2014 },
  { id: "deep-current", name: "Deep Current", photo: imgDeepCurrent, flag: imgSouthAfrica, countryCode: "ZA", type: "Group", groupSize: 6, since: 2009 },
  { id: "dmitri-volkov", name: "Dmitri Volkov", photo: imgDmitriVolkov, flag: imgRussia, countryCode: "RU", type: "Solo", since: 2010 },
  { id: "echo-assembly", name: "Echo Assembly", photo: imgEchoAssembly, flag: imgGermany, countryCode: "DE", type: "Group", groupSize: 5, since: 2010 },
  { id: "elara-vind", name: "Elara Vind", photo: imgElaraVind, flag: imgNorway, countryCode: "NO", type: "Solo", since: 2013 },
  { id: "fractal-dawn", name: "Fractal Dawn", photo: imgFractalDawn, flag: imgGermany, countryCode: "DE", type: "Group", groupSize: 5, since: 2017 },
  { id: "hana-mizuki", name: "Hana Mizuki", photo: imgHanaMizuki, flag: imgJapan, countryCode: "JP", type: "Solo", since: 2018 },
  { id: "isla-crane", name: "Isla Crane", photo: imgIslaCrane, flag: imgNewZealand, countryCode: "NZ", type: "Solo", since: 2019 },
  { id: "kai-sundara", name: "Kai Sundara", photo: imgKaiSundara, flag: imgJapan, countryCode: "JP", type: "Solo", since: 2017 },
  { id: "lena-voss", name: "Lena Voss", photo: imgLenaVoss, flag: imgSweden, countryCode: "SE", type: "Solo", since: 2012 },
  { id: "mara-soleil", name: "Mara Soleil", photo: imgMaraSoleil, flag: imgFrance, countryCode: "FR", type: "Solo", since: 2014 },
  { id: "nadia-fontaine", name: "Nadia Fontaine", photo: imgNadiaFontaine, flag: imgBelgium, countryCode: "BE", type: "Solo", since: 2016 },
  { id: "neon-veins", name: "Neon Veins", photo: imgNeonVeins, flag: imgUnitedStates, countryCode: "US", type: "Group", groupSize: 4, since: 2008 },
  { id: "orbit-black", name: "Orbit Black", photo: imgOrbitBlack, flag: imgUnitedStates, countryCode: "US", type: "Group", groupSize: 5, since: 2015 },
  { id: "priya-menon", name: "Priya Menon", photo: imgPriyaMenon, flag: imgIndia, countryCode: "IN", type: "Solo", since: 2019 },
  { id: "pulsar-twins", name: "Pulsar Twins", photo: imgPulsarTwins, flag: imgUnitedStates, countryCode: "US", type: "Group", groupSize: 2, since: 2016 },
  { id: "rafael-dumont", name: "Rafael Dumont", photo: imgRafaelDumont, flag: imgBrazil, countryCode: "BR", type: "Solo", since: 2011 },
  { id: "soren-holt", name: "Soren Holt", photo: imgSorenHolt, flag: imgDenmark, countryCode: "DK", type: "Solo", since: 2019 },
  { id: "static-empire", name: "Static Empire", photo: imgStaticEmpire, flag: imgCanada, countryCode: "CA", type: "Group", groupSize: 6, since: 2003 },
  { id: "the-amber-circuit", name: "The Amber Circuit", photo: imgTheAmberCircuit, flag: imgNetherlands, countryCode: "NL", type: "Group", groupSize: 3, since: 2009 },
  { id: "the-drift-collective", name: "The Drift Collective", photo: imgTheDriftCollective, flag: imgUnitedKingdom, countryCode: "UK", type: "Group", groupSize: 5, since: 2005 },
  { id: "the-glass-menagerie", name: "The Glass Menagerie", photo: imgTheGlassMenagerie, flag: imgUnitedKingdom, countryCode: "UK", type: "Group", groupSize: 4, since: 2004 },
  { id: "the-iron-shore", name: "The Iron Shore", photo: imgTheIronShore, flag: imgIreland, countryCode: "IE", type: "Group", groupSize: 3, since: 2009 },
  { id: "the-lunar-wolves", name: "The Lunar Wolves", photo: imgTheLunarWolves, flag: imgAustralia, countryCode: "AU", type: "Group", groupSize: 4, since: 2007 },
  { id: "the-salt-flats", name: "The Salt Flats", photo: imgTheSaltFlats, flag: imgCanada, countryCode: "CA", type: "Group", groupSize: 5, since: 2011 },
  { id: "tomas-reyes", name: "Tomas Reyes", photo: imgTomasReyes, flag: imgMexico, countryCode: "MX", type: "Solo", since: 2009 },
  { id: "void-signal", name: "Void Signal", photo: imgVoidSignal, flag: imgSouthKorea, countryCode: "KR", type: "Group", groupSize: 7, since: 2016 },
  { id: "yara-osei", name: "Yara Osei", photo: imgYaraOsei, flag: imgGhana, countryCode: "GH", type: "Solo", since: 2020 },
  { id: "zuri-nakamura", name: "Zuri Nakamura", photo: imgZuriNakamura, flag: imgUnitedStates, countryCode: "US", type: "Solo", since: 2012 },
];

const INITIAL_ALBUMS: Album[] = [
  { id: "debut", title: "Debut", artistId: "cleo-sterling", artistName: "Cleo Sterling", artistPhoto: imgCleoSterling, label: "Wavefront Music", year: 2021, sold: "85K", tracks: 6, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgDebut },
  { id: "amber-hours", title: "Amber Hours", artistId: "cleo-sterling", artistName: "Cleo Sterling", artistPhoto: imgCleoSterling, label: "Wavefront Music", year: 2023, sold: "62K", tracks: 8, singles: 2, cert: null, streaming: ["SP"], cover: imgAmberHours },
  { id: "dark-matter", title: "Dark Matter", artistId: "crimson-atlas", artistName: "Crimson Atlas", artistPhoto: imgCrimsonAtlas, label: "Fracture Records", year: 2014, sold: "340K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP"], cover: imgDarkMatter },
  { id: "bifurcation-point", title: "Bifurcation Point", artistId: "crimson-atlas", artistName: "Crimson Atlas", artistPhoto: imgCrimsonAtlas, label: "Fracture Records", year: 2016, sold: "680K", tracks: 13, singles: 4, cert: "Platinum", streaming: ["SP", "AM"], cover: imgBifurcationPoint },
  { id: "collapse-theory", title: "Collapse Theory", artistId: "crimson-atlas", artistName: "Crimson Atlas", artistPhoto: imgCrimsonAtlas, label: "Fracture Records", year: 2018, sold: "720K", tracks: 12, singles: 3, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgCollapseTheory },
  { id: "crystal-lattice", title: "Crystal Lattice", artistId: "crimson-atlas", artistName: "Crimson Atlas", artistPhoto: imgCrimsonAtlas, label: "Fracture Records", year: 2021, sold: "480K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgCrystalLattice },
  { id: "kruger-sessions", title: "Kruger Sessions", artistId: "deep-current", artistName: "Deep Current", artistPhoto: imgDeepCurrent, label: "Indaba Studios", year: 2010, sold: "380K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgKrugerSessions },
  { id: "cape-town-frequencies", title: "Cape Town Frequencies", artistId: "deep-current", artistName: "Deep Current", artistPhoto: imgDeepCurrent, label: "Indaba Studios", year: 2013, sold: "540K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgCapeTownFrequencies },
  { id: "indlela", title: "Indlela", artistId: "deep-current", artistName: "Deep Current", artistPhoto: imgDeepCurrent, label: "Indaba Studios", year: 2016, sold: "290K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AZ"], cover: imgIndlela },
  { id: "signal-decay", title: "Signal Decay", artistId: "deep-current", artistName: "Deep Current", artistPhoto: imgDeepCurrent, label: "Indaba Studios", year: 2018, sold: "360K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgSignalDecay },
  { id: "shoreline-hymns", title: "Shoreline Hymns", artistId: "deep-current", artistName: "Deep Current", artistPhoto: imgDeepCurrent, label: "Indaba Studios", year: 2020, sold: "410K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgShorelineHymns },
  { id: "resonanzfeld", title: "Resonanzfeld", artistId: "dmitri-volkov", artistName: "Dmitri Volkov", artistPhoto: imgDmitriVolkov, label: "Siberian Sound", year: 2013, sold: "570K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgResonanzfeld },
  { id: "ghost-frequencies", title: "Ghost Frequencies", artistId: "dmitri-volkov", artistName: "Dmitri Volkov", artistPhoto: imgDmitriVolkov, label: "Siberian Sound", year: 2016, sold: "480K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgGhostFrequencies },
  { id: "dark-side-frequencies", title: "Dark Side Frequencies", artistId: "dmitri-volkov", artistName: "Dmitri Volkov", artistPhoto: imgDmitriVolkov, label: "Siberian Sound", year: 2019, sold: "380K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgDarkSideFrequencies },
  { id: "feedback-loop", title: "Feedback Loop", artistId: "dmitri-volkov", artistName: "Dmitri Volkov", artistPhoto: imgDmitriVolkov, label: "Siberian Sound", year: 2022, sold: "215K", tracks: 8, singles: 2, cert: null, streaming: ["SP"], cover: imgFeedbackLoop },
  { id: "iteration-zero", title: "Iteration Zero", artistId: "echo-assembly", artistName: "Echo Assembly", artistPhoto: imgEchoAssembly, label: "Neon Factory", year: 2010, sold: "450K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgIterationZero },
  { id: "mandelbrot-suite", title: "Mandelbrot Suite", artistId: "echo-assembly", artistName: "Echo Assembly", artistPhoto: imgEchoAssembly, label: "Neon Factory", year: 2015, sold: "560K", tracks: 13, singles: 4, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgMandelbrotSuite },
  { id: "binary-star", title: "Binary Star", artistId: "echo-assembly", artistName: "Echo Assembly", artistPhoto: imgEchoAssembly, label: "Neon Factory", year: 2019, sold: "290K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgBinaryStar },
  { id: "exoplanet", title: "Exoplanet", artistId: "echo-assembly", artistName: "Echo Assembly", artistPhoto: imgEchoAssembly, label: "Neon Factory", year: 2023, sold: "145K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgExoplanet },
  { id: "horizon-dore", title: "Horizon Doré", artistId: "elara-vind", artistName: "Elara Vind", artistPhoto: imgElaraVind, label: "Fjord Music", year: 2013, sold: "520K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgHorizonDore },
  { id: "eclats", title: "Éclats", artistId: "elara-vind", artistName: "Elara Vind", artistPhoto: imgElaraVind, label: "Fjord Music", year: 2016, sold: "430K", tracks: 10, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgEclats },
  { id: "featherweight", title: "Featherweight", artistId: "elara-vind", artistName: "Elara Vind", artistPhoto: imgElaraVind, label: "Fjord Music", year: 2020, sold: "290K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgFeatherweight },
  { id: "bruges-nocturne", title: "Bruges Nocturne", artistId: "elara-vind", artistName: "Elara Vind", artistPhoto: imgElaraVind, label: "Fjord Music", year: 2022, sold: "160K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgBrugesNocturne },
  { id: "wingspan", title: "Wingspan", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2017, sold: "220K", tracks: 10, singles: 1, cert: null, streaming: ["SP"], cover: imgWingspan },
  { id: "chromatic-pulse", title: "Chromatic Pulse", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2018, sold: "410K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgChromaticPulse },
  { id: "voltage-dreams", title: "Voltage Dreams", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2020, sold: "290K", tracks: 9, singles: 2, cert: null, streaming: ["AM"], cover: imgVoltageDreams },
  { id: "indigo-frequencies", title: "Indigo Frequencies", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2021, sold: "310K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgIndigoFrequencies },
  { id: "storm-season", title: "Storm Season", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2022, sold: "250K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgStormSeason },
  { id: "current-affairs", title: "Current Affairs", artistId: "fractal-dawn", artistName: "Fractal Dawn", artistPhoto: imgFractalDawn, label: "Neon Factory", year: 2023, sold: "190K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgCurrentAffairs },
  { id: "cherry-blossom-static", title: "Cherry Blossom Static", artistId: "hana-mizuki", artistName: "Hana Mizuki", artistPhoto: imgHanaMizuki, label: "Sakura Collective", year: 2018, sold: "350K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgCherryBlossomStatic },
  { id: "paper-lanterns", title: "Paper Lanterns", artistId: "hana-mizuki", artistName: "Hana Mizuki", artistPhoto: imgHanaMizuki, label: "Sakura Collective", year: 2020, sold: "280K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgPaperLanterns },
  { id: "mineral-songs", title: "Mineral Songs", artistId: "hana-mizuki", artistName: "Hana Mizuki", artistPhoto: imgHanaMizuki, label: "Sakura Collective", year: 2023, sold: "120K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgMineralSongs },
  { id: "sea-glass", title: "Sea Glass", artistId: "isla-crane", artistName: "Isla Crane", artistPhoto: imgIslaCrane, label: "Southern Cross", year: 2019, sold: "155K", tracks: 8, singles: 1, cert: null, streaming: ["SP"], cover: imgSeaGlass },
  { id: "crescent-tide", title: "Crescent Tide", artistId: "isla-crane", artistName: "Isla Crane", artistPhoto: imgIslaCrane, label: "Southern Cross", year: 2021, sold: "210K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgCrescentTide },
  { id: "fragile-architecture", title: "Fragile Architecture", artistId: "isla-crane", artistName: "Isla Crane", artistPhoto: imgIslaCrane, label: "Southern Cross", year: 2023, sold: "95K", tracks: 7, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgFragileArchitecture },
  { id: "archipelago", title: "Archipelago", artistId: "kai-sundara", artistName: "Kai Sundara", artistPhoto: imgKaiSundara, label: "Desert Wave Records", year: 2017, sold: "320K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgArchipelago },
  { id: "alkali-dreams", title: "Alkali Dreams", artistId: "kai-sundara", artistName: "Kai Sundara", artistPhoto: imgKaiSundara, label: "Desert Wave Records", year: 2019, sold: "260K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AZ"], cover: imgAlkaliDreams },
  { id: "echo-chamber", title: "Echo Chamber", artistId: "kai-sundara", artistName: "Kai Sundara", artistPhoto: imgKaiSundara, label: "Desert Wave Records", year: 2022, sold: "180K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgEchoChamber },
  { id: "fjordlight", title: "Fjordlight", artistId: "lena-voss", artistName: "Lena Voss", artistPhoto: imgLenaVoss, label: "Nordic Arc", year: 2013, sold: "490K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgFjordlight },
  { id: "white-noise-winter", title: "White Noise Winter", artistId: "lena-voss", artistName: "Lena Voss", artistPhoto: imgLenaVoss, label: "Nordic Arc", year: 2016, sold: "920K", tracks: 11, singles: 3, cert: "Platinum", streaming: ["SP", "AM"], cover: imgWhiteNoiseWinter },
  { id: "solstice", title: "Solstice", artistId: "lena-voss", artistName: "Lena Voss", artistPhoto: imgLenaVoss, label: "Nordic Arc", year: 2019, sold: "640K", tracks: 9, singles: 2, cert: "Gold", streaming: ["SP", "AZ"], cover: imgSolstice },
  { id: "aurora-borealis-ep", title: "Aurora Borealis EP", artistId: "lena-voss", artistName: "Lena Voss", artistPhoto: imgLenaVoss, label: "Nordic Arc", year: 2021, sold: "280K", tracks: 6, singles: 0, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgAuroraBorealisEp },
  { id: "premiere-lumiere", title: "Première Lumière", artistId: "mara-soleil", artistName: "Mara Soleil", artistPhoto: imgMaraSoleil, label: "Atlantic Sound", year: 2014, sold: "610K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgPremiereLumiere },
  { id: "beira-mar", title: "Beira Mar", artistId: "mara-soleil", artistName: "Mara Soleil", artistPhoto: imgMaraSoleil, label: "Atlantic Sound", year: 2017, sold: "520K", tracks: 10, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgBeiraMar },
  { id: "seven-rivers", title: "Seven Rivers", artistId: "mara-soleil", artistName: "Mara Soleil", artistPhoto: imgMaraSoleil, label: "Atlantic Sound", year: 2019, sold: "320K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgSevenRivers },
  { id: "chocolate-box", title: "Chocolate Box", artistId: "mara-soleil", artistName: "Mara Soleil", artistPhoto: imgMaraSoleil, label: "Atlantic Sound", year: 2022, sold: "240K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgChocolateBox },
  { id: "meridian", title: "Meridian", artistId: "nadia-fontaine", artistName: "Nadia Fontaine", artistPhoto: imgNadiaFontaine, label: "Crescent Records", year: 2016, sold: "340K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgMeridian },
  { id: "ultraviolet", title: "Ultraviolet", artistId: "nadia-fontaine", artistName: "Nadia Fontaine", artistPhoto: imgNadiaFontaine, label: "Crescent Records", year: 2019, sold: "410K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgUltraviolet },
  { id: "refraction", title: "Refraction", artistId: "nadia-fontaine", artistName: "Nadia Fontaine", artistPhoto: imgNadiaFontaine, label: "Crescent Records", year: 2022, sold: "180K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgRefraction },
  { id: "empire-state-of-bass", title: "Empire State of Bass", artistId: "neon-veins", artistName: "Neon Veins", artistPhoto: imgNeonVeins, label: "Electric South", year: 2012, sold: "760K", tracks: 14, singles: 5, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgEmpireStateOfBass },
  { id: "howl-at-apogee", title: "Howl at Apogee", artistId: "neon-veins", artistName: "Neon Veins", artistPhoto: imgNeonVeins, label: "Electric South", year: 2015, sold: "580K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM"], cover: imgHowlAtApogee },
  { id: "event-horizon-ii", title: "Event Horizon II", artistId: "neon-veins", artistName: "Neon Veins", artistPhoto: imgNeonVeins, label: "Electric South", year: 2018, sold: "430K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AZ"], cover: imgEventHorizonIi },
  { id: "badlands-hymnal", title: "Badlands Hymnal", artistId: "orbit-black", artistName: "Orbit Black", artistPhoto: imgOrbitBlack, label: "Crossroads Music", year: 2015, sold: "290K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AZ"], cover: imgBadlandsHymnal },
  { id: "ciudad-fantasma", title: "Ciudad Fantasma", artistId: "orbit-black", artistName: "Orbit Black", artistPhoto: imgOrbitBlack, label: "Crossroads Music", year: 2018, sold: "380K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgCiudadFantasma },
  { id: "frontera", title: "Frontera", artistId: "orbit-black", artistName: "Orbit Black", artistPhoto: imgOrbitBlack, label: "Crossroads Music", year: 2021, sold: "420K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgFrontera },
  { id: "basalt", title: "Basalt", artistId: "priya-menon", artistName: "Priya Menon", artistPhoto: imgPriyaMenon, label: "Monsoon Label", year: 2019, sold: "140K", tracks: 7, singles: 1, cert: null, streaming: ["SP"], cover: imgBasalt },
  { id: "andes-transmission", title: "Andes Transmission", artistId: "priya-menon", artistName: "Priya Menon", artistPhoto: imgPriyaMenon, label: "Monsoon Label", year: 2021, sold: "210K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgAndesTransmission },
  { id: "dark-matter-pt", title: "Dark Matter", artistId: "pulsar-twins", artistName: "Pulsar Twins", artistPhoto: imgPulsarTwins, label: "Twin Axis", year: 2016, sold: "340K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgDarkMatter },
  { id: "bifurcation-pt", title: "Bifurcation", artistId: "pulsar-twins", artistName: "Pulsar Twins", artistPhoto: imgPulsarTwins, label: "Twin Axis", year: 2019, sold: "280K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgBifurcationPoint },
  { id: "event-horizon-pt", title: "Event Horizon", artistId: "pulsar-twins", artistName: "Pulsar Twins", artistPhoto: imgPulsarTwins, label: "Twin Axis", year: 2022, sold: "190K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgEventHorizonIi },
  { id: "horizonte-rojo-tr", title: "Horizonte Rojo", artistId: "tomas-reyes", artistName: "Tomas Reyes", artistPhoto: imgTomasReyes, label: "Maguey Sonido", year: 2009, sold: "390K", tracks: 10, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgHorizonteRojo },
  { id: "eclats-tr", title: "Éclats", artistId: "tomas-reyes", artistName: "Tomas Reyes", artistPhoto: imgTomasReyes, label: "Maguey Sonido", year: 2013, sold: "290K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgEclats },
  { id: "bruges-tr", title: "Nocturno", artistId: "tomas-reyes", artistName: "Tomas Reyes", artistPhoto: imgTomasReyes, label: "Maguey Sonido", year: 2017, sold: "350K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgBrugesNocturne },
  { id: "premiere-tr", title: "Primera Luz", artistId: "tomas-reyes", artistName: "Tomas Reyes", artistPhoto: imgTomasReyes, label: "Maguey Sonido", year: 2022, sold: "240K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgPremiereLumiere },
  { id: "horizonte-rojo-rd", title: "Horizonte Rojo", artistId: "rafael-dumont", artistName: "Rafael Dumont", artistPhoto: imgRafaelDumont, label: "Maguey Sonido", year: 2014, sold: "390K", tracks: 10, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgHorizonteRojo },
  { id: "beira-mar-rd", title: "Beira Mar", artistId: "rafael-dumont", artistName: "Rafael Dumont", artistPhoto: imgRafaelDumont, label: "Maguey Sonido", year: 2017, sold: "310K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgBeiraMar },
  { id: "dissolucao", title: "Dissolução", artistId: "rafael-dumont", artistName: "Rafael Dumont", artistPhoto: imgRafaelDumont, label: "Maguey Sonido", year: 2020, sold: "240K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgCollapseTheory },
  { id: "sete-rios", title: "Sete Rios", artistId: "rafael-dumont", artistName: "Rafael Dumont", artistPhoto: imgRafaelDumont, label: "Maguey Sonido", year: 2023, sold: "145K", tracks: 8, singles: 1, cert: null, streaming: ["SP"], cover: imgSevenRivers },
  { id: "storm-season-sh", title: "Storm Season", artistId: "soren-holt", artistName: "Soren Holt", artistPhoto: imgSorenHolt, label: "Nordic Sound", year: 2019, sold: "180K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgStormSeason },
  { id: "wingspan-sh", title: "Wingspan", artistId: "soren-holt", artistName: "Soren Holt", artistPhoto: imgSorenHolt, label: "Nordic Sound", year: 2021, sold: "240K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgWingspan },
  { id: "featherweight-sh", title: "Featherweight", artistId: "soren-holt", artistName: "Soren Holt", artistPhoto: imgSorenHolt, label: "Nordic Sound", year: 2023, sold: "120K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgFeatherweight },
  { id: "current-affairs-se", title: "Current Affairs", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2003, sold: "240K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgCurrentAffairs },
  { id: "signal-decay-se", title: "Signal Decay", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2007, sold: "380K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgSignalDecay },
  { id: "feedback-loop-se", title: "Feedback Loop", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2011, sold: "520K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgFeedbackLoop },
  { id: "chromatic-pulse-se", title: "Chromatic Pulse", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2015, sold: "680K", tracks: 13, singles: 5, cert: "Platinum", streaming: ["SP", "AM"], cover: imgChromaticPulse },
  { id: "dark-side-se", title: "Dark Side", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2019, sold: "440K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgDarkSideFrequencies },
  { id: "voltage-dreams-se", title: "Voltage Dreams", artistId: "static-empire", artistName: "Static Empire", artistPhoto: imgStaticEmpire, label: "Amplify CA", year: 2023, sold: "210K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgVoltageDreams },
  { id: "refraction-tac", title: "Refraction", artistId: "the-amber-circuit", artistName: "The Amber Circuit", artistPhoto: imgTheAmberCircuit, label: "Circuit Press", year: 2009, sold: "290K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgRefraction },
  { id: "resonanzfeld-tac", title: "Resonanzfeld", artistId: "the-amber-circuit", artistName: "The Amber Circuit", artistPhoto: imgTheAmberCircuit, label: "Circuit Press", year: 2013, sold: "410K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgResonanzfeld },
  { id: "indigo-frequencies-tac", title: "Indigo Frequencies", artistId: "the-amber-circuit", artistName: "The Amber Circuit", artistPhoto: imgTheAmberCircuit, label: "Circuit Press", year: 2017, sold: "350K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgIndigoFrequencies },
  { id: "ultraviolet-tac", title: "Ultraviolet", artistId: "the-amber-circuit", artistName: "The Amber Circuit", artistPhoto: imgTheAmberCircuit, label: "Circuit Press", year: 2022, sold: "180K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgUltraviolet },
  { id: "dark-side-tdc", title: "Dark Side Frequencies", artistId: "the-drift-collective", artistName: "The Drift Collective", artistPhoto: imgTheDriftCollective, label: "Northern Drift", year: 2005, sold: "190K", tracks: 10, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgDarkSideFrequencies },
  { id: "collapse-theory-tdc", title: "Collapse Theory", artistId: "the-drift-collective", artistName: "The Drift Collective", artistPhoto: imgTheDriftCollective, label: "Northern Drift", year: 2009, sold: "340K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgCollapseTheory },
  { id: "echo-chamber-tdc", title: "Echo Chamber", artistId: "the-drift-collective", artistName: "The Drift Collective", artistPhoto: imgTheDriftCollective, label: "Northern Drift", year: 2013, sold: "480K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgEchoChamber },
  { id: "signal-decay-tdc", title: "Signal Decay", artistId: "the-drift-collective", artistName: "The Drift Collective", artistPhoto: imgTheDriftCollective, label: "Northern Drift", year: 2017, sold: "560K", tracks: 13, singles: 4, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgSignalDecay },
  { id: "voltage-dreams-tdc", title: "Voltage Dreams", artistId: "the-drift-collective", artistName: "The Drift Collective", artistPhoto: imgTheDriftCollective, label: "Northern Drift", year: 2021, sold: "320K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgVoltageDreams },
  { id: "mandelbrot-tgm", title: "Mandelbrot Suite", artistId: "the-glass-menagerie", artistName: "The Glass Menagerie", artistPhoto: imgTheGlassMenagerie, label: "Glass Press", year: 2004, sold: "240K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgMandelbrotSuite },
  { id: "fragile-architecture-tgm", title: "Fragile Architecture", artistId: "the-glass-menagerie", artistName: "The Glass Menagerie", artistPhoto: imgTheGlassMenagerie, label: "Glass Press", year: 2008, sold: "380K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgFragileArchitecture },
  { id: "crystal-lattice-tgm", title: "Crystal Lattice", artistId: "the-glass-menagerie", artistName: "The Glass Menagerie", artistPhoto: imgTheGlassMenagerie, label: "Glass Press", year: 2012, sold: "520K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgCrystalLattice },
  { id: "archipelago-tgm", title: "Archipelago", artistId: "the-glass-menagerie", artistName: "The Glass Menagerie", artistPhoto: imgTheGlassMenagerie, label: "Glass Press", year: 2016, sold: "440K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgArchipelago },
  { id: "binary-star-tgm", title: "Binary Star", artistId: "the-glass-menagerie", artistName: "The Glass Menagerie", artistPhoto: imgTheGlassMenagerie, label: "Glass Press", year: 2021, sold: "290K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgBinaryStar },
  { id: "howl-tis", title: "Howl at Apogee", artistId: "the-iron-shore", artistName: "The Iron Shore", artistPhoto: imgTheIronShore, label: "Atlantic Shore", year: 2009, sold: "280K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgHowlAtApogee },
  { id: "shoreline-tis", title: "Shoreline Hymns", artistId: "the-iron-shore", artistName: "The Iron Shore", artistPhoto: imgTheIronShore, label: "Atlantic Shore", year: 2012, sold: "390K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgShorelineHymns },
  { id: "event-horizon-tis", title: "Event Horizon", artistId: "the-iron-shore", artistName: "The Iron Shore", artistPhoto: imgTheIronShore, label: "Atlantic Shore", year: 2015, sold: "510K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM"], cover: imgEventHorizonIi },
  { id: "sea-glass-tis", title: "Sea Glass", artistId: "the-iron-shore", artistName: "The Iron Shore", artistPhoto: imgTheIronShore, label: "Atlantic Shore", year: 2018, sold: "350K", tracks: 10, singles: 2, cert: "Gold", streaming: ["SP", "AZ"], cover: imgSeaGlass },
  { id: "crescent-tis", title: "Crescent Tide", artistId: "the-iron-shore", artistName: "The Iron Shore", artistPhoto: imgTheIronShore, label: "Atlantic Shore", year: 2022, sold: "210K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgCrescentTide },
  { id: "howl-tlw", title: "Howl", artistId: "the-lunar-wolves", artistName: "The Lunar Wolves", artistPhoto: imgTheLunarWolves, label: "Full Moon Records", year: 2007, sold: "310K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgHowlAtApogee },
  { id: "dark-matter-tlw", title: "Dark Matter", artistId: "the-lunar-wolves", artistName: "The Lunar Wolves", artistPhoto: imgTheLunarWolves, label: "Full Moon Records", year: 2011, sold: "450K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgDarkMatter },
  { id: "storm-season-tlw", title: "Storm Season", artistId: "the-lunar-wolves", artistName: "The Lunar Wolves", artistPhoto: imgTheLunarWolves, label: "Full Moon Records", year: 2015, sold: "580K", tracks: 13, singles: 4, cert: "Platinum", streaming: ["SP", "AM", "AZ"], cover: imgStormSeason },
  { id: "mineral-songs-tlw", title: "Mineral Songs", artistId: "the-lunar-wolves", artistName: "The Lunar Wolves", artistPhoto: imgTheLunarWolves, label: "Full Moon Records", year: 2020, sold: "370K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM"], cover: imgMineralSongs },
  { id: "basalt-tsf", title: "Basalt", artistId: "the-salt-flats", artistName: "The Salt Flats", artistPhoto: imgTheSaltFlats, label: "Desert Press", year: 2011, sold: "220K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgBasalt },
  { id: "alkali-dreams-tsf", title: "Alkali Dreams", artistId: "the-salt-flats", artistName: "The Salt Flats", artistPhoto: imgTheSaltFlats, label: "Desert Press", year: 2014, sold: "340K", tracks: 11, singles: 2, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgAlkaliDreams },
  { id: "ciudad-tsf", title: "Ciudad Fantasma", artistId: "the-salt-flats", artistName: "The Salt Flats", artistPhoto: imgTheSaltFlats, label: "Desert Press", year: 2017, sold: "420K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM"], cover: imgCiudadFantasma },
  { id: "frontera-tsf", title: "Frontera", artistId: "the-salt-flats", artistName: "The Salt Flats", artistPhoto: imgTheSaltFlats, label: "Desert Press", year: 2020, sold: "310K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgFrontera },
  { id: "horizonte-tsf", title: "Horizonte Rojo", artistId: "the-salt-flats", artistName: "The Salt Flats", artistPhoto: imgTheSaltFlats, label: "Desert Press", year: 2023, sold: "180K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgHorizonteRojo },
  { id: "iteration-zero-vs", title: "Iteration Zero", artistId: "void-signal", artistName: "Void Signal", artistPhoto: imgVoidSignal, label: "Seoul Wave", year: 2016, sold: "280K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgIterationZero },
  { id: "binary-star-vs", title: "Binary Star", artistId: "void-signal", artistName: "Void Signal", artistPhoto: imgVoidSignal, label: "Seoul Wave", year: 2018, sold: "390K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgBinaryStar },
  { id: "collapse-theory-vs", title: "Collapse Theory", artistId: "void-signal", artistName: "Void Signal", artistPhoto: imgVoidSignal, label: "Seoul Wave", year: 2021, sold: "510K", tracks: 12, singles: 4, cert: "Platinum", streaming: ["SP", "AM"], cover: imgCollapseTheory },
  { id: "exoplanet-vs", title: "Exoplanet", artistId: "void-signal", artistName: "Void Signal", artistPhoto: imgVoidSignal, label: "Seoul Wave", year: 2023, sold: "220K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgExoplanet },
  { id: "indlela-yo", title: "Indlela", artistId: "yara-osei", artistName: "Yara Osei", artistPhoto: imgYaraOsei, label: "Accra Rising", year: 2020, sold: "145K", tracks: 8, singles: 1, cert: null, streaming: ["SP", "AM"], cover: imgIndlela },
  { id: "cape-town-yo", title: "Cape Town Frequencies", artistId: "yara-osei", artistName: "Yara Osei", artistPhoto: imgYaraOsei, label: "Accra Rising", year: 2022, sold: "190K", tracks: 9, singles: 2, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgCapeTownFrequencies },
  { id: "empire-state-zn", title: "Empire State of Bass", artistId: "zuri-nakamura", artistName: "Zuri Nakamura", artistPhoto: imgZuriNakamura, label: "Nakamura Music", year: 2012, sold: "480K", tracks: 12, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgEmpireStateOfBass },
  { id: "echo-chamber-zn", title: "Echo Chamber", artistId: "zuri-nakamura", artistName: "Zuri Nakamura", artistPhoto: imgZuriNakamura, label: "Nakamura Music", year: 2015, sold: "590K", tracks: 13, singles: 4, cert: "Platinum", streaming: ["SP", "AM"], cover: imgEchoChamber },
  { id: "ultraviolet-zn", title: "Ultraviolet", artistId: "zuri-nakamura", artistName: "Zuri Nakamura", artistPhoto: imgZuriNakamura, label: "Nakamura Music", year: 2018, sold: "430K", tracks: 11, singles: 3, cert: "Gold", streaming: ["SP", "AM", "AZ"], cover: imgUltraviolet },
  { id: "dark-matter-zn", title: "Dark Matter", artistId: "zuri-nakamura", artistName: "Zuri Nakamura", artistPhoto: imgZuriNakamura, label: "Nakamura Music", year: 2021, sold: "310K", tracks: 10, singles: 2, cert: null, streaming: ["SP", "AM"], cover: imgDarkMatter },
  { id: "voltage-dreams-zn", title: "Voltage Dreams", artistId: "zuri-nakamura", artistName: "Zuri Nakamura", artistPhoto: imgZuriNakamura, label: "Nakamura Music", year: 2023, sold: "195K", tracks: 9, singles: 1, cert: null, streaming: ["SP", "AM", "AZ"], cover: imgVoltageDreams },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function sumSold(albumList: Album[]): string {
  const total = albumList.reduce((acc, al) => {
    const raw = al.sold.replace(/,/g, "");
    const n = parseFloat(raw);
    const mult = /[Mm]/i.test(raw) ? 1000 : 1;
    return acc + (isNaN(n) ? 0 : n * mult);
  }, 0);
  if (total >= 1000) return `${(total / 1000).toFixed(1).replace(/\.0$/, "")}M`;
  return `${Math.round(total)}K`;
}

// ─── Shared UI Helpers ────────────────────────────────────────────────────────
function CertBadge({ cert, isDark }: { cert: Cert; isDark: boolean }) {
  if (!cert) return null;
  const color =
    cert === "Platinum" ? "text-[#cad5e2] border-[rgba(202,213,226,0.35)]" :
    cert === "Gold" ? "text-[#fdc700] border-[rgba(253,199,0,0.35)]" :
    "text-[#b9f2ff] border-[rgba(185,242,255,0.35)]";
  const lightColor =
    cert === "Platinum" ? "text-[#6b7280] border-[rgba(107,114,128,0.4)]" :
    cert === "Gold" ? "text-[#b45309] border-[rgba(180,83,9,0.4)]" :
    "text-[#0891b2] border-[rgba(8,145,178,0.4)]";
  return (
    <span className={`inline-flex items-center px-[7.8px] py-[2.55px] border rounded-[3.5px] text-[10.5px] font-semibold tracking-[0.525px] uppercase ${isDark ? color : lightColor}`}>
      {cert}
    </span>
  );
}

function StreamingBadge({ platform }: { platform: StreamingPlatform }) {
  const styles: Record<StreamingPlatform, string> = {
    SP: "bg-[rgba(29,185,84,0.2)] text-[#1db954]",
    AM: "bg-[rgba(252,60,68,0.2)] text-[#fc3c44]",
    AZ: "bg-[rgba(0,168,225,0.2)] text-[#00a8e1]",
  };
  return (
    <span className={`inline-flex items-center px-[5.25px] py-[1.75px] rounded-[3.5px] text-[10.5px] font-bold ${styles[platform]}`}>
      {platform}
    </span>
  );
}

function TypeBadge({ type, groupSize, isDark, artistName, detailMode }: { type: ArtistType; groupSize?: number; isDark: boolean; artistName?: string; detailMode?: boolean }) {
  if (type === "Solo") {
    return (
      <span className={`inline-flex items-center px-[7px] py-[1.75px] rounded-full text-[10.5px] font-medium ${isDark ? "bg-[rgba(246,51,154,0.15)] text-[#fb64b6]" : "bg-[rgba(147,51,234,0.12)] text-[#9333ea]"}`}>
        Solo Artist
      </span>
    );
  }
  const tooltip = groupSize && artistName ? `${groupSize} members in ${artistName}` : undefined;
  const label = detailMode && groupSize ? `${groupSize} members of Group` : "Group";
  return (
    <span title={detailMode ? undefined : tooltip} className={`inline-flex items-center px-[7px] py-[1.75px] rounded-full text-[10.5px] font-medium cursor-default ${isDark ? "bg-[rgba(168,85,247,0.15)] text-[#a855f7]" : "bg-[rgba(147,51,234,0.12)] text-[#9333ea]"}`}>
      {label}
    </span>
  );
}

// Theme-aware select/input shared classes
function inputCls(isDark: boolean) {
  return isDark
    ? "bg-[#1a1a26] border-[rgba(255,255,255,0.08)] text-[#f2f2f8] placeholder:text-[#7070a0] focus:border-[rgba(168,85,247,0.5)]"
    : "bg-[#f0ebe2] border-[rgba(0,0,0,0.1)] text-[#1c1917] placeholder:text-[#78716c] focus:border-[rgba(147,51,234,0.4)]";
}

// ─── Reusable Confirmation Dialog ─────────────────────────────────────────────
interface ConfirmDialogProps {
  title: string;
  body: string;
  confirmLabel?: string;
  image?: string;
  imageShape?: "circle" | "square";
  onConfirm: () => void;
  onCancel: () => void;
  isDark: boolean;
}
function ConfirmDialog({ title, body, confirmLabel = "Delete", image, imageShape = "square", onConfirm, onCancel, isDark }: ConfirmDialogProps) {
  const card = isDark ? "bg-[#13131c] border-[rgba(255,255,255,0.08)]" : "bg-white border-[rgba(0,0,0,0.1)]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const sub = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" onClick={onCancel} />
      <div className={`relative border rounded-[14px] w-[360px] p-[21px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.7)] ${card}`}>
        {image && (
          <div className={`mb-[14px] overflow-hidden ${imageShape === "circle" ? "rounded-full size-[64px]" : "rounded-[10px] w-[64px] h-[64px]"}`} style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <h2 className={`text-[17.5px] font-semibold mb-[10px] ${heading}`}>{title}</h2>
        <p className={`text-[12.25px] leading-[18px] mb-[21px] ${sub}`}>{body}</p>
        <div className="flex gap-[10.5px]">
          <button onClick={onCancel} className={`flex-1 py-[10.5px] rounded-[10.5px] border text-[12.25px] font-medium transition-colors ${isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0] hover:text-[#f2f2f8]" : "border-[rgba(0,0,0,0.1)] text-[#78716c] hover:text-[#1c1917]"}`}>
            Cancel
          </button>
          <button onClick={onConfirm} className="flex-1 py-[10.5px] rounded-[10.5px] bg-red-600 text-white text-[12.25px] font-medium hover:bg-red-700 transition-colors">
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
interface NavBarProps {
  activeTab: "artists" | "albums";
  onTabChange: (tab: "artists" | "albums") => void;
}
function NavBar({ activeTab, onTabChange }: NavBarProps) {
  const { isDark, toggle } = useTheme();
  const nb = isDark ? "bg-[rgba(9,9,15,0.85)] border-[rgba(255,255,255,0.08)]" : "bg-[rgba(250,248,244,0.85)] border-[rgba(0,0,0,0.1)]";
  const logo = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const activeTab_ = isDark ? "bg-[rgba(168,85,247,0.2)] text-[#a855f7]" : "bg-[rgba(147,51,234,0.15)] text-[#9333ea]";
  const inactiveTab = isDark ? "text-[#7070a0] hover:text-[#a8a8c0]" : "text-[#78716c] hover:text-[#1c1917]";
  const toggleBtn = isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0] hover:text-[#f2f2f8]" : "border-[rgba(0,0,0,0.1)] text-[#78716c] hover:text-[#1c1917]";
  return (
    <div className={`backdrop-blur-md w-full shrink-0 border-b sticky top-0 z-40 ${nb}`}>
      <div className="flex items-center gap-[21px] h-[49px] px-[21px] max-w-[1120px] mx-auto">
        <div className="flex items-center gap-[7px] shrink-0">
          <div className="rounded-[14.5px] size-[38.5px] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,rgb(142,81,255) 0%,rgb(246,51,154) 100%)" }}>
            <Music className="w-5 h-5 text-white" strokeWidth={1.67} />
          </div>
          <span className={`text-[21px] tracking-[-0.525px] leading-[28px] whitespace-nowrap ${logo}`} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
            Modern Music Catalog
          </span>
        </div>
        <div className="flex items-center gap-[3.5px]">
          {(["artists", "albums"] as const).map((tab) => (
            <button key={tab} onClick={() => onTabChange(tab)}
              className={`px-[10.5px] py-[5.25px] rounded-[10.5px] text-[12.25px] font-medium capitalize transition-colors ${activeTab === tab ? activeTab_ : inactiveTab}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <button onClick={toggle} className={`flex items-center gap-[7px] px-[11.3px] py-[6.05px] rounded-[10.5px] border text-[12.25px] font-medium transition-colors ${toggleBtn}`}>
          {isDark ? <Sun className="w-[14px] h-[14px]" /> : <Moon className="w-[14px] h-[14px]" />}
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}

// ─── Artists View ─────────────────────────────────────────────────────────────
interface ArtistsViewProps {
  artists: Artist[];
  albums: Album[];
  onSelectArtist: (id: string) => void;
  onAddArtist: () => void;
  onEditArtist: (artist: Artist) => void;
  onDeleteArtist: (artist: Artist) => void;
}
function ArtistsView({ artists, albums, onSelectArtist, onAddArtist, onEditArtist, onDeleteArtist }: ArtistsViewProps) {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Solo" | "Group">("All");
  const [countryFilter, setCountryFilter] = useState("All");
  const [sort, setSort] = useState("name-az");

  const countries = useMemo(() => {
    const codes = [...new Set(artists.map((a) => a.countryCode))].sort((a, b) => (COUNTRY_NAMES[a] || a).localeCompare(COUNTRY_NAMES[b] || b));
    return codes;
  }, [artists]);

  const filtered = useMemo(() => {
    let arr = artists.filter((a) => {
      const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "All" || a.type === typeFilter;
      const matchCountry = countryFilter === "All" || a.countryCode === countryFilter;
      return matchSearch && matchType && matchCountry;
    });
    const albumCountFor = (id: string) => albums.filter((al) => al.artistId === id).length;
    if (sort === "name-az") arr = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "name-za") arr = [...arr].sort((a, b) => b.name.localeCompare(a.name));
    else if (sort === "most-albums") arr = [...arr].sort((a, b) => albumCountFor(b.id) - albumCountFor(a.id));
    else if (sort === "oldest") arr = [...arr].sort((a, b) => a.since - b.since);
    else if (sort === "newest") arr = [...arr].sort((a, b) => b.since - a.since);
    return arr;
  }, [artists, albums, search, typeFilter, countryFilter, sort]);

  const albumCountFor = (id: string) => albums.filter((al) => al.artistId === id).length;

  const bg = isDark ? "bg-[#09090f]" : "bg-[#faf8f4]";
  const card = isDark ? "bg-[#13131c] border-[rgba(255,255,255,0.06)] hover:border-[rgba(168,85,247,0.3)]" : "bg-white border-[rgba(0,0,0,0.07)] hover:border-[rgba(147,51,234,0.3)]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const muted = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  const divider = isDark ? "border-[rgba(255,255,255,0.04)]" : "border-[rgba(0,0,0,0.05)]";
  const selCls = `w-full border rounded-[10.5px] px-[10.5px] py-[7px] text-[12.25px] font-medium focus:outline-none transition-colors ${inputCls(isDark)}`;

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-[1120px] mx-auto px-[21px] py-[28px]">
        <div className="flex items-center justify-between mb-[21px]">
          <div>
            <h1 className={`text-[26.25px] leading-[31.5px] ${heading}`} style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700 }}>Artists</h1>
            <p className={`text-[12.25px] font-medium mt-1 ${muted}`}>{filtered.length} of {artists.length} artists</p>
          </div>
          <button onClick={onAddArtist} className="flex items-center gap-[7px] px-[14px] py-[8px] rounded-[10.5px] text-[12.25px] font-medium text-white hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg,rgb(142,81,255) 0%,rgb(246,51,154) 100%)" }}>
            <Plus className="w-[14px] h-[14px]" />
            Add Artist
          </button>
        </div>

        <div className="flex items-center gap-[10.5px] mb-[21px]">
          <div className="relative w-1/3">
            <Search className={`absolute left-[10.5px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] ${muted}`} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search artists..."
              className={`w-full border rounded-[10.5px] pl-[35px] pr-[14px] py-[8px] text-[12.25px] focus:outline-none transition-colors ${inputCls(isDark)}`} />
          </div>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as "All" | "Solo" | "Group")} className={`${selCls} flex-1`}>
            <option value="All">All Types</option>
            <option value="Solo">Solo</option>
            <option value="Group">Group</option>
          </select>
          <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)} className={`${selCls} flex-1`}>
            <option value="All">All Countries</option>
            {countries.map((c) => <option key={c} value={c}>{COUNTRY_NAMES[c] || c}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={`${selCls} flex-1`}>
            <option value="name-az">Name A→Z</option>
            <option value="name-za">Name Z→A</option>
            <option value="most-albums">Most Albums</option>
            <option value="oldest">Oldest Active</option>
            <option value="newest">Newest Active</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-[14px]">
          {filtered.map((artist) => {
            const count = albumCountFor(artist.id);
            const artistAlbums = albums.filter((al) => al.artistId === artist.id);
            const sold = sumSold(artistAlbums);
            return (
              <div key={artist.id} className={`relative border rounded-[14px] p-[17.5px] group cursor-pointer transition-colors ${card}`}
                onClick={() => onSelectArtist(artist.id)}>
                <div className="absolute top-[10px] right-[10px] flex gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); onEditArtist(artist); }}
                    className={`p-[5px] rounded-[8px] ${isDark ? "bg-[rgba(255,255,255,0.06)] text-[#7070a0] hover:text-[#a855f7] hover:bg-[rgba(168,85,247,0.15)]" : "bg-[rgba(0,0,0,0.04)] text-[#78716c] hover:text-[#9333ea] hover:bg-[rgba(147,51,234,0.1)]"}`}>
                    <Pencil className="w-[13px] h-[13px]" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onDeleteArtist(artist); }}
                    className={`p-[5px] rounded-[8px] ${isDark ? "bg-[rgba(255,255,255,0.06)] text-[#7070a0] hover:text-red-400 hover:bg-[rgba(239,68,68,0.15)]" : "bg-[rgba(0,0,0,0.04)] text-[#78716c] hover:text-red-500 hover:bg-[rgba(239,68,68,0.1)]"}`}>
                    <Trash2 className="w-[13px] h-[13px]" />
                  </button>
                </div>
                <div className="flex items-start gap-[14px]">
                  <div className="rounded-full size-[56px] shrink-0 overflow-hidden" style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
                    <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 pr-[24px]">
                    <p className={`text-[14px] font-semibold leading-[1.3] truncate ${heading}`}>{artist.name}</p>
                    <div className="flex items-center gap-[5.25px] mt-[5.25px]">
                      <div title={COUNTRY_NAMES[artist.countryCode] || artist.countryCode} className="rounded-[3.5px] overflow-hidden w-[24px] h-[16px] shrink-0 border border-[rgba(128,128,128,0.2)] cursor-default">
                        <img src={artist.flag} alt={artist.countryCode} className="w-full h-full object-cover" />
                      </div>
                      <span className={`text-[10.5px] font-semibold tracking-[0.525px] ${muted}`}>{artist.countryCode}</span>
                    </div>
                    <div className="mt-[7px]"><TypeBadge type={artist.type} groupSize={artist.groupSize} isDark={isDark} artistName={artist.name} /></div>
                  </div>
                </div>
                <div className={`flex items-center justify-between mt-[14px] pt-[10.5px] border-t ${divider}`}>
                  <span className={`text-[10.5px] font-medium ${muted}`}>Since {artist.since}</span>
                  <span className={`text-[10.5px] font-medium flex items-center gap-[4px] ${muted}`}>
                    <Music className="w-[11px] h-[11px]" />
                    {count} {count === 1 ? "album" : "albums"} · {sold} sold
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Albums View ──────────────────────────────────────────────────────────────
interface AlbumsViewProps {
  albums: Album[];
  onSelectAlbum: (id: string) => void;
  onEditAlbum: (album: Album) => void;
  onDeleteAlbum: (album: Album) => void;
}
function AlbumsView({ albums, onSelectAlbum, onEditAlbum, onDeleteAlbum }: AlbumsViewProps) {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  const [certFilter, setCertFilter] = useState("All");
  const [streamFilter, setStreamFilter] = useState("All");
  const [sort, setSort] = useState("title-az");

  const filtered = useMemo(() => {
    let arr = albums.filter((al) => {
      const q = search.toLowerCase();
      const matchSearch = !search || al.title.toLowerCase().includes(q) || al.artistName.toLowerCase().includes(q);
      const matchCert = certFilter === "All" || (certFilter === "None" ? !al.cert : al.cert === certFilter);
      const matchStream = streamFilter === "All" || al.streaming.includes(streamFilter as StreamingPlatform);
      return matchSearch && matchCert && matchStream;
    });
    if (sort === "title-az") arr = [...arr].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "year-new") arr = [...arr].sort((a, b) => b.year - a.year);
    else if (sort === "year-old") arr = [...arr].sort((a, b) => a.year - b.year);
    return arr;
  }, [albums, search, certFilter, streamFilter, sort]);

  const bg = isDark ? "bg-[#09090f]" : "bg-[#faf8f4]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const muted = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  const card = isDark ? "bg-[#13131c] hover:bg-[rgba(255,255,255,0.03)]" : "bg-white hover:bg-[rgba(0,0,0,0.01)]";
  const selCls = `border rounded-[10.5px] px-[10.5px] py-[7px] text-[12.25px] font-medium focus:outline-none transition-colors ${inputCls(isDark)}`;

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-[1120px] mx-auto px-[21px] py-[28px]">
        <div className="flex items-center justify-between mb-[21px] gap-[14px] flex-wrap">
          <div>
            <h1 className={`text-[26.25px] leading-[31.5px] ${heading}`} style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700 }}>Albums</h1>
            <p className={`text-[12.25px] font-medium mt-1 ${muted}`}>{filtered.length} of {albums.length} albums</p>
          </div>
          <div className="flex items-center gap-[10.5px] flex-wrap">
            <div className="relative">
              <Search className={`absolute left-[10.5px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] ${muted}`} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search albums..."
                className={`border rounded-[10.5px] pl-[35px] pr-[14px] py-[7px] text-[12.25px] w-[220px] focus:outline-none transition-colors ${inputCls(isDark)}`} />
            </div>
            <select value={certFilter} onChange={(e) => setCertFilter(e.target.value)} className={selCls}>
              <option value="All">All Certifications</option>
              <option value="None">Uncertified</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
            </select>
            <select value={streamFilter} onChange={(e) => setStreamFilter(e.target.value)} className={selCls}>
              <option value="All">All Platforms</option>
              <option value="SP">Spotify</option>
              <option value="AM">Apple Music</option>
              <option value="AZ">Amazon Music</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className={selCls}>
              <option value="title-az">Title A→Z</option>
              <option value="year-new">Year: Newest</option>
              <option value="year-old">Year: Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[14px]">
          {filtered.map((album) => (
            <div key={album.id} className={`relative rounded-[14px] overflow-hidden transition-colors group ${card} ${isDark ? "border border-[rgba(255,255,255,0.05)]" : "border border-[rgba(0,0,0,0.06)]"}`}>
              <button onClick={() => onSelectAlbum(album.id)} className="w-full text-left">
                <div className="aspect-square overflow-hidden">
                  <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-[12px]">
                  <p className={`text-[12.25px] font-semibold leading-[1.3] truncate ${isDark ? "text-[#f2f2f8]" : "text-[#1c1917]"}`}>{album.title}</p>
                  <p className={`text-[10.5px] font-medium mt-[2px] truncate ${muted}`}>{album.artistName}</p>
                  <div className="flex items-center gap-[5px] mt-[7px] flex-wrap">
                    <span className={`text-[10px] ${muted}`}>{album.year}</span>
                    {album.cert && <CertBadge cert={album.cert} isDark={isDark} />}
                  </div>
                  <div className="flex gap-[4px] mt-[5px] flex-wrap">
                    {album.streaming.map((s) => <StreamingBadge key={s} platform={s} />)}
                  </div>
                </div>
              </button>
              <div className="absolute top-[8px] right-[8px] flex gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button onClick={(e) => { e.stopPropagation(); onEditAlbum(album); }}
                  className={`p-[5px] rounded-[8px] ${isDark ? "bg-[rgba(9,9,15,0.7)] text-[#a8a8c0] hover:text-[#a855f7] hover:bg-[rgba(168,85,247,0.2)]" : "bg-[rgba(250,248,244,0.85)] text-[#78716c] hover:text-[#9333ea] hover:bg-[rgba(147,51,234,0.1)]"}`}>
                  <Pencil className="w-[13px] h-[13px]" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteAlbum(album); }}
                  className={`p-[5px] rounded-[8px] ${isDark ? "bg-[rgba(9,9,15,0.7)] text-[#a8a8c0] hover:text-red-400 hover:bg-[rgba(239,68,68,0.2)]" : "bg-[rgba(250,248,244,0.85)] text-[#78716c] hover:text-red-500 hover:bg-[rgba(239,68,68,0.1)]"}`}>
                  <Trash2 className="w-[13px] h-[13px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Artist Detail View ───────────────────────────────────────────────────────
interface ArtistDetailViewProps {
  artist: Artist;
  albums: Album[];
  onBack: () => void;
  onSelectAlbum: (id: string) => void;
  onAddAlbum: () => void;
  onEditAlbum: (album: Album) => void;
  onDeleteAlbum: (album: Album) => void;
  onEditArtist: () => void;
  onDeleteArtist: () => void;
}
function ArtistDetailView({ artist, albums, onBack, onSelectAlbum, onAddAlbum, onEditAlbum, onDeleteAlbum, onEditArtist, onDeleteArtist }: ArtistDetailViewProps) {
  const { isDark } = useTheme();
  const [albumsOpen, setAlbumsOpen] = useState(true);
  const artistAlbums = albums.filter((a) => a.artistId === artist.id);

  const bg = isDark ? "bg-[#09090f]" : "bg-[#faf8f4]";
  const card = isDark ? "bg-[#13131c] border-[rgba(255,255,255,0.08)]" : "bg-white border-[rgba(0,0,0,0.08)]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const muted = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  const divider = isDark ? "border-[rgba(255,255,255,0.04)]" : "border-[rgba(0,0,0,0.05)]";
  const btnGhost = isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0] hover:text-[#f2f2f8] hover:border-[rgba(255,255,255,0.16)]" : "border-[rgba(0,0,0,0.1)] text-[#78716c] hover:text-[#1c1917]";

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-[896px] mx-auto px-[21px] py-[21px]">
        <button onClick={onBack} className={`flex items-center gap-[7px] text-[12.25px] font-medium hover:opacity-80 transition-opacity mb-[21px] ${muted}`}>
          <ArrowLeft className="w-[15px] h-[15px]" />
          Back to Artists
        </button>

        <div className={`border rounded-[14px] p-[21.8px] ${card}`}>
          <div className="flex items-start gap-[17.5px]">
            <div className="rounded-full size-[168px] shrink-0 overflow-hidden" style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
              <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className={`text-[26.25px] leading-[31.5px] ${heading}`} style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700 }}>{artist.name}</h1>
              <div className="flex items-center gap-[10.5px] mt-[7px] flex-wrap">
                <div className="flex items-center gap-[5.25px]">
                  <div className="rounded-[3.5px] overflow-hidden w-[35px] h-[21px] border border-[rgba(128,128,128,0.2)]">
                    <img src={artist.flag} alt={artist.countryCode} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-[10.5px] font-semibold tracking-[0.525px] ${muted}`}>{COUNTRY_NAMES[artist.countryCode] || artist.countryCode}</span>
                </div>
                <TypeBadge type={artist.type} groupSize={artist.groupSize} isDark={isDark} artistName={artist.name} detailMode />
                <span className={`inline-flex items-center px-[7px] py-[1.75px] rounded-full text-[10.5px] font-normal ${isDark ? "bg-[#1e1e2e] text-[#7070a0]" : "bg-[#f0ebe2] text-[#78716c]"}`}>
                  Active since {artist.since}
                </span>
                <span className={`inline-flex items-center gap-[3.5px] px-[7px] py-[1.75px] rounded-full text-[10.5px] font-normal ${isDark ? "bg-[#1e1e2e] text-[#7070a0]" : "bg-[#f0ebe2] text-[#78716c]"}`}>
                  <Music className="w-[11px] h-[11px]" /> {artistAlbums.length} {artistAlbums.length === 1 ? "album" : "albums"}
                </span>
                <span className={`inline-flex items-center px-[7px] py-[1.75px] rounded-full text-[10.5px] font-normal ${isDark ? "bg-[#1e1e2e] text-[#7070a0]" : "bg-[#f0ebe2] text-[#78716c]"}`}>
                  {sumSold(artistAlbums)} sold
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[7px] shrink-0">
              <button onClick={onEditArtist} className={`flex items-center gap-[5.25px] px-[11.3px] py-[7.8px] rounded-[10.5px] border text-[10.5px] font-medium transition-colors ${btnGhost}`}>
                <Pencil className="w-[12px] h-[12px]" />
                Edit Artist
              </button>
              <button onClick={onDeleteArtist} className="flex items-center gap-[5.25px] px-[11.3px] py-[7.8px] rounded-[10.5px] border border-[rgba(239,68,68,0.3)] text-red-500 text-[10.5px] font-medium hover:bg-[rgba(239,68,68,0.1)] transition-colors">
                <Trash2 className="w-[12px] h-[12px]" />
                Delete Artist
              </button>
            </div>
          </div>
        </div>

        <div className={`border rounded-[14px] mt-[21px] overflow-hidden ${card}`}>
          <div className={`flex items-center justify-between px-[17.5px] py-[14.8px] border-b ${divider}`}>
            <button onClick={() => setAlbumsOpen((v) => !v)} className={`flex items-center gap-[7px] text-[14px] font-semibold leading-[21px] ${heading}`}>
              Albums {albumsOpen ? <ChevronUp className={`w-[16px] h-[16px] ${muted}`} /> : <ChevronDown className={`w-[16px] h-[16px] ${muted}`} />}
            </button>
            <button onClick={onAddAlbum} className={`flex items-center gap-[5.25px] px-[10.5px] py-[5.25px] rounded-[10.5px] text-[10.5px] font-medium transition-colors ${isDark ? "bg-[rgba(168,85,247,0.2)] text-[#a855f7] hover:bg-[rgba(168,85,247,0.3)]" : "bg-[rgba(147,51,234,0.12)] text-[#9333ea] hover:bg-[rgba(147,51,234,0.2)]"}`}>
              <Plus className="w-[12px] h-[12px]" />
              Add Album
            </button>
          </div>

          {albumsOpen && artistAlbums.map((album, i) => (
            <div key={album.id} className={`flex items-center gap-[14px] px-[17.5px] py-[14px] ${i < artistAlbums.length - 1 ? `border-b ${divider}` : ""}`}>
              <button onClick={() => onSelectAlbum(album.id)} className="flex items-center gap-[14px] flex-1 min-w-0 text-left hover:opacity-80 transition-opacity">
                <div className="rounded-[10.5px] size-[56px] shrink-0 overflow-hidden" style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
                  <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[12.25px] font-semibold leading-[17.5px] truncate ${heading}`}>{album.title}</p>
                  <p className={`text-[10.5px] font-medium mt-[1.75px] ${muted}`}>{album.label} · {album.year}</p>
                  <div className="flex items-center gap-[7px] mt-[5.25px] flex-wrap">
                    <span className={`text-[10.5px] font-medium ${muted}`}>{album.sold} sold</span>
                    <span className={`text-[10.5px] ${muted}`}>·</span>
                    <span className={`text-[10.5px] font-medium ${muted}`}>{album.tracks} tracks</span>
                    {album.cert && <CertBadge cert={album.cert} isDark={isDark} />}
                    <div className="flex gap-[5.25px]">{album.streaming.map((s) => <StreamingBadge key={s} platform={s} />)}</div>
                  </div>
                </div>
              </button>
              <div className="flex items-center gap-[5.25px] shrink-0">
                <button onClick={(e) => { e.stopPropagation(); onEditAlbum(album); }} className={`p-[6.05px] rounded-[10.5px] border transition-colors ${isDark ? "border-[rgba(255,255,255,0.04)] text-[#7070a0] hover:text-[#a855f7] hover:border-[rgba(168,85,247,0.3)]" : "border-[rgba(0,0,0,0.06)] text-[#78716c] hover:text-[#9333ea]"}`}>
                  <Pencil className="w-[12px] h-[12px]" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteAlbum(album); }} className={`p-[6.05px] rounded-[10.5px] border transition-colors ${isDark ? "border-[rgba(255,255,255,0.04)] text-[#7070a0] hover:text-red-400" : "border-[rgba(0,0,0,0.06)] text-[#78716c] hover:text-red-500"}`}>
                  <Trash2 className="w-[12px] h-[12px]" />
                </button>
              </div>
            </div>
          ))}

          {albumsOpen && artistAlbums.length === 0 && (
            <div className={`py-[35px] text-center text-[12.25px] ${muted}`}>No albums yet. Add one to get started.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Album Detail View ────────────────────────────────────────────────────────
interface AlbumDetailViewProps {
  album: Album;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onGoToArtist: () => void;
}
function AlbumDetailView({ album, onBack, onEdit, onDelete, onGoToArtist }: AlbumDetailViewProps) {
  const { isDark } = useTheme();
  const bg = isDark ? "bg-[#09090f]" : "bg-[#faf8f4]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const muted = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  const metaCard = isDark ? "bg-[rgba(19,19,28,0.7)] border-[rgba(255,255,255,0.04)]" : "bg-[rgba(255,255,255,0.7)] border-[rgba(0,0,0,0.05)]";
  const accent = isDark ? "text-[#a855f7]" : "text-[#9333ea]";

  return (
    <div className={`relative min-h-screen ${bg}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src={album.cover} alt="" className="absolute w-full h-full object-cover opacity-20 blur-[70px] scale-110" />
        <div className={`absolute inset-0 ${isDark ? "bg-[rgba(9,9,15,0.7)]" : "bg-[rgba(250,248,244,0.75)]"}`} />
      </div>
      <div className="relative max-w-[784px] mx-auto px-[21px] pt-[21px] pb-[42px]">
        <button onClick={onBack} className={`flex items-center gap-[7px] text-[12.25px] font-medium hover:opacity-80 transition-opacity ${muted}`}>
          <ArrowLeft className="w-[15px] h-[15px]" />
          Back
        </button>
        <div className="flex items-start gap-[28px] mt-[28px]">
          <div className="rounded-[14px] size-[224px] shrink-0 overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
            <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[15.75px] font-semibold tracking-[1.575px] uppercase ${accent}`}>Album</p>
            <h1 className={`text-[31.5px] leading-[39.375px] mt-[7px] ${heading}`} style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700 }}>{album.title}</h1>
            <button onClick={onGoToArtist} className="flex items-center gap-[7px] mt-[10.5px] group/artist hover:opacity-80 transition-opacity">
              <div className="rounded-full size-[42px] shrink-0 overflow-hidden" style={{ background: isDark ? "#1a1a26" : "#f0ebe2" }}>
                <img src={album.artistPhoto} alt={album.artistName} className="w-full h-full object-cover" />
              </div>
              <span className={`text-[15.75px] font-medium group-hover/artist:underline underline-offset-2 ${heading}`}>{album.artistName}</span>
            </button>
            <div className="grid grid-cols-2 gap-[10.5px] mt-[17.5px]">
              {[
                { label: "Record Label", value: album.label },
                { label: "Release Year", value: String(album.year) },
                { label: "Albums Sold", value: album.sold },
                { label: "Tracks / Singles", value: `${album.tracks} / ${album.singles}` },
              ].map(({ label, value }) => (
                <div key={label} className={`border rounded-[14.5px] p-[11.3px] ${metaCard}`}>
                  <p className={`text-[10.5px] font-normal leading-[14px] ${muted}`}>{label}</p>
                  <p className={`text-[12.25px] font-medium leading-[17.5px] mt-[3.5px] ${heading}`}>{value}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[10.5px] mt-[17.5px]">
              {album.cert && <CertBadge cert={album.cert} isDark={isDark} />}
              <div className="flex gap-[5.25px]">{album.streaming.map((s) => <StreamingBadge key={s} platform={s} />)}</div>
            </div>
            <div className="flex items-center gap-[10.5px] mt-[21px]">
              <button onClick={onEdit} className={`flex items-center gap-[7px] px-[14px] py-[7px] rounded-[14.5px] text-[12.25px] font-medium transition-colors ${isDark ? "bg-[#1e1e2e] text-[#c4c4d4] hover:bg-[#252535]" : "bg-[#f0ebe2] text-[#44403c] hover:bg-[#e5dfd6]"}`}>
                <Pencil className="w-[14px] h-[14px]" />
                Edit Album
              </button>
              <button onClick={onDelete} className="flex items-center gap-[7px] px-[14px] py-[7px] bg-[rgba(239,68,68,0.15)] rounded-[14.5px] text-red-500 text-[12.25px] font-medium hover:bg-[rgba(239,68,68,0.25)] transition-colors">
                <Trash2 className="w-[14px] h-[14px]" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Add Artist Modal ─────────────────────────────────────────────────────────
interface AddArtistModalProps { onClose: () => void; onAdd: (artist: Artist) => void; }
function AddArtistModal({ onClose, onAdd }: AddArtistModalProps) {
  const { isDark } = useTheme();
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [type, setType] = useState<ArtistType>("Solo");
  const [groupSize, setGroupSize] = useState("4");
  const [since, setSince] = useState(String(new Date().getFullYear()));

  const handleAdd = () => {
    if (!name.trim() || !since.trim()) return;
    onAdd({
      id: name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      name: name.trim(),
      photo: imgZuriNakamura,
      flag: FLAG_MAP[countryCode] || imgUnitedStates,
      countryCode,
      type,
      groupSize: type === "Group" ? parseInt(groupSize) || undefined : undefined,
      since: parseInt(since) || new Date().getFullYear(),
    });
    onClose();
  };

  return <ArtistFormModal title="Add Artist" isDark={isDark} name={name} setName={setName} countryCode={countryCode} setCountryCode={setCountryCode} type={type} setType={setType} groupSize={groupSize} setGroupSize={setGroupSize} since={since} setSince={setSince} onClose={onClose} onSubmit={handleAdd} submitLabel="Add Artist" />;
}

// ─── Edit Artist Modal ────────────────────────────────────────────────────────
interface EditArtistModalProps { artist: Artist; onClose: () => void; onSave: (updated: Artist) => void; }
function EditArtistModal({ artist, onClose, onSave }: EditArtistModalProps) {
  const { isDark } = useTheme();
  const [name, setName] = useState(artist.name);
  const [countryCode, setCountryCode] = useState(artist.countryCode);
  const [type, setType] = useState<ArtistType>(artist.type);
  const [groupSize, setGroupSize] = useState(String(artist.groupSize || 4));
  const [since, setSince] = useState(String(artist.since));

  const handleSave = () => {
    if (!name.trim() || !since.trim()) return;
    onSave({ ...artist, name: name.trim(), flag: FLAG_MAP[countryCode] || artist.flag, countryCode, type, groupSize: type === "Group" ? parseInt(groupSize) || undefined : undefined, since: parseInt(since) || artist.since });
    onClose();
  };

  return <ArtistFormModal title="Edit Artist" isDark={isDark} name={name} setName={setName} countryCode={countryCode} setCountryCode={setCountryCode} type={type} setType={setType} groupSize={groupSize} setGroupSize={setGroupSize} since={since} setSince={setSince} onClose={onClose} onSubmit={handleSave} submitLabel="Save Changes" />;
}

// Shared Artist form component
interface ArtistFormModalProps {
  title: string; isDark: boolean;
  name: string; setName: (v: string) => void;
  countryCode: string; setCountryCode: (v: string) => void;
  type: ArtistType; setType: (v: ArtistType) => void;
  groupSize: string; setGroupSize: (v: string) => void;
  since: string; setSince: (v: string) => void;
  onClose: () => void; onSubmit: () => void; submitLabel: string;
}
function ArtistFormModal({ title, isDark, name, setName, countryCode, setCountryCode, type, setType, groupSize, setGroupSize, since, setSince, onClose, onSubmit, submitLabel }: ArtistFormModalProps) {
  const card = isDark ? "bg-[#13131c] border-[rgba(255,255,255,0.08)]" : "bg-white border-[rgba(0,0,0,0.1)]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const labelCls = `block text-[12.25px] font-medium mb-[5.25px] ${heading}`;
  const inp = `w-full border rounded-[7px] px-[10.5px] py-[8.75px] text-[12.25px] focus:outline-none transition-colors ${inputCls(isDark)}`;
  const previewFlag = FLAG_MAP[countryCode];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" onClick={onClose} />
      <div className={`relative border rounded-[14px] w-[420px] p-[21px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.8)] ${card}`}>
        <div className="flex items-center justify-between mb-[17.5px]">
          <h2 className={`text-[17.5px] font-semibold ${heading}`}>{title}</h2>
          <button onClick={onClose} className={`${isDark ? "text-[#7070a0] hover:text-[#f2f2f8]" : "text-[#78716c] hover:text-[#1c1917]"} transition-colors`}><X className="w-[17.5px] h-[17.5px]" /></button>
        </div>
        <div className="space-y-[14px]">
          <div>
            <label className={labelCls}>Artist Name <span className={isDark ? "text-[#a855f7]" : "text-[#9333ea]"}>*</span></label>
            <input value={name} onChange={(e) => setName(e.target.value)} className={inp} />
          </div>
          <div>
            <label className={labelCls}>Country</label>
            <div className="flex items-center gap-[10px]">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className={`${inp} flex-1`}>
                {Object.keys(COUNTRY_NAMES).sort((a, b) => COUNTRY_NAMES[a].localeCompare(COUNTRY_NAMES[b])).map((c) => (
                  <option key={c} value={c}>{COUNTRY_NAMES[c]}</option>
                ))}
              </select>
              {previewFlag && (
                <div className="rounded-[4px] overflow-hidden w-[36px] h-[24px] shrink-0 border border-[rgba(128,128,128,0.2)]">
                  <img src={previewFlag} alt={countryCode} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-[10.5px]">
            <div className="flex-1">
              <label className={labelCls}>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value as ArtistType)} className={inp}>
                <option value="Solo">Solo</option>
                <option value="Group">Group</option>
              </select>
            </div>
            {type === "Group" && (
              <div className="w-[90px]">
                <label className={labelCls}>Members</label>
                <input value={groupSize} onChange={(e) => setGroupSize(e.target.value)} className={inp} type="number" min="2" />
              </div>
            )}
            <div className="w-[100px]">
              <label className={labelCls}>Active Since <span className={isDark ? "text-[#a855f7]" : "text-[#9333ea]"}>*</span></label>
              <input value={since} onChange={(e) => setSince(e.target.value)} className={inp} />
            </div>
          </div>
        </div>
        <div className="flex gap-[10.5px] mt-[21px]">
          <button onClick={onClose} className={`flex-1 py-[10.5px] rounded-[10.5px] border text-[12.25px] font-medium transition-colors ${isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0] hover:text-[#f2f2f8]" : "border-[rgba(0,0,0,0.1)] text-[#78716c] hover:text-[#1c1917]"}`}>Cancel</button>
          <button onClick={onSubmit} disabled={!name.trim() || !since.trim()} className="flex-1 py-[10.5px] rounded-[10.5px] text-white text-[12.25px] font-medium disabled:opacity-40 transition-opacity" style={{ background: "linear-gradient(135deg,rgb(142,81,255) 0%,rgb(246,51,154) 100%)" }}>
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Add Album Modal ──────────────────────────────────────────────────────────
interface AddAlbumModalProps {
  artistId: string; artistName: string; artistPhoto: string;
  onClose: () => void; onAdd: (album: Album) => void;
}
function AddAlbumModal({ artistId, artistName, artistPhoto, onClose, onAdd }: AddAlbumModalProps) {
  const { isDark } = useTheme();
  const blank: Omit<Album, "id" | "artistId" | "artistName" | "artistPhoto"> = {
    title: "", label: "", year: new Date().getFullYear(), sold: "", tracks: 10, singles: 2, cert: null, streaming: ["SP"], cover: imgDebut,
  };
  const handleAdd = (data: typeof blank) => {
    onAdd({ id: data.title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(), artistId, artistName, artistPhoto, ...data });
    onClose();
  };
  return <AlbumFormModal title="Add Album" isDark={isDark} initial={blank} artistName={artistName} onClose={onClose} onSubmit={handleAdd} submitLabel="Add Album" />;
}

// ─── Edit Album Modal ─────────────────────────────────────────────────────────
interface EditAlbumModalProps {
  album: Album; onClose: () => void; onSave: (updated: Album) => void;
}
function EditAlbumModal({ album, onClose, onSave }: EditAlbumModalProps) {
  const { isDark } = useTheme();
  const initial = { title: album.title, label: album.label, year: album.year, sold: album.sold, tracks: album.tracks, singles: album.singles, cert: album.cert, streaming: album.streaming, cover: album.cover };
  const handleSave = (data: typeof initial) => {
    onSave({ ...album, ...data });
    onClose();
  };
  return <AlbumFormModal title="Edit Album" isDark={isDark} initial={initial} artistName={album.artistName} onClose={onClose} onSubmit={handleSave} submitLabel="Save Changes" />;
}

// Shared Album form
type AlbumFormData = { title: string; label: string; year: number; sold: string; tracks: number; singles: number; cert: Cert; streaming: StreamingPlatform[]; cover: string; };
interface AlbumFormModalProps {
  title: string; isDark: boolean; initial: AlbumFormData; artistName: string;
  onClose: () => void; onSubmit: (data: AlbumFormData) => void; submitLabel: string;
}
function AlbumFormModal({ title, isDark, initial, artistName, onClose, onSubmit, submitLabel }: AlbumFormModalProps) {
  const [f, setF] = useState(initial);
  const [coverUrl, setCoverUrl] = useState("");
  const [coverPreviewOk, setCoverPreviewOk] = useState(false);
  const card = isDark ? "bg-[#13131c] border-[rgba(255,255,255,0.08)]" : "bg-white border-[rgba(0,0,0,0.1)]";
  const heading = isDark ? "text-[#f2f2f8]" : "text-[#1c1917]";
  const muted = isDark ? "text-[#7070a0]" : "text-[#78716c]";
  const labelCls = `block text-[12.25px] font-medium mb-[5.25px] ${heading}`;
  const inp = `w-full border rounded-[7px] px-[10.5px] py-[8.75px] text-[12.25px] focus:outline-none transition-colors ${inputCls(isDark)}`;
  const accent = isDark ? "#a855f7" : "#9333ea";

  const toggleStream = (p: StreamingPlatform) => setF((prev) => ({ ...prev, streaming: prev.streaming.includes(p) ? prev.streaming.filter((s) => s !== p) : [...prev.streaming, p] }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-[21px]">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" onClick={onClose} />
      <div className={`relative border rounded-[14px] w-[460px] p-[21px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.8)] ${card}`}>
        <div className="flex items-center justify-between mb-[14px]">
          <h2 className={`text-[17.5px] font-semibold ${heading}`}>{title}</h2>
          <button onClick={onClose} className={`${muted} hover:${isDark ? "text-[#f2f2f8]" : "text-[#1c1917]"} transition-colors`}><X className="w-[17.5px] h-[17.5px]" /></button>
        </div>
        <p className={`text-[12.25px] mb-[14px] ${muted}`}>For <span className={heading + " font-medium"}>{artistName}</span></p>
        <div className="space-y-[12px]">
          <div>
            <label className={labelCls}>Album Title <span style={{ color: accent }}>*</span></label>
            <input value={f.title} onChange={(e) => setF((p) => ({ ...p, title: e.target.value }))} className={inp} />
          </div>
          <div>
            <label className={labelCls}>Cover Image URL</label>
            <input value={coverUrl} onChange={(e) => { setCoverUrl(e.target.value); setCoverPreviewOk(false); }} placeholder="https://images.unsplash.com/..." className={inp} />
            {coverUrl && (
              <div className="mt-[7px] w-[56px] h-[56px] rounded-[7px] overflow-hidden border border-[rgba(128,128,128,0.2)]">
                <img src={coverUrl} alt="" className="w-full h-full object-cover" onLoad={() => setCoverPreviewOk(true)} onError={() => setCoverPreviewOk(false)} style={{ display: coverPreviewOk ? "block" : "none" }} />
              </div>
            )}
          </div>
          <div className="flex gap-[10.5px]">
            <div className="flex-1">
              <label className={labelCls}>Record Label</label>
              <input value={f.label} onChange={(e) => setF((p) => ({ ...p, label: e.target.value }))} className={inp} />
            </div>
            <div className="w-[90px]">
              <label className={labelCls}>Year <span style={{ color: accent }}>*</span></label>
              <input value={f.year} onChange={(e) => setF((p) => ({ ...p, year: parseInt(e.target.value) || p.year }))} className={inp} />
            </div>
          </div>
          <div className="flex gap-[10.5px]">
            <div className="flex-1">
              <label className={labelCls}>Tracks</label>
              <input value={f.tracks} type="number" onChange={(e) => setF((p) => ({ ...p, tracks: parseInt(e.target.value) || 0 }))} className={inp} />
            </div>
            <div className="flex-1">
              <label className={labelCls}>Singles</label>
              <input value={f.singles} type="number" onChange={(e) => setF((p) => ({ ...p, singles: parseInt(e.target.value) || 0 }))} className={inp} />
            </div>
            <div className="flex-1">
              <label className={labelCls}>Albums Sold</label>
              <input value={f.sold} onChange={(e) => setF((p) => ({ ...p, sold: e.target.value }))} placeholder="e.g. 250K" className={inp} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Certification</label>
            <select value={f.cert || "None"} onChange={(e) => setF((p) => ({ ...p, cert: e.target.value === "None" ? null : (e.target.value as Cert) }))} className={inp}>
              <option value="None">None</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Streaming Platforms</label>
            <div className="flex gap-[7px]">
              {(["SP", "AM", "AZ"] as StreamingPlatform[]).map((p) => {
                const active = f.streaming.includes(p);
                const colors: Record<string, string> = { SP: active ? "bg-[rgba(29,185,84,0.2)] text-[#1db954] border-[rgba(29,185,84,0.3)]" : "", AM: active ? "bg-[rgba(252,60,68,0.2)] text-[#fc3c44] border-[rgba(252,60,68,0.3)]" : "", AZ: active ? "bg-[rgba(0,168,225,0.2)] text-[#00a8e1] border-[rgba(0,168,225,0.3)]" : "" };
                return (
                  <button key={p} onClick={() => toggleStream(p)} className={`px-[14px] py-[7px] rounded-[7px] text-[12.25px] font-bold border transition-colors ${active ? colors[p] : (isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0]" : "border-[rgba(0,0,0,0.1)] text-[#78716c]")}`}>
                    {p === "SP" ? "Spotify" : p === "AM" ? "Apple Music" : "Amazon"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-[10.5px] mt-[21px]">
          <button onClick={onClose} className={`flex-1 py-[10.5px] rounded-[10.5px] border text-[12.25px] font-medium transition-colors ${isDark ? "border-[rgba(255,255,255,0.08)] text-[#7070a0] hover:text-[#f2f2f8]" : "border-[rgba(0,0,0,0.1)] text-[#78716c] hover:text-[#1c1917]"}`}>Cancel</button>
          <button onClick={() => onSubmit(f)} disabled={!f.title.trim()} className="flex-1 py-[10.5px] rounded-[10.5px] text-white text-[12.25px] font-medium disabled:opacity-40 transition-opacity" style={{ background: "linear-gradient(135deg,rgb(142,81,255) 0%,rgb(246,51,154) 100%)" }}>
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
type View = "artists" | "albums" | "artist-detail" | "album-detail";
type ModalType = "add-artist" | "edit-artist" | "add-album" | "edit-album" | null;
interface PendingDelete { type: "artist" | "album"; id: string; }

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try { return localStorage.getItem("mmc-theme") !== "light"; } catch { return true; }
  });
  const toggleTheme = () => setIsDark((v) => { const next = !v; try { localStorage.setItem("mmc-theme", next ? "dark" : "light"); } catch {} return next; });

  const [view, setView] = useState<View>("artists");
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalType>(null);
  const [pendingDelete, setPendingDelete] = useState<PendingDelete | null>(null);
  const [artists, setArtists] = useState<Artist[]>(INITIAL_ARTISTS);
  const [albums, setAlbums] = useState<Album[]>(INITIAL_ALBUMS);

  const navTab: "artists" | "albums" = (view === "albums" || (view === "album-detail" && !selectedArtistId)) ? "albums" : "artists";

  const handleTabChange = (tab: "artists" | "albums") => {
    setView(tab);
    setSelectedArtistId(null);
    setSelectedAlbumId(null);
    setModal(null);
    setPendingDelete(null);
  };

  const selectedArtist = artists.find((a) => a.id === selectedArtistId) ?? null;
  const selectedAlbum = albums.find((a) => a.id === selectedAlbumId) ?? null;

  // Handlers
  const handleAddArtist = (artist: Artist) => {
    setArtists((prev) => [...prev, artist]);
    toast.success("Artist added");
  };
  const handleEditArtist = (updated: Artist) => {
    setArtists((prev) => prev.map((a) => a.id === updated.id ? updated : a));
    toast.success("Artist updated");
  };
  const handleConfirmDeleteArtist = () => {
    if (!pendingDelete || pendingDelete.type !== "artist") return;
    const id = pendingDelete.id;
    const artist = artists.find((a) => a.id === id);
    setArtists((prev) => prev.filter((a) => a.id !== id));
    setAlbums((prev) => prev.filter((al) => al.artistId !== id));
    setPendingDelete(null);
    if (view === "artist-detail") { setView("artists"); setSelectedArtistId(null); }
    toast.success(`${artist?.name ?? "Artist"} deleted`);
  };
  const handleAddAlbum = (album: Album) => {
    setAlbums((prev) => [...prev, album]);
    toast.success("Album added");
  };
  const handleEditAlbum = (updated: Album) => {
    setAlbums((prev) => prev.map((a) => a.id === updated.id ? updated : a));
    toast.success("Album updated");
  };
  const handleConfirmDeleteAlbum = () => {
    if (!pendingDelete || pendingDelete.type !== "album") return;
    const id = pendingDelete.id;
    const album = albums.find((a) => a.id === id);
    setAlbums((prev) => prev.filter((a) => a.id !== id));
    setPendingDelete(null);
    if (view === "album-detail") {
      if (selectedArtistId) { setView("artist-detail"); } else { setView("albums"); }
      setSelectedAlbumId(null);
    }
    toast.success(`"${album?.title ?? "Album"}" deleted`);
  };

  const albumCountForArtist = (id: string) => albums.filter((al) => al.artistId === id).length;

  return (
    <ThemeContext.Provider value={{ isDark, toggle: toggleTheme }}>
      <div className={`min-h-screen ${isDark ? "bg-[#09090f]" : "bg-[#faf8f4]"}`}>
        <Toaster position="bottom-right" theme={isDark ? "dark" : "light"} richColors />
        <NavBar activeTab={navTab} onTabChange={handleTabChange} />

        <main>
          {view === "artists" && (
            <ArtistsView
              artists={artists}
              albums={albums}
              onSelectArtist={(id) => { setSelectedArtistId(id); setView("artist-detail"); }}
              onAddArtist={() => setModal("add-artist")}
              onEditArtist={(artist) => { setSelectedArtistId(artist.id); setModal("edit-artist"); }}
              onDeleteArtist={(artist) => setPendingDelete({ type: "artist", id: artist.id })}
            />
          )}
          {view === "albums" && (
            <AlbumsView
              albums={albums}
              onSelectAlbum={(id) => { setSelectedArtistId(null); setSelectedAlbumId(id); setView("album-detail"); }}
              onEditAlbum={(album) => { setSelectedAlbumId(album.id); setModal("edit-album"); }}
              onDeleteAlbum={(album) => setPendingDelete({ type: "album", id: album.id })}
            />
          )}
          {view === "artist-detail" && selectedArtist && (
            <ArtistDetailView
              artist={selectedArtist}
              albums={albums}
              onBack={() => { setView("artists"); setSelectedArtistId(null); }}
              onSelectAlbum={(id) => { setSelectedAlbumId(id); setView("album-detail"); }}
              onAddAlbum={() => setModal("add-album")}
              onEditAlbum={(album) => { setSelectedAlbumId(album.id); setModal("edit-album"); }}
              onDeleteAlbum={(album) => setPendingDelete({ type: "album", id: album.id })}
              onEditArtist={() => setModal("edit-artist")}
              onDeleteArtist={() => setPendingDelete({ type: "artist", id: selectedArtist.id })}
            />
          )}
          {view === "album-detail" && selectedAlbum && (
            <AlbumDetailView
              album={selectedAlbum}
              onBack={() => { if (selectedArtistId) { setView("artist-detail"); } else { setView("albums"); } setSelectedAlbumId(null); }}
              onEdit={() => setModal("edit-album")}
              onDelete={() => setPendingDelete({ type: "album", id: selectedAlbum.id })}
              onGoToArtist={() => { setSelectedArtistId(selectedAlbum.artistId); setView("artist-detail"); setSelectedAlbumId(null); }}
            />
          )}
        </main>

        {/* Modals */}
        {modal === "add-artist" && <AddArtistModal onClose={() => setModal(null)} onAdd={handleAddArtist} />}
        {modal === "edit-artist" && selectedArtist && <EditArtistModal artist={selectedArtist} onClose={() => setModal(null)} onSave={handleEditArtist} />}
        {modal === "add-album" && selectedArtist && (
          <AddAlbumModal artistId={selectedArtist.id} artistName={selectedArtist.name} artistPhoto={selectedArtist.photo} onClose={() => setModal(null)} onAdd={handleAddAlbum} />
        )}
        {modal === "edit-album" && selectedAlbum && <EditAlbumModal album={selectedAlbum} onClose={() => setModal(null)} onSave={handleEditAlbum} />}

        {/* Delete confirmations */}
        {pendingDelete?.type === "artist" && (() => {
          const artist = artists.find((a) => a.id === pendingDelete.id);
          const count = albumCountForArtist(pendingDelete.id);
          return (
            <ConfirmDialog
              title={`Delete ${artist?.name ?? "Artist"}?`}
              body={`This will also permanently delete ${count} ${count === 1 ? "album" : "albums"}. This cannot be undone.`}
              image={artist?.photo}
              imageShape="circle"
              onConfirm={handleConfirmDeleteArtist}
              onCancel={() => setPendingDelete(null)}
              isDark={isDark}
            />
          );
        })()}
        {pendingDelete?.type === "album" && (() => {
          const album = albums.find((a) => a.id === pendingDelete.id);
          return (
            <ConfirmDialog
              title={`Delete "${album?.title ?? "Album"}"?`}
              body="This action cannot be undone."
              image={album?.cover}
              imageShape="square"
              onConfirm={handleConfirmDeleteAlbum}
              onCancel={() => setPendingDelete(null)}
              isDark={isDark}
            />
          );
        })()}
      </div>
    </ThemeContext.Provider>
  );
}
