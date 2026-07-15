import React, { useState, useMemo, useEffect, createContext, useContext } from "react";
import { RouterProvider, useNavigate, useLocation } from "react-router";
import { router } from "./routes";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Toaster, toast } from "sonner";
import { Search, X, ChevronDown, ChevronUp, Plus, Pencil, Trash2, Music, Users, Disc3, ArrowLeft, Sun, Moon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ArtistType = "solo" | "group";
type Certification = "none" | "gold" | "platinum" | "multi-platinum";
type StreamingPlatform = "spotify" | "apple" | "amazon";

interface Artist {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  countryCode: string;
  photoUrl: string;
  type: ArtistType;
  memberCount?: number;
  activeSince: number;
}

interface Album {
  id: string;
  artistId: string;
  title: string;
  coverUrl: string;
  label: string;
  releaseYear: number;
  trackCount: number;
  singleCount: number;
  albumsSold: number;
  certification: Certification;
  streaming: StreamingPlatform[];
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const SEED_ARTISTS: Artist[] = [
  { id: "a1",  name: "Neon Veins",           country: "United States",  countryCode: "us", countryFlag: "🇺🇸", photoUrl: "https://images.unsplash.com/photo-1445375011782-2384686778a0?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 4, activeSince: 2008 },
  { id: "a2",  name: "Mara Soleil",          country: "France",         countryCode: "fr", countryFlag: "🇫🇷", photoUrl: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2014 },
  { id: "a3",  name: "The Drift Collective", country: "United Kingdom", countryCode: "gb", countryFlag: "🇬🇧", photoUrl: "https://images.unsplash.com/photo-1761956339937-81d6f6aaa213?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 5, activeSince: 2005 },
  { id: "a4",  name: "Kai Sundara",          country: "Japan",          countryCode: "jp", countryFlag: "🇯🇵", photoUrl: "https://images.unsplash.com/photo-1619361368200-b2e41e9c3104?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2017 },
  { id: "a5",  name: "Echo Assembly",        country: "Germany",        countryCode: "de", countryFlag: "🇩🇪", photoUrl: "https://images.unsplash.com/photo-1780564645646-ef08aa8a81ad?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 3, activeSince: 2010 },
  { id: "a6",  name: "Lena Voss",            country: "Sweden",         countryCode: "se", countryFlag: "🇸🇪", photoUrl: "https://images.unsplash.com/photo-1731461296152-3b5934ba3267?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2012 },
  { id: "a7",  name: "Static Empire",        country: "Canada",         countryCode: "ca", countryFlag: "🇨🇦", photoUrl: "https://images.unsplash.com/photo-1626608213124-8b2c52e83139?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 6, activeSince: 2003 },
  { id: "a8",  name: "Priya Menon",          country: "India",          countryCode: "in", countryFlag: "🇮🇳", photoUrl: "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2019 },
  { id: "a9",  name: "The Lunar Wolves",     country: "Australia",      countryCode: "au", countryFlag: "🇦🇺", photoUrl: "https://images.unsplash.com/photo-1767000171517-5f0556f13735?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 4, activeSince: 2007 },
  { id: "a10", name: "Rafael Dumont",        country: "Brazil",         countryCode: "br", countryFlag: "🇧🇷", photoUrl: "https://images.unsplash.com/photo-1730148138018-3304deb3d74b?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2011 },
  { id: "a11", name: "Void Signal",          country: "South Korea",    countryCode: "kr", countryFlag: "🇰🇷", photoUrl: "https://images.unsplash.com/photo-1767000295378-3aa6dece5a80?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 7, activeSince: 2016 },
  { id: "a12", name: "Isla Crane",           country: "New Zealand",    countryCode: "nz", countryFlag: "🇳🇿", photoUrl: "https://images.unsplash.com/photo-1730724620532-c3844e38f81a?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2015 },
  { id: "a13", name: "The Amber Circuit",    country: "Netherlands",    countryCode: "nl", countryFlag: "🇳🇱", photoUrl: "https://images.unsplash.com/photo-1780564645665-47ada9704804?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 3, activeSince: 2009 },
  { id: "a14", name: "Soren Holt",           country: "Denmark",        countryCode: "dk", countryFlag: "🇩🇰", photoUrl: "https://images.unsplash.com/photo-1614302092816-3a081c6e7d86?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2013 },
  { id: "a15", name: "Pulsar Twins",         country: "United States",  countryCode: "us", countryFlag: "🇺🇸", photoUrl: "https://images.unsplash.com/photo-1763244737837-fdef959467c4?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 2, activeSince: 2018 },
  { id: "a16", name: "Yara Osei",            country: "Ghana",          countryCode: "gh", countryFlag: "🇬🇭", photoUrl: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2020 },
  { id: "a17", name: "The Iron Shore",       country: "Ireland",        countryCode: "ie", countryFlag: "🇮🇪", photoUrl: "https://images.unsplash.com/photo-1750188179642-a60dd3e24369?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 5, activeSince: 2006 },
  { id: "a18", name: "Dmitri Volkov",        country: "Russia",         countryCode: "ru", countryFlag: "🇷🇺", photoUrl: "https://images.unsplash.com/photo-1730148138168-6f53ddda1f02?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2010 },
  { id: "a19", name: "Crimson Atlas",        country: "Argentina",      countryCode: "ar", countryFlag: "🇦🇷", photoUrl: "https://images.unsplash.com/photo-1634027593002-f0b652051278?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 4, activeSince: 2014 },
  { id: "a20", name: "Nadia Fontaine",       country: "Belgium",        countryCode: "be", countryFlag: "🇧🇪", photoUrl: "https://images.unsplash.com/photo-1615748562188-07be820cff5b?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2016 },
  { id: "a21", name: "The Glass Menagerie",  country: "United Kingdom", countryCode: "gb", countryFlag: "🇬🇧", photoUrl: "https://images.unsplash.com/photo-1777428411863-627ed0d1880f?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 4, activeSince: 2004 },
  { id: "a22", name: "Tomas Reyes",          country: "Mexico",         countryCode: "mx", countryFlag: "🇲🇽", photoUrl: "https://images.unsplash.com/photo-1596807323443-a1528e2cd0ec?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2009 },
  { id: "a23", name: "Orbit Black",          country: "United States",  countryCode: "us", countryFlag: "🇺🇸", photoUrl: "https://images.unsplash.com/photo-1763889167677-5627a7b6182c?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 3, activeSince: 2015 },
  { id: "a24", name: "Hana Mizuki",          country: "Japan",          countryCode: "jp", countryFlag: "🇯🇵", photoUrl: "https://images.unsplash.com/photo-1619361368198-53f950a51dfa?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2018 },
  { id: "a25", name: "The Salt Flats",       country: "Canada",         countryCode: "ca", countryFlag: "🇨🇦", photoUrl: "https://images.unsplash.com/photo-1737305918799-f6d473a42891?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 5, activeSince: 2011 },
  { id: "a26", name: "Elara Vind",           country: "Norway",         countryCode: "no", countryFlag: "🇳🇴", photoUrl: "https://images.unsplash.com/photo-1620653616528-7da9a2005478?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2013 },
  { id: "a27", name: "Deep Current",         country: "South Africa",   countryCode: "za", countryFlag: "🇿🇦", photoUrl: "https://images.unsplash.com/photo-1763889594062-04a75c7cb821?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 6, activeSince: 2008 },
  { id: "a28", name: "Cleo Sterling",        country: "Australia",      countryCode: "au", countryFlag: "🇦🇺", photoUrl: "https://images.unsplash.com/photo-1530189873666-a792be008b5b?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2021 },
  { id: "a29", name: "Fractal Dawn",         country: "Germany",        countryCode: "de", countryFlag: "🇩🇪", photoUrl: "https://images.unsplash.com/photo-1541126274323-dbac58d14741?w=300&h=300&fit=crop&auto=format", type: "group", memberCount: 3, activeSince: 2017 },
  { id: "a30", name: "Zuri Nakamura",        country: "United States",  countryCode: "us", countryFlag: "🇺🇸", photoUrl: "https://images.unsplash.com/photo-1531463368359-151247409561?w=300&h=300&fit=crop&auto=format", type: "solo",  activeSince: 2012 },
];

const SEED_ALBUMS: Album[] = [
  // Neon Veins (a1)
  { id: "al1", artistId: "a1", title: "Voltage Dreams", coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&auto=format", label: "Polar Crest Records", releaseYear: 2009, trackCount: 12, singleCount: 3, albumsSold: 1200000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al2", artistId: "a1", title: "Ultraviolet", coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&auto=format", label: "Polar Crest Records", releaseYear: 2012, trackCount: 10, singleCount: 2, albumsSold: 2800000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al3", artistId: "a1", title: "Ghost Frequencies", coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format", label: "Polar Crest Records", releaseYear: 2016, trackCount: 11, singleCount: 4, albumsSold: 980000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al4", artistId: "a1", title: "Signal Decay", coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop&auto=format", label: "Polar Crest Records", releaseYear: 2020, trackCount: 13, singleCount: 5, albumsSold: 540000, certification: "gold", streaming: ["spotify", "amazon"] },

  // Mara Soleil (a2)
  { id: "al5", artistId: "a2", title: "Première Lumière", coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format", label: "Lumière Sonore", releaseYear: 2015, trackCount: 9, singleCount: 2, albumsSold: 320000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al6", artistId: "a2", title: "Minuit Électrique", coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&auto=format", label: "Lumière Sonore", releaseYear: 2017, trackCount: 11, singleCount: 3, albumsSold: 760000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al7", artistId: "a2", title: "Horizon Doré", coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&auto=format", label: "Lumière Sonore", releaseYear: 2021, trackCount: 10, singleCount: 4, albumsSold: 490000, certification: "gold", streaming: ["spotify"] },
  { id: "al8", artistId: "a2", title: "Éclats", coverUrl: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop&auto=format", label: "Eclipse Sound", releaseYear: 2023, trackCount: 8, singleCount: 2, albumsSold: 210000, certification: "none", streaming: ["spotify", "apple", "amazon"] },

  // The Drift Collective (a3)
  { id: "al9", artistId: "a3", title: "Open Water", coverUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&h=300&fit=crop&auto=format", label: "Tidal Sound", releaseYear: 2006, trackCount: 14, singleCount: 3, albumsSold: 3100000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al10", artistId: "a3", title: "Shoreline Hymns", coverUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&h=300&fit=crop&auto=format", label: "Tidal Sound", releaseYear: 2009, trackCount: 12, singleCount: 2, albumsSold: 2400000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al11", artistId: "a3", title: "The Long Pull", coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop&auto=format", label: "Tidal Sound", releaseYear: 2013, trackCount: 10, singleCount: 3, albumsSold: 1700000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al12", artistId: "a3", title: "Ebb", coverUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop&auto=format", label: "Tidal Sound", releaseYear: 2018, trackCount: 11, singleCount: 4, albumsSold: 890000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al13", artistId: "a3", title: "Undertow", coverUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop&auto=format", label: "Tidal Sound", releaseYear: 2022, trackCount: 9, singleCount: 2, albumsSold: 430000, certification: "gold", streaming: ["spotify"] },

  // Kai Sundara (a4)
  { id: "al14", artistId: "a4", title: "Cherry Blossom Static", coverUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop&auto=format", label: "Sakura Wave", releaseYear: 2018, trackCount: 10, singleCount: 2, albumsSold: 560000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al15", artistId: "a4", title: "Neon Garden", coverUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=300&h=300&fit=crop&auto=format", label: "Sakura Wave", releaseYear: 2020, trackCount: 12, singleCount: 3, albumsSold: 1100000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al16", artistId: "a4", title: "Midnight Fuji", coverUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format", label: "Sakura Wave", releaseYear: 2022, trackCount: 11, singleCount: 4, albumsSold: 780000, certification: "platinum", streaming: ["spotify", "amazon"] },

  // Echo Assembly (a5)
  { id: "al17", artistId: "a5", title: "Konstrukt", coverUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&auto=format", label: "Berlin Phase", releaseYear: 2011, trackCount: 8, singleCount: 1, albumsSold: 430000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al18", artistId: "a5", title: "Resonanzfeld", coverUrl: "https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=300&h=300&fit=crop&auto=format", label: "Berlin Phase", releaseYear: 2014, trackCount: 10, singleCount: 2, albumsSold: 670000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al19", artistId: "a5", title: "Phase Null", coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop&auto=format", label: "Berlin Phase", releaseYear: 2018, trackCount: 9, singleCount: 2, albumsSold: 310000, certification: "gold", streaming: ["spotify"] },
  { id: "al20", artistId: "a5", title: "Systemklang", coverUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=300&h=300&fit=crop&auto=format", label: "Modular Tone", releaseYear: 2022, trackCount: 7, singleCount: 1, albumsSold: 190000, certification: "none", streaming: ["spotify", "amazon"] },

  // Lena Voss (a6)
  { id: "al21", artistId: "a6", title: "Fjordlight", coverUrl: "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=300&h=300&fit=crop&auto=format", label: "Nordic Arc", releaseYear: 2013, trackCount: 10, singleCount: 2, albumsSold: 490000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al22", artistId: "a6", title: "White Noise Winter", coverUrl: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=300&h=300&fit=crop&auto=format", label: "Nordic Arc", releaseYear: 2016, trackCount: 11, singleCount: 3, albumsSold: 920000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al23", artistId: "a6", title: "Solstice", coverUrl: "https://images.unsplash.com/photo-1520962922320-2038eebab146?w=300&h=300&fit=crop&auto=format", label: "Nordic Arc", releaseYear: 2019, trackCount: 9, singleCount: 2, albumsSold: 640000, certification: "gold", streaming: ["spotify", "amazon"] },
  { id: "al24", artistId: "a6", title: "Aurora Borealis EP", coverUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&h=300&fit=crop&auto=format", label: "Nordic Arc", releaseYear: 2021, trackCount: 6, singleCount: 2, albumsSold: 280000, certification: "none", streaming: ["spotify", "apple", "amazon"] },

  // Static Empire (a7)
  { id: "al25", artistId: "a7", title: "Empire State of Bass", coverUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2004, trackCount: 16, singleCount: 4, albumsSold: 4200000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al26", artistId: "a7", title: "Feedback Loop", coverUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2007, trackCount: 14, singleCount: 3, albumsSold: 3600000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al27", artistId: "a7", title: "Dark Matter", coverUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2011, trackCount: 12, singleCount: 3, albumsSold: 2100000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al28", artistId: "a7", title: "Residual Heat", coverUrl: "https://images.unsplash.com/photo-1490862901986-35b5e5c0d524?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2015, trackCount: 11, singleCount: 2, albumsSold: 1400000, certification: "platinum", streaming: ["spotify"] },
  { id: "al29", artistId: "a7", title: "Collapse Theory", coverUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2019, trackCount: 10, singleCount: 3, albumsSold: 870000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al30", artistId: "a7", title: "Signal Jamming", coverUrl: "https://images.unsplash.com/photo-1560830083-c6f73c0c3d45?w=300&h=300&fit=crop&auto=format", label: "Northern Noise", releaseYear: 2023, trackCount: 9, singleCount: 2, albumsSold: 310000, certification: "gold", streaming: ["spotify", "amazon"] },

  // Priya Menon (a8)
  { id: "al31", artistId: "a8", title: "Monsoon Static", coverUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=300&h=300&fit=crop&auto=format", label: "Raga Digital", releaseYear: 2020, trackCount: 10, singleCount: 3, albumsSold: 380000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al32", artistId: "a8", title: "Seven Rivers", coverUrl: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=300&h=300&fit=crop&auto=format", label: "Raga Digital", releaseYear: 2022, trackCount: 12, singleCount: 4, albumsSold: 610000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al33", artistId: "a8", title: "Indigo Frequencies", coverUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=300&h=300&fit=crop&auto=format", label: "Raga Digital", releaseYear: 2023, trackCount: 9, singleCount: 2, albumsSold: 290000, certification: "gold", streaming: ["spotify"] },

  // The Lunar Wolves (a9)
  { id: "al34", artistId: "a9", title: "Howl at Apogee", coverUrl: "https://images.unsplash.com/photo-1436891678271-9c672565d8f6?w=300&h=300&fit=crop&auto=format", label: "Southern Cross Music", releaseYear: 2008, trackCount: 13, singleCount: 3, albumsSold: 1800000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al35", artistId: "a9", title: "Crescent Tide", coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format", label: "Southern Cross Music", releaseYear: 2011, trackCount: 11, singleCount: 2, albumsSold: 2300000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al36", artistId: "a9", title: "New Moon Rising", coverUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=300&h=300&fit=crop&auto=format", label: "Southern Cross Music", releaseYear: 2015, trackCount: 10, singleCount: 3, albumsSold: 1200000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al37", artistId: "a9", title: "Full Phase", coverUrl: "https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=300&h=300&fit=crop&auto=format", label: "Southern Cross Music", releaseYear: 2020, trackCount: 12, singleCount: 4, albumsSold: 760000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },

  // Rafael Dumont (a10)
  { id: "al38", artistId: "a10", title: "Carnaval Noir", coverUrl: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300&h=300&fit=crop&auto=format", label: "Trópico Records", releaseYear: 2012, trackCount: 11, singleCount: 3, albumsSold: 870000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al39", artistId: "a10", title: "Selva Elétrica", coverUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&auto=format", label: "Trópico Records", releaseYear: 2015, trackCount: 13, singleCount: 4, albumsSold: 1400000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al40", artistId: "a10", title: "Cidade dos Sons", coverUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop&auto=format", label: "Trópico Records", releaseYear: 2018, trackCount: 10, singleCount: 2, albumsSold: 950000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al41", artistId: "a10", title: "Beira-Mar", coverUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop&auto=format", label: "Trópico Records", releaseYear: 2021, trackCount: 9, singleCount: 3, albumsSold: 560000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },

  // Void Signal (a11)
  { id: "al42", artistId: "a11", title: "Zero Gravity Pop", coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format", label: "Hangang Label", releaseYear: 2017, trackCount: 12, singleCount: 5, albumsSold: 2800000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al43", artistId: "a11", title: "Chromatic Pulse", coverUrl: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop&auto=format", label: "Hangang Label", releaseYear: 2019, trackCount: 14, singleCount: 6, albumsSold: 3900000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al44", artistId: "a11", title: "Transmission X", coverUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop&auto=format", label: "Hangang Label", releaseYear: 2021, trackCount: 13, singleCount: 5, albumsSold: 3200000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al45", artistId: "a11", title: "Echo Chamber", coverUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop&auto=format", label: "Hangang Label", releaseYear: 2023, trackCount: 11, singleCount: 4, albumsSold: 1800000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },

  // Isla Crane (a12)
  { id: "al46", artistId: "a12", title: "Featherweight", coverUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300&h=300&fit=crop&auto=format", label: "Pacific Rim Sounds", releaseYear: 2016, trackCount: 10, singleCount: 3, albumsSold: 480000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al47", artistId: "a12", title: "Silver Migration", coverUrl: "https://images.unsplash.com/photo-1445368783691-d5b1746d2d60?w=300&h=300&fit=crop&auto=format", label: "Pacific Rim Sounds", releaseYear: 2018, trackCount: 12, singleCount: 4, albumsSold: 790000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al48", artistId: "a12", title: "Wingspan", coverUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=300&h=300&fit=crop&auto=format", label: "Pacific Rim Sounds", releaseYear: 2021, trackCount: 9, singleCount: 2, albumsSold: 340000, certification: "gold", streaming: ["spotify"] },

  // The Amber Circuit (a13)
  { id: "al49", artistId: "a13", title: "Warm Conductor", coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&auto=format", label: "Voltage Europa", releaseYear: 2010, trackCount: 11, singleCount: 2, albumsSold: 640000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al50", artistId: "a13", title: "Current Affairs", coverUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop&auto=format", label: "Voltage Europa", releaseYear: 2013, trackCount: 10, singleCount: 3, albumsSold: 1100000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al51", artistId: "a13", title: "Resistance Wiring", coverUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&auto=format", label: "Voltage Europa", releaseYear: 2017, trackCount: 9, singleCount: 2, albumsSold: 520000, certification: "gold", streaming: ["spotify", "amazon"] },
  { id: "al52", artistId: "a13", title: "Ohm Sweet Ohm", coverUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=300&fit=crop&auto=format", label: "Voltage Europa", releaseYear: 2021, trackCount: 8, singleCount: 1, albumsSold: 230000, certification: "none", streaming: ["spotify", "apple", "amazon"] },

  // Soren Holt (a14)
  { id: "al53", artistId: "a14", title: "Archipelago", coverUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&h=300&fit=crop&auto=format", label: "Nordic Mist", releaseYear: 2014, trackCount: 10, singleCount: 2, albumsSold: 390000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al54", artistId: "a14", title: "Amber Hours", coverUrl: "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?w=300&h=300&fit=crop&auto=format", label: "Nordic Mist", releaseYear: 2017, trackCount: 11, singleCount: 3, albumsSold: 720000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al55", artistId: "a14", title: "Sea Glass", coverUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&h=300&fit=crop&auto=format", label: "Nordic Mist", releaseYear: 2020, trackCount: 9, singleCount: 2, albumsSold: 440000, certification: "gold", streaming: ["spotify"] },

  // Pulsar Twins (a15)
  { id: "al56", artistId: "a15", title: "Binary Star", coverUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=300&h=300&fit=crop&auto=format", label: "Twin Axis", releaseYear: 2019, trackCount: 10, singleCount: 3, albumsSold: 870000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al57", artistId: "a15", title: "Event Horizon", coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop&auto=format", label: "Twin Axis", releaseYear: 2021, trackCount: 12, singleCount: 4, albumsSold: 1300000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al58", artistId: "a15", title: "Parallax", coverUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop&auto=format", label: "Twin Axis", releaseYear: 2023, trackCount: 11, singleCount: 3, albumsSold: 620000, certification: "gold", streaming: ["spotify", "amazon"] },

  // Yara Osei (a16)
  { id: "al59", artistId: "a16", title: "Gold Coast Echoes", coverUrl: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300&h=300&fit=crop&auto=format", label: "Accra Sound Works", releaseYear: 2021, trackCount: 10, singleCount: 4, albumsSold: 490000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al60", artistId: "a16", title: "Harmattan Season", coverUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop&auto=format", label: "Accra Sound Works", releaseYear: 2022, trackCount: 11, singleCount: 3, albumsSold: 680000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al61", artistId: "a16", title: "Kente Waves", coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format", label: "Accra Sound Works", releaseYear: 2024, trackCount: 12, singleCount: 5, albumsSold: 340000, certification: "gold", streaming: ["spotify"] },

  // The Iron Shore (a17)
  { id: "al62", artistId: "a17", title: "Atlantic Ramparts", coverUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&h=300&fit=crop&auto=format", label: "Cliffs Records", releaseYear: 2007, trackCount: 13, singleCount: 3, albumsSold: 1600000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al63", artistId: "a17", title: "Stone & Salt", coverUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&h=300&fit=crop&auto=format", label: "Cliffs Records", releaseYear: 2010, trackCount: 12, singleCount: 2, albumsSold: 2200000, certification: "multi-platinum", streaming: ["spotify", "apple"] },
  { id: "al64", artistId: "a17", title: "The Gale Sessions", coverUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&h=300&fit=crop&auto=format", label: "Cliffs Records", releaseYear: 2014, trackCount: 10, singleCount: 3, albumsSold: 1100000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al65", artistId: "a17", title: "Headland", coverUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop&auto=format", label: "Cliffs Records", releaseYear: 2018, trackCount: 11, singleCount: 2, albumsSold: 680000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al66", artistId: "a17", title: "Basalt", coverUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format", label: "Cliffs Records", releaseYear: 2022, trackCount: 9, singleCount: 2, albumsSold: 390000, certification: "gold", streaming: ["spotify"] },

  // Dmitri Volkov (a18)
  { id: "al67", artistId: "a18", title: "Siberian Minimalism", coverUrl: "https://images.unsplash.com/photo-1520962922320-2038eebab146?w=300&h=300&fit=crop&auto=format", label: "Tundra Sound", releaseYear: 2011, trackCount: 8, singleCount: 1, albumsSold: 280000, certification: "none", streaming: ["spotify", "apple"] },
  { id: "al68", artistId: "a18", title: "Permafrost", coverUrl: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=300&h=300&fit=crop&auto=format", label: "Tundra Sound", releaseYear: 2014, trackCount: 10, singleCount: 2, albumsSold: 510000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al69", artistId: "a18", title: "Taiga", coverUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&auto=format", label: "Tundra Sound", releaseYear: 2017, trackCount: 11, singleCount: 3, albumsSold: 790000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al70", artistId: "a18", title: "Steppe Nocturne", coverUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&h=300&fit=crop&auto=format", label: "Tundra Sound", releaseYear: 2021, trackCount: 9, singleCount: 2, albumsSold: 430000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },

  // Crimson Atlas (a19)
  { id: "al71", artistId: "a19", title: "Patagonia Drone", coverUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop&auto=format", label: "Sur Profundo", releaseYear: 2015, trackCount: 10, singleCount: 2, albumsSold: 560000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al72", artistId: "a19", title: "Andes Transmission", coverUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop&auto=format", label: "Sur Profundo", releaseYear: 2017, trackCount: 12, singleCount: 3, albumsSold: 890000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al73", artistId: "a19", title: "Cerro Largo", coverUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format", label: "Sur Profundo", releaseYear: 2020, trackCount: 11, singleCount: 4, albumsSold: 1100000, certification: "platinum", streaming: ["spotify"] },
  { id: "al74", artistId: "a19", title: "Horizonte Rojo", coverUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=300&h=300&fit=crop&auto=format", label: "Sur Profundo", releaseYear: 2023, trackCount: 9, singleCount: 2, albumsSold: 430000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },

  // Nadia Fontaine (a20)
  { id: "al75", artistId: "a20", title: "Bruges Nocturne", coverUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop&auto=format", label: "Flanders Tone", releaseYear: 2017, trackCount: 10, singleCount: 3, albumsSold: 430000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al76", artistId: "a20", title: "Chocolate Box", coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&auto=format", label: "Flanders Tone", releaseYear: 2019, trackCount: 11, singleCount: 2, albumsSold: 670000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al77", artistId: "a20", title: "Lace & Thunder", coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&auto=format", label: "Flanders Tone", releaseYear: 2022, trackCount: 9, singleCount: 3, albumsSold: 390000, certification: "gold", streaming: ["spotify"] },

  // The Glass Menagerie (a21)
  { id: "al78", artistId: "a21", title: "Fragile Architecture", coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop&auto=format", label: "Spectrum UK", releaseYear: 2005, trackCount: 14, singleCount: 4, albumsSold: 2100000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al79", artistId: "a21", title: "Crystal Lattice", coverUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop&auto=format", label: "Spectrum UK", releaseYear: 2008, trackCount: 12, singleCount: 3, albumsSold: 1800000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al80", artistId: "a21", title: "Refraction", coverUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=300&h=300&fit=crop&auto=format", label: "Spectrum UK", releaseYear: 2012, trackCount: 11, singleCount: 3, albumsSold: 1400000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al81", artistId: "a21", title: "Prism Light", coverUrl: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop&auto=format", label: "Spectrum UK", releaseYear: 2016, trackCount: 10, singleCount: 2, albumsSold: 830000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al82", artistId: "a21", title: "Shard", coverUrl: "https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=300&h=300&fit=crop&auto=format", label: "Spectrum UK", releaseYear: 2020, trackCount: 9, singleCount: 2, albumsSold: 470000, certification: "gold", streaming: ["spotify"] },

  // Tomás Reyes (a22)
  { id: "al83", artistId: "a22", title: "Ciudad Fantasma", coverUrl: "https://images.unsplash.com/photo-1462400362591-9ca55235346a?w=300&h=300&fit=crop&auto=format", label: "Maguey Records", releaseYear: 2010, trackCount: 12, singleCount: 3, albumsSold: 780000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al84", artistId: "a22", title: "Frontera", coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop&auto=format", label: "Maguey Records", releaseYear: 2013, trackCount: 11, singleCount: 2, albumsSold: 1200000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al85", artistId: "a22", title: "Mercado de Sombras", coverUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop&auto=format", label: "Maguey Records", releaseYear: 2017, trackCount: 10, singleCount: 4, albumsSold: 940000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al86", artistId: "a22", title: "Lluvia Seca", coverUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=300&h=300&fit=crop&auto=format", label: "Maguey Records", releaseYear: 2021, trackCount: 9, singleCount: 2, albumsSold: 480000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },

  // Orbit Black (a23)
  { id: "al87", artistId: "a23", title: "Dark Side Frequencies", coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop&auto=format", label: "Deep Space Recordings", releaseYear: 2016, trackCount: 11, singleCount: 3, albumsSold: 720000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al88", artistId: "a23", title: "Exoplanet", coverUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop&auto=format", label: "Deep Space Recordings", releaseYear: 2019, trackCount: 12, singleCount: 4, albumsSold: 1100000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al89", artistId: "a23", title: "Event Horizon II", coverUrl: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop&auto=format", label: "Deep Space Recordings", releaseYear: 2022, trackCount: 10, singleCount: 3, albumsSold: 650000, certification: "gold", streaming: ["spotify"] },

  // Hana Mizuki (a24)
  { id: "al90", artistId: "a24", title: "Paper Lanterns", coverUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=300&h=300&fit=crop&auto=format", label: "Kyoto Sessions", releaseYear: 2019, trackCount: 10, singleCount: 3, albumsSold: 640000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al91", artistId: "a24", title: "Ink & Circuit", coverUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=300&h=300&fit=crop&auto=format", label: "Kyoto Sessions", releaseYear: 2021, trackCount: 11, singleCount: 4, albumsSold: 980000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al92", artistId: "a24", title: "Wabi-Sabi Waves", coverUrl: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=300&h=300&fit=crop&auto=format", label: "Kyoto Sessions", releaseYear: 2023, trackCount: 9, singleCount: 2, albumsSold: 510000, certification: "gold", streaming: ["spotify", "amazon"] },

  // The Salt Flats (a25)
  { id: "al93", artistId: "a25", title: "Alkali Dreams", coverUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop&auto=format", label: "Prairie Sound", releaseYear: 2012, trackCount: 12, singleCount: 3, albumsSold: 980000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al94", artistId: "a25", title: "White Expanse", coverUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&h=300&fit=crop&auto=format", label: "Prairie Sound", releaseYear: 2015, trackCount: 10, singleCount: 2, albumsSold: 1400000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al95", artistId: "a25", title: "Badlands Hymnal", coverUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop&auto=format", label: "Prairie Sound", releaseYear: 2018, trackCount: 11, singleCount: 4, albumsSold: 870000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al96", artistId: "a25", title: "Mineral Songs", coverUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=300&h=300&fit=crop&auto=format", label: "Prairie Sound", releaseYear: 2021, trackCount: 9, singleCount: 2, albumsSold: 530000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al97", artistId: "a25", title: "Dust River", coverUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format", label: "Prairie Sound", releaseYear: 2023, trackCount: 10, singleCount: 3, albumsSold: 290000, certification: "gold", streaming: ["spotify"] },

  // Elara Vind (a26)
  { id: "al98", artistId: "a26", title: "Fjell", coverUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop&auto=format", label: "Northern Light Music", releaseYear: 2014, trackCount: 9, singleCount: 2, albumsSold: 340000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al99", artistId: "a26", title: "Isfjord", coverUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format", label: "Northern Light Music", releaseYear: 2017, trackCount: 11, singleCount: 3, albumsSold: 620000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al100", artistId: "a26", title: "Midnight Sun EP", coverUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&h=300&fit=crop&auto=format", label: "Northern Light Music", releaseYear: 2020, trackCount: 7, singleCount: 2, albumsSold: 280000, certification: "none", streaming: ["spotify"] },
  { id: "al101", artistId: "a26", title: "Storm Season", coverUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&h=300&fit=crop&auto=format", label: "Northern Light Music", releaseYear: 2022, trackCount: 10, singleCount: 3, albumsSold: 450000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },

  // Deep Current (a27)
  { id: "al102", artistId: "a27", title: "Cape Town Frequencies", coverUrl: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=300&h=300&fit=crop&auto=format", label: "Ubuntu Recordings", releaseYear: 2009, trackCount: 14, singleCount: 4, albumsSold: 1100000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al103", artistId: "a27", title: "Highveld Heat", coverUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop&auto=format", label: "Ubuntu Recordings", releaseYear: 2012, trackCount: 12, singleCount: 3, albumsSold: 1700000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al104", artistId: "a27", title: "Kruger Sessions", coverUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=300&h=300&fit=crop&auto=format", label: "Ubuntu Recordings", releaseYear: 2016, trackCount: 11, singleCount: 2, albumsSold: 980000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al105", artistId: "a27", title: "Indlela", coverUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&auto=format", label: "Ubuntu Recordings", releaseYear: 2020, trackCount: 10, singleCount: 3, albumsSold: 640000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al106", artistId: "a27", title: "Dust & Rhythm", coverUrl: "https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=300&h=300&fit=crop&auto=format", label: "Ubuntu Recordings", releaseYear: 2023, trackCount: 9, singleCount: 2, albumsSold: 350000, certification: "gold", streaming: ["spotify"] },

  // Cleo Sterling (a28)
  { id: "al107", artistId: "a28", title: "Debut", coverUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop&auto=format", label: "Melbourne Sound Co.", releaseYear: 2022, trackCount: 10, singleCount: 4, albumsSold: 320000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
  { id: "al108", artistId: "a28", title: "Red Sand", coverUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop&auto=format", label: "Melbourne Sound Co.", releaseYear: 2023, trackCount: 11, singleCount: 3, albumsSold: 480000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al109", artistId: "a28", title: "Outback Frequency", coverUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop&auto=format", label: "Melbourne Sound Co.", releaseYear: 2024, trackCount: 12, singleCount: 5, albumsSold: 230000, certification: "none", streaming: ["spotify"] },

  // Fractal Dawn (a29)
  { id: "al110", artistId: "a29", title: "Iteration Zero", coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&auto=format", label: "Hamburg Electronics", releaseYear: 2018, trackCount: 9, singleCount: 2, albumsSold: 410000, certification: "gold", streaming: ["spotify", "apple"] },
  { id: "al111", artistId: "a29", title: "Mandelbrot Suite", coverUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=300&fit=crop&auto=format", label: "Hamburg Electronics", releaseYear: 2020, trackCount: 11, singleCount: 3, albumsSold: 680000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al112", artistId: "a29", title: "Strange Attractor", coverUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=300&h=300&fit=crop&auto=format", label: "Hamburg Electronics", releaseYear: 2022, trackCount: 10, singleCount: 2, albumsSold: 480000, certification: "gold", streaming: ["spotify", "amazon"] },
  { id: "al113", artistId: "a29", title: "Bifurcation Point", coverUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&auto=format", label: "Hamburg Electronics", releaseYear: 2024, trackCount: 8, singleCount: 1, albumsSold: 170000, certification: "none", streaming: ["spotify", "apple", "amazon"] },

  // Zuri Nakamura (a30)
  { id: "al114", artistId: "a30", title: "Third Culture", coverUrl: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop&auto=format", label: "Crossroads Music", releaseYear: 2013, trackCount: 12, singleCount: 3, albumsSold: 890000, certification: "platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al115", artistId: "a30", title: "Diaspora Sound", coverUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop&auto=format", label: "Crossroads Music", releaseYear: 2016, trackCount: 11, singleCount: 4, albumsSold: 1300000, certification: "platinum", streaming: ["spotify", "apple"] },
  { id: "al116", artistId: "a30", title: "Polyphony", coverUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=300&h=300&fit=crop&auto=format", label: "Crossroads Music", releaseYear: 2019, trackCount: 10, singleCount: 2, albumsSold: 970000, certification: "platinum", streaming: ["spotify", "amazon"] },
  { id: "al117", artistId: "a30", title: "Tokyo Harlem", coverUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=300&h=300&fit=crop&auto=format", label: "Crossroads Music", releaseYear: 2021, trackCount: 13, singleCount: 5, albumsSold: 1600000, certification: "multi-platinum", streaming: ["spotify", "apple", "amazon"] },
  { id: "al118", artistId: "a30", title: "Meridian", coverUrl: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=300&h=300&fit=crop&auto=format", label: "Crossroads Music", releaseYear: 2023, trackCount: 11, singleCount: 3, albumsSold: 620000, certification: "gold", streaming: ["spotify", "apple", "amazon"] },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatSold(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return `${n}`;
}

function genId(): string {
  return Math.random().toString(36).slice(2, 10);
}

const CERT_CONFIG: Record<Certification, { label: string; color: string }> = {
  none: { label: "—", color: "text-muted-foreground" },
  gold: { label: "Gold", color: "text-yellow-400" },
  platinum: { label: "Platinum", color: "text-slate-300" },
  "multi-platinum": { label: "Multi-Platinum", color: "text-violet-400" },
};

const COVER_PLACEHOLDER_COLORS = [
  "from-violet-600 to-pink-600",
  "from-blue-600 to-cyan-500",
  "from-orange-500 to-rose-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-indigo-600 to-purple-600",
];

function placeholderGradient(id: string): string {
  const idx = id.charCodeAt(id.length - 1) % COVER_PLACEHOLDER_COLORS.length;
  return COVER_PLACEHOLDER_COLORS[idx];
}

// ─── Shared Components ────────────────────────────────────────────────────────

function CertBadge({ cert }: { cert: Certification }) {
  if (cert === "none") return null;
  const { label, color } = CERT_CONFIG[cert];
  return (
    <span className={`text-xs font-semibold uppercase tracking-wider ${color} border border-current/30 rounded px-2 py-0.5`}>
      {label}
    </span>
  );
}

function StreamingIcons({ platforms }: { platforms: StreamingPlatform[] }) {
  return (
    <div className="flex gap-1.5 items-center">
      {platforms.includes("spotify") && (
        <span title="Spotify" className="text-xs bg-[#1DB954]/20 text-[#1DB954] font-bold rounded px-1.5 py-0.5">SP</span>
      )}
      {platforms.includes("apple") && (
        <span title="Apple Music" className="text-xs bg-[#fc3c44]/20 text-[#fc3c44] font-bold rounded px-1.5 py-0.5">AM</span>
      )}
      {platforms.includes("amazon") && (
        <span title="Amazon Music" className="text-xs bg-[#00a8e1]/20 text-[#00a8e1] font-bold rounded px-1.5 py-0.5">AZ</span>
      )}
    </div>
  );
}

function CoverImage({ url, title, size = "md" }: { url: string; title: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClass = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-28 h-28", xl: "w-56 h-56" }[size];
  const [failed, setFailed] = useState(false);
  const gradient = COVER_PLACEHOLDER_COLORS[title.charCodeAt(0) % COVER_PLACEHOLDER_COLORS.length];
  return (
    <div className={`${sizeClass} rounded-lg overflow-hidden flex-shrink-0 bg-muted`}>
      {!failed && url ? (
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Disc3 size={size === "sm" ? 14 : size === "md" ? 20 : size === "lg" ? 32 : 48} className="text-white/50" />
        </div>
      )}
    </div>
  );
}

function ArtistAvatar({ artist, size = "md" }: { artist: Artist; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClass = { sm: "w-10 h-10 text-base", md: "w-16 h-16 text-2xl", lg: "w-24 h-24 text-4xl", xl: "w-48 h-48 text-6xl" }[size];
  const initials = artist.name.split(" ").map(w => w[0]).slice(0, 2).join("");
  const gradient = COVER_PLACEHOLDER_COLORS[artist.id.charCodeAt(artist.id.length - 1) % COVER_PLACEHOLDER_COLORS.length];
  const [failed, setFailed] = useState(false);
  if (artist.photoUrl && !failed) {
    return (
      <div className={`${sizeClass} rounded-full overflow-hidden flex-shrink-0 bg-muted`}>
        <img src={artist.photoUrl} alt={artist.name} className="w-full h-full object-cover" onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className={`${sizeClass} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white flex-shrink-0`}>
      {initials}
    </div>
  );
}

function CountryFlag({ countryCode, country }: { countryCode: string; country: string }) {
  const code = countryCode.toLowerCase();
  const abbr = countryCode.toUpperCase();
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="inline-flex items-center gap-1.5 cursor-default select-none">
            <span className="w-10 h-6 rounded overflow-hidden flex-shrink-0 shadow-sm border border-white/10">
              <img
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={country}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="text-xs font-semibold text-muted-foreground tracking-wider">{abbr}</span>
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={5}
            className="bg-popover text-popover-foreground text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg border border-border z-50"
          >
            {country}
            <Tooltip.Arrow className="fill-popover" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

// ─── Form Components ──────────────────────────────────────────────────────────

interface ArtistFormData {
  name: string;
  country: string;
  countryFlag: string;
  countryCode: string;
  photoUrl: string;
  type: ArtistType;
  memberCount: string;
  activeSince: string;
}

const COUNTRIES: { name: string; code: string; flag: string }[] = [
  { name: "Argentina",      code: "ar", flag: "🇦🇷" },
  { name: "Australia",      code: "au", flag: "🇦🇺" },
  { name: "Belgium",        code: "be", flag: "🇧🇪" },
  { name: "Brazil",         code: "br", flag: "🇧🇷" },
  { name: "Canada",         code: "ca", flag: "🇨🇦" },
  { name: "China",          code: "cn", flag: "🇨🇳" },
  { name: "Denmark",        code: "dk", flag: "🇩🇰" },
  { name: "Finland",        code: "fi", flag: "🇫🇮" },
  { name: "France",         code: "fr", flag: "🇫🇷" },
  { name: "Germany",        code: "de", flag: "🇩🇪" },
  { name: "Ghana",          code: "gh", flag: "🇬🇭" },
  { name: "India",          code: "in", flag: "🇮🇳" },
  { name: "Ireland",        code: "ie", flag: "🇮🇪" },
  { name: "Italy",          code: "it", flag: "🇮🇹" },
  { name: "Japan",          code: "jp", flag: "🇯🇵" },
  { name: "Mexico",         code: "mx", flag: "🇲🇽" },
  { name: "Netherlands",    code: "nl", flag: "🇳🇱" },
  { name: "New Zealand",    code: "nz", flag: "🇳🇿" },
  { name: "Nigeria",        code: "ng", flag: "🇳🇬" },
  { name: "Norway",         code: "no", flag: "🇳🇴" },
  { name: "Portugal",       code: "pt", flag: "🇵🇹" },
  { name: "Russia",         code: "ru", flag: "🇷🇺" },
  { name: "South Africa",   code: "za", flag: "🇿🇦" },
  { name: "South Korea",    code: "kr", flag: "🇰🇷" },
  { name: "Spain",          code: "es", flag: "🇪🇸" },
  { name: "Sweden",         code: "se", flag: "🇸🇪" },
  { name: "United Kingdom", code: "gb", flag: "🇬🇧" },
  { name: "United States",  code: "us", flag: "🇺🇸" },
];

function ArtistFormModal({
  open, onClose, initial, onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Artist;
  onSave: (data: Omit<Artist, "id">) => void;
}) {
  const blank: ArtistFormData = { name: "", country: "", countryFlag: "", countryCode: "", photoUrl: "", type: "solo", memberCount: "", activeSince: "" };
  const toFormData = (a: Artist): ArtistFormData => ({
    name: a.name, country: a.country, countryFlag: a.countryFlag, countryCode: a.countryCode,
    photoUrl: a.photoUrl ?? "",
    type: a.type, memberCount: a.memberCount?.toString() ?? "", activeSince: a.activeSince.toString(),
  });
  const [form, setForm] = useState<ArtistFormData>(initial ? toFormData(initial) : blank);

  useEffect(() => {
    if (open) setForm(initial ? toFormData(initial) : blank);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initial?.id]);

  const set = (k: keyof ArtistFormData, v: string) => setForm(f => ({ ...f, [k]: v }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.activeSince) return;
    const country = COUNTRIES.find(c => c.code === form.countryCode);
    onSave({
      name: form.name.trim(),
      country: country?.name ?? form.country.trim(),
      countryFlag: (country?.flag ?? form.countryFlag.trim()) || "🎵",
      countryCode: form.countryCode || "un",
      photoUrl: form.photoUrl.trim(),
      type: form.type,
      memberCount: form.type === "group" && form.memberCount ? parseInt(form.memberCount) : undefined,
      activeSince: parseInt(form.activeSince),
    });
    onClose();
  }

  return (
    <Dialog.Root open={open} onOpenChange={v => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-5">
            <Dialog.Title className="text-lg font-semibold text-foreground">
              {initial ? "Edit Artist" : "Add Artist"}
            </Dialog.Title>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Artist Name *</label>
              <input value={form.name} onChange={e => set("name", e.target.value)} required
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Country</label>
              <div className="flex items-center gap-3">
                <select
                  value={form.countryCode}
                  onChange={e => {
                    const c = COUNTRIES.find(x => x.code === e.target.value);
                    setForm(f => ({ ...f, countryCode: e.target.value, country: c?.name ?? "", countryFlag: c?.flag ?? "" }));
                  }}
                  className="flex-1 bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">— Select country —</option>
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.code}>{c.name} – {c.code.toUpperCase()}</option>
                  ))}
                </select>
                {form.countryCode && (
                  <span className="w-12 h-8 rounded overflow-hidden flex-shrink-0 border border-white/10 shadow-sm">
                    <img src={`https://flagcdn.com/w40/${form.countryCode}.png`} alt={form.country} className="w-full h-full object-cover" />
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Artist Photo URL</label>
              <div className="flex items-center gap-3">
                <input value={form.photoUrl} onChange={e => set("photoUrl", e.target.value)} placeholder="https://images.unsplash.com/..."
                  className="flex-1 bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                {form.photoUrl && (
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10 bg-muted">
                    <img src={form.photoUrl} alt="preview" className="w-full h-full object-cover"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Type</label>
                <select value={form.type} onChange={e => set("type", e.target.value as ArtistType)}
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="solo">Solo</option>
                  <option value="group">Group</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Active Since *</label>
                <input type="number" value={form.activeSince} onChange={e => set("activeSince", e.target.value)} required min="1900" max="2024"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            {form.type === "group" && (
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Number of Members</label>
                <input type="number" value={form.memberCount} onChange={e => set("memberCount", e.target.value)} min="2"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            )}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose}
                className="flex-1 bg-secondary text-secondary-foreground rounded-lg py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
                Cancel
              </button>
              <button type="submit"
                className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                {initial ? "Save Changes" : "Add Artist"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface AlbumFormData {
  title: string;
  artistId: string;
  coverUrl: string;
  label: string;
  releaseYear: string;
  trackCount: string;
  singleCount: string;
  albumsSold: string;
  certification: Certification;
  streaming: StreamingPlatform[];
}

function AlbumFormModal({
  open, onClose, initial, artists, defaultArtistId, onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Album;
  artists: Artist[];
  defaultArtistId?: string;
  onSave: (data: Omit<Album, "id">) => void;
}) {
  const blank: AlbumFormData = {
    title: "", artistId: defaultArtistId ?? artists[0]?.id ?? "", coverUrl: "", label: "",
    releaseYear: "", trackCount: "", singleCount: "", albumsSold: "", certification: "none", streaming: [],
  };
  const [form, setForm] = useState<AlbumFormData>(
    initial
      ? { title: initial.title, artistId: initial.artistId, coverUrl: initial.coverUrl, label: initial.label, releaseYear: initial.releaseYear.toString(), trackCount: initial.trackCount.toString(), singleCount: initial.singleCount.toString(), albumsSold: initial.albumsSold.toString(), certification: initial.certification, streaming: initial.streaming }
      : blank
  );

  useEffect(() => {
    if (open) {
      setForm(initial
        ? { title: initial.title, artistId: initial.artistId, coverUrl: initial.coverUrl, label: initial.label, releaseYear: initial.releaseYear.toString(), trackCount: initial.trackCount.toString(), singleCount: initial.singleCount.toString(), albumsSold: initial.albumsSold.toString(), certification: initial.certification, streaming: initial.streaming }
        : { ...blank, artistId: defaultArtistId ?? artists[0]?.id ?? "" }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initial?.id]);

  const set = (k: keyof AlbumFormData, v: string | StreamingPlatform[]) => setForm(f => ({ ...f, [k]: v }));

  function toggleStream(p: StreamingPlatform) {
    setForm(f => ({
      ...f,
      streaming: f.streaming.includes(p) ? f.streaming.filter(x => x !== p) : [...f.streaming, p],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.artistId || !form.releaseYear) return;
    onSave({
      artistId: form.artistId,
      title: form.title.trim(),
      coverUrl: form.coverUrl.trim(),
      label: form.label.trim(),
      releaseYear: parseInt(form.releaseYear),
      trackCount: parseInt(form.trackCount) || 0,
      singleCount: parseInt(form.singleCount) || 0,
      albumsSold: parseInt(form.albumsSold) || 0,
      certification: form.certification,
      streaming: form.streaming,
    });
    onClose();
  }

  return (
    <Dialog.Root open={open} onOpenChange={v => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <Dialog.Title className="text-lg font-semibold text-foreground">
              {initial ? "Edit Album" : "Add Album"}
            </Dialog.Title>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Album Title *</label>
              <input value={form.title} onChange={e => set("title", e.target.value)} required
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Artist *</label>
              <select value={form.artistId} onChange={e => set("artistId", e.target.value)}
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                {artists.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Cover Image URL</label>
              <input value={form.coverUrl} onChange={e => set("coverUrl", e.target.value)} placeholder="https://..."
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              {form.coverUrl && (
                <div className="mt-2 w-16 h-16 rounded-lg overflow-hidden bg-muted">
                  <img src={form.coverUrl} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Record Label</label>
                <input value={form.label} onChange={e => set("label", e.target.value)}
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Release Year *</label>
                <input type="number" value={form.releaseYear} onChange={e => set("releaseYear", e.target.value)} required min="1950" max="2025"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Tracks</label>
                <input type="number" value={form.trackCount} onChange={e => set("trackCount", e.target.value)} min="1"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Singles</label>
                <input type="number" value={form.singleCount} onChange={e => set("singleCount", e.target.value)} min="0"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Albums Sold</label>
                <input type="number" value={form.albumsSold} onChange={e => set("albumsSold", e.target.value)} min="0"
                  className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Certification</label>
              <select value={form.certification} onChange={e => set("certification", e.target.value as Certification)}
                className="w-full bg-input-background border border-border rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="none">None</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="multi-platinum">Multi-Platinum</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Streaming Platforms</label>
              <div className="flex gap-2">
                {(["spotify", "apple", "amazon"] as StreamingPlatform[]).map(p => (
                  <button key={p} type="button" onClick={() => toggleStream(p)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${form.streaming.includes(p) ? "bg-primary border-primary text-white" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                    {p === "spotify" ? "Spotify" : p === "apple" ? "Apple Music" : "Amazon"}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose}
                className="flex-1 bg-secondary text-secondary-foreground rounded-lg py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
                Cancel
              </button>
              <button type="submit"
                className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                {initial ? "Save Changes" : "Add Album"}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DeleteAlbumModal({
  open, onClose, album, artist, onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  album: Album | null;
  artist: Artist | null;
  onConfirm: () => void;
}) {
  if (!album || !artist) return null;
  return (
    <Dialog.Root open={open} onOpenChange={v => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm bg-card border border-border rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-base font-semibold text-foreground">Delete Album?</Dialog.Title>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">This will permanently remove this album from the catalog.</p>
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-3 mb-5">
            <CoverImage url={album.coverUrl} title={album.title} size="sm" />
            <div>
              <p className="text-sm font-medium text-foreground">{album.title}</p>
              <p className="text-xs text-muted-foreground">{artist.name} · {album.releaseYear}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onClose}
              className="flex-1 bg-secondary text-secondary-foreground rounded-lg py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
              Cancel
            </button>
            <button onClick={() => { onConfirm(); onClose(); }}
              className="flex-1 bg-destructive text-destructive-foreground rounded-lg py-2 text-sm font-medium hover:bg-destructive/90 transition-colors">
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DeleteArtistModal({
  open, onClose, artist, albumCount, onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  artist: Artist | null;
  albumCount: number;
  onConfirm: () => void;
}) {
  if (!artist) return null;
  return (
    <Dialog.Root open={open} onOpenChange={v => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
        <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm bg-card border border-border rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-base font-semibold text-foreground">Delete Artist?</Dialog.Title>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            This will permanently remove this artist and all their albums from the catalog.
          </p>
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-3 mb-5">
            <ArtistAvatar artist={artist} size="sm" />
            <div>
              <p className="text-sm font-medium text-foreground">{artist.name}</p>
              <p className="text-xs text-muted-foreground">
                {artist.country} · {albumCount} {albumCount === 1 ? "album" : "albums"} will be deleted
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onClose}
              className="flex-1 bg-secondary text-secondary-foreground rounded-lg py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
              Cancel
            </button>
            <button onClick={() => { onConfirm(); onClose(); }}
              className="flex-1 bg-destructive text-destructive-foreground rounded-lg py-2 text-sm font-medium hover:bg-destructive/90 transition-colors">
              Delete Artist
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ─── Theme ────────────────────────────────────────────────────────────────────

function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

export function NavBar() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { dark, toggle } = useTheme();
  const isArtists = pathname === "/" || pathname.startsWith("/artists");
  const isAlbums = pathname.startsWith("/albums");
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-6">
        <button onClick={() => nav("/artists")} className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <Music size={20} className="text-white" />
          </div>
          <span className="font-bold text-2xl text-foreground tracking-tight hidden sm:block" style={{ fontFamily: "'Playfair Display', serif" }}>
            Modern Music Catalog
          </span>
        </button>
        <nav className="flex items-center gap-1">
          <button
            onClick={() => nav("/artists")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isArtists ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            Artists
          </button>
          <button
            onClick={() => nav("/albums")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isAlbums ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            Albums
          </button>
        </nav>
        <div className="ml-auto">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all text-sm font-medium">
            {dark ? <Sun size={15} /> : <Moon size={15} />}
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Artists View ─────────────────────────────────────────────────────────────

function ArtistsView({
  artists, albums, onSelect, onAdd, onEdit, onDelete,
}: {
  artists: Artist[];
  albums: Album[];
  onSelect: (id: string) => void;
  onAdd: () => void;
  onEdit: (a: Artist) => void;
  onDelete: (a: Artist) => void;
}) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | ArtistType>("all");
  const [filterCountry, setFilterCountry] = useState("all");
  const [sort, setSort] = useState<"name" | "activeSince">("name");

  const countries = useMemo(() => Array.from(new Set(artists.map(a => a.country))).sort(), [artists]);

  const filtered = useMemo(() => {
    let list = artists;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(a => a.name.toLowerCase().includes(q) || a.country.toLowerCase().includes(q));
    }
    if (filterType !== "all") list = list.filter(a => a.type === filterType);
    if (filterCountry !== "all") list = list.filter(a => a.country === filterCountry);
    list = [...list].sort((a, b) =>
      sort === "name" ? a.name.localeCompare(b.name) : a.activeSince - b.activeSince
    );
    return list;
  }, [artists, search, filterType, filterCountry, sort]);

  const albumCountFor = (artistId: string) => albums.filter(al => al.artistId === artistId).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Artists</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{filtered.length} of {artists.length} artists</p>
        </div>
        <button onClick={onAdd}
          className="flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus size={15} /> Add Artist
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search artists..."
            className="w-full bg-secondary border border-border rounded-xl pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <select value={filterType} onChange={e => setFilterType(e.target.value as "all" | ArtistType)}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="all">All Types</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
        </select>
        <select value={filterCountry} onChange={e => setFilterCountry(e.target.value)}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="all">All Countries</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value as "name" | "activeSince")}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="name">Sort: Name</option>
          <option value="activeSince">Sort: Active Since</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(artist => (
          <div key={artist.id}
            className="group bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
            onClick={() => onSelect(artist.id)}>
            <div className="flex items-start gap-3 mb-3">
              <ArtistAvatar artist={artist} />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xl text-foreground truncate">{artist.name}</h3>
                <div className="mt-0.5"><CountryFlag countryCode={artist.countryCode} country={artist.country} /></div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${artist.type === "group" ? "bg-violet-500/15 text-violet-400" : "bg-pink-500/15 text-pink-400"}`}>
                  {artist.type === "group" ? `Group · ${artist.memberCount}` : "Solo"}
                </span>
              </div>
            </div>
            <div className="border-t border-border/50 pt-3 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Since {artist.activeSince}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Disc3 size={12} />
                {albumCountFor(artist.id)} albums
              </div>
            </div>
            <div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
              <button
                onClick={e => { e.stopPropagation(); onEdit(artist); }}
                className="flex-1 text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-lg py-1.5 flex items-center justify-center gap-1 transition-colors">
                <Pencil size={11} /> Edit
              </button>
              <button
                onClick={e => { e.stopPropagation(); onDelete(artist); }}
                className="flex-1 text-xs text-muted-foreground hover:text-destructive border border-border/50 hover:border-destructive/50 rounded-lg py-1.5 flex items-center justify-center gap-1 transition-colors">
                <Trash2 size={11} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Users size={36} className="mx-auto mb-3 opacity-40" />
          <p>No artists found</p>
        </div>
      )}
    </div>
  );
}

// ─── Albums View ──────────────────────────────────────────────────────────────

function AlbumsView({
  albums, artists, onSelect, onAdd, onEdit, onDeleteRequest,
}: {
  albums: Album[];
  artists: Artist[];
  onSelect: (id: string) => void;
  onAdd: () => void;
  onEdit: (a: Album) => void;
  onDeleteRequest: (a: Album) => void;
}) {
  const [search, setSearch] = useState("");
  const [filterCert, setFilterCert] = useState<"all" | Certification>("all");
  const [filterStream, setFilterStream] = useState<"all" | StreamingPlatform>("all");
  const [sort, setSort] = useState<"title" | "releaseYear" | "albumsSold">("title");

  const artistMap = useMemo(() => Object.fromEntries(artists.map(a => [a.id, a])), [artists]);

  const filtered = useMemo(() => {
    let list = albums;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(al => al.title.toLowerCase().includes(q) || artistMap[al.artistId]?.name.toLowerCase().includes(q));
    }
    if (filterCert !== "all") list = list.filter(al => al.certification === filterCert);
    if (filterStream !== "all") list = list.filter(al => al.streaming.includes(filterStream as StreamingPlatform));
    list = [...list].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "releaseYear") return b.releaseYear - a.releaseYear;
      return b.albumsSold - a.albumsSold;
    });
    return list;
  }, [albums, search, filterCert, filterStream, sort, artistMap]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Albums</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{filtered.length} of {albums.length} albums</p>
        </div>
        <button onClick={onAdd}
          className="flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus size={15} /> Add Album
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search albums or artists..."
            className="w-full bg-secondary border border-border rounded-xl pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <select value={filterCert} onChange={e => setFilterCert(e.target.value as "all" | Certification)}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="all">All Certifications</option>
          <option value="none">None</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="multi-platinum">Multi-Platinum</option>
        </select>
        <select value={filterStream} onChange={e => setFilterStream(e.target.value as "all" | StreamingPlatform)}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="all">All Platforms</option>
          <option value="spotify">Spotify</option>
          <option value="apple">Apple Music</option>
          <option value="amazon">Amazon Music</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value as "title" | "releaseYear" | "albumsSold")}
          className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="title">Sort: Title</option>
          <option value="releaseYear">Sort: Year (Newest)</option>
          <option value="albumsSold">Sort: Best Selling</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map(album => {
          const artist = artistMap[album.artistId];
          return (
            <div key={album.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
              onClick={() => onSelect(album.id)}>
              <div className="aspect-square bg-muted relative">
                <img src={album.coverUrl} alt={album.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 gap-1">
                  <button onClick={e => { e.stopPropagation(); onEdit(album); }}
                    className="p-1.5 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition-colors">
                    <Pencil size={12} className="text-white" />
                  </button>
                  <button onClick={e => { e.stopPropagation(); onDeleteRequest(album); }}
                    className="p-1.5 bg-white/10 backdrop-blur rounded-lg hover:bg-destructive/80 transition-colors">
                    <Trash2 size={12} className="text-white" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-foreground truncate leading-snug">{album.title}</h3>
                <p className="text-lg text-muted-foreground truncate mt-0.5">{artist?.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{album.releaseYear}</span>
                  <CertBadge cert={album.certification} />
                </div>
                <div className="mt-1.5">
                  <StreamingIcons platforms={album.streaming} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Disc3 size={36} className="mx-auto mb-3 opacity-40" />
          <p>No albums found</p>
        </div>
      )}
    </div>
  );
}

// ─── Artist Detail View ───────────────────────────────────────────────────────

function ArtistDetailView({
  artist, albums, onNavigateAlbum, onBack, onEdit, onDelete, onAddAlbum, onEditAlbum, onDeleteAlbum,
}: {
  artist: Artist;
  albums: Album[];
  onNavigateAlbum: (id: string) => void;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onAddAlbum: () => void;
  onEditAlbum: (a: Album) => void;
  onDeleteAlbum: (a: Album) => void;
}) {
  const [albumsOpen, setAlbumsOpen] = useState(true);

  const sortedAlbums = useMemo(() => [...albums].sort((a, b) => a.releaseYear - b.releaseYear), [albums]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft size={15} /> Back to Artists
      </button>

      {/* Hero */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-5">
          <ArtistAvatar artist={artist} size="xl" />
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              {artist.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <CountryFlag countryCode={artist.countryCode} country={artist.country} />
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${artist.type === "group" ? "bg-violet-500/15 text-violet-400" : "bg-pink-500/15 text-pink-400"}`}>
                {artist.type === "group" ? `Group · ${artist.memberCount} members` : "Solo Artist"}
              </span>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                Active since {artist.activeSince}
              </span>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full flex items-center gap-1">
                <Disc3 size={11} /> {sortedAlbums.length} albums
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={onEdit}
              className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-lg px-3 py-2 hover:text-foreground hover:border-primary/50 transition-all">
              <Pencil size={12} /> Edit Artist
            </button>
            <button onClick={onDelete}
              className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-lg px-3 py-2 hover:text-destructive hover:border-destructive/50 transition-all">
              <Trash2 size={12} /> Delete Artist
            </button>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
          <button onClick={() => setAlbumsOpen(o => !o)} className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors">
            Albums
            {albumsOpen ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
          </button>
          <button onClick={onAddAlbum}
            className="flex items-center gap-1.5 text-xs bg-primary/20 text-primary rounded-lg px-3 py-1.5 hover:bg-primary/30 transition-colors font-medium">
            <Plus size={12} /> Add Album
          </button>
        </div>

        {albumsOpen && (
          <div>
            {sortedAlbums.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm">No albums yet</div>
            ) : (
              sortedAlbums.map((album, i) => (
                <div key={album.id}
                  className={`flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-colors ${i < sortedAlbums.length - 1 ? "border-b border-border/30" : ""}`}>
                  <button className="flex items-center gap-4 flex-1 min-w-0 text-left" onClick={() => onNavigateAlbum(album.id)}>
                    <CoverImage url={album.coverUrl} title={album.title} size="md" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate hover:text-primary transition-colors">{album.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{album.label} · {album.releaseYear}</p>
                      <div className="flex items-center flex-wrap gap-2 mt-1.5">
                        <span className="text-xs text-muted-foreground">{formatSold(album.albumsSold)} sold</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{album.trackCount} tracks</span>
                        <CertBadge cert={album.certification} />
                        <StreamingIcons platforms={album.streaming} />
                      </div>
                    </div>
                  </button>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button onClick={() => onEditAlbum(album)}
                      className="p-1.5 text-muted-foreground hover:text-foreground border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                      <Pencil size={12} />
                    </button>
                    <button onClick={() => onDeleteAlbum(album)}
                      className="p-1.5 text-muted-foreground hover:text-destructive border border-border/50 rounded-lg hover:border-destructive/50 transition-all">
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Album Detail View ────────────────────────────────────────────────────────

function AlbumDetailView({
  album, artist, onNavigateArtist, onBack, onEdit, onDeleteRequest,
}: {
  album: Album;
  artist: Artist | null;
  onNavigateArtist: (id: string) => void;
  onBack: () => void;
  onEdit: () => void;
  onDeleteRequest: () => void;
}) {
  return (
    <div className="min-h-screen relative">
      {/* Blurred background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={album.coverUrl} alt="" className="w-full h-full object-cover scale-110 blur-3xl opacity-20" aria-hidden />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={15} /> Back
        </button>

        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* Cover */}
          <div className="flex-shrink-0 w-full sm:w-64">
            <div className="w-full sm:w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-muted">
              <img src={album.coverUrl} alt={album.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold uppercase tracking-widest text-primary mb-2">Album</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {album.title}
            </h1>

            {artist && (
              <button onClick={() => onNavigateArtist(artist.id)}
                className="flex items-center gap-2 mb-5 group">
                <ArtistAvatar artist={artist} size="md" />
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{artist.name}</span>
              </button>
            )}

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Record Label</p>
                <p className="text-sm font-medium text-foreground">{album.label || "—"}</p>
              </div>
              <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Release Year</p>
                <p className="text-sm font-medium text-foreground">{album.releaseYear}</p>
              </div>
              <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Albums Sold</p>
                <p className="text-sm font-medium text-foreground">{formatSold(album.albumsSold)}</p>
              </div>
              <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Tracks / Singles</p>
                <p className="text-sm font-medium text-foreground">{album.trackCount} / {album.singleCount}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <CertBadge cert={album.certification} />
              <StreamingIcons platforms={album.streaming} />
            </div>

            <div className="flex gap-3">
              <button onClick={onEdit}
                className="flex items-center gap-2 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
                <Pencil size={14} /> Edit Album
              </button>
              <button onClick={onDeleteRequest}
                className="flex items-center gap-2 bg-destructive/15 text-destructive rounded-xl px-4 py-2 text-sm font-medium hover:bg-destructive/25 transition-colors">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Catalog Context ──────────────────────────────────────────────────────────

interface CatalogContextValue {
  artists: Artist[];
  albums: Album[];
  openAddArtist: () => void;
  openEditArtist: (a: Artist) => void;
  openDeleteArtist: (a: Artist) => void;
  openAddAlbum: (defaultArtistId?: string) => void;
  openEditAlbum: (al: Album) => void;
  openDeleteAlbum: (al: Album) => void;
}

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used inside CatalogProvider");
  return ctx;
}

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [artists, setArtists] = useState<Artist[]>(SEED_ARTISTS);
  const [albums, setAlbums] = useState<Album[]>(SEED_ALBUMS);
  const nav = useNavigate();

  // Modal state
  const [artistFormOpen, setArtistFormOpen] = useState(false);
  const [editingArtist, setEditingArtist] = useState<Artist | undefined>();
  const [albumFormOpen, setAlbumFormOpen] = useState(false);
  const [editingAlbum, setEditingAlbum] = useState<Album | undefined>();
  const [albumFormDefaultArtist, setAlbumFormDefaultArtist] = useState<string | undefined>();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingAlbum, setDeletingAlbum] = useState<Album | null>(null);
  const [deleteArtistOpen, setDeleteArtistOpen] = useState(false);
  const [deletingArtist, setDeletingArtist] = useState<Artist | null>(null);

  function handleSaveArtist(data: Omit<Artist, "id">) {
    if (editingArtist) {
      setArtists(as => as.map(a => a.id === editingArtist.id ? { ...a, ...data } : a));
      toast.success(`${data.name} updated`);
    } else {
      setArtists(as => [...as, { ...data, id: genId() }]);
      toast.success(`${data.name} added to catalog`);
    }
    setEditingArtist(undefined);
  }

  function openAddArtist() { setEditingArtist(undefined); setArtistFormOpen(true); }
  function openEditArtist(a: Artist) { setEditingArtist(a); setArtistFormOpen(true); }
  function openDeleteArtist(a: Artist) { setDeletingArtist(a); setDeleteArtistOpen(true); }

  function handleDeleteArtist() {
    if (!deletingArtist) return;
    const id = deletingArtist.id;
    setArtists(as => as.filter(a => a.id !== id));
    setAlbums(als => als.filter(al => al.artistId !== id));
    toast.success(`${deletingArtist.name} removed from catalog`);
    setDeletingArtist(null);
    // Navigate away if on this artist's page or one of their album pages
    if (window.location.pathname.startsWith(`/artists/${id}`)) {
      nav("/artists");
    }
  }

  function handleSaveAlbum(data: Omit<Album, "id">) {
    if (editingAlbum) {
      setAlbums(als => als.map(al => al.id === editingAlbum.id ? { ...al, ...data } : al));
      toast.success(`"${data.title}" updated`);
    } else {
      setAlbums(als => [...als, { ...data, id: genId() }]);
      toast.success(`"${data.title}" added to catalog`);
    }
    setEditingAlbum(undefined);
    setAlbumFormDefaultArtist(undefined);
  }

  function openAddAlbum(defaultArtistId?: string) {
    setEditingAlbum(undefined);
    setAlbumFormDefaultArtist(defaultArtistId);
    setAlbumFormOpen(true);
  }
  function openEditAlbum(al: Album) { setEditingAlbum(al); setAlbumFormDefaultArtist(undefined); setAlbumFormOpen(true); }

  function openDeleteAlbum(al: Album) { setDeletingAlbum(al); setDeleteOpen(true); }

  function handleDeleteAlbum() {
    if (!deletingAlbum) return;
    const artistId = deletingAlbum.artistId;
    const albumId = deletingAlbum.id;
    setAlbums(als => als.filter(al => al.id !== albumId));
    toast.success(`"${deletingAlbum.title}" removed`);
    setDeletingAlbum(null);
    setDeleteOpen(false);
    // If currently on that album's detail page, navigate away
    if (window.location.pathname === `/albums/${albumId}`) {
      nav(`/artists/${artistId}`);
    }
  }

  const deletingAlbumArtist = deletingAlbum ? artists.find(a => a.id === deletingAlbum.artistId) ?? null : null;
  const deletingArtistAlbumCount = deletingArtist ? albums.filter(al => al.artistId === deletingArtist.id).length : 0;

  return (
    <CatalogContext.Provider value={{ artists, albums, openAddArtist, openEditArtist, openDeleteArtist, openAddAlbum, openEditAlbum, openDeleteAlbum }}>
      {children}
      <ArtistFormModal
        open={artistFormOpen}
        onClose={() => { setArtistFormOpen(false); setEditingArtist(undefined); }}
        initial={editingArtist}
        onSave={handleSaveArtist}
      />
      <AlbumFormModal
        open={albumFormOpen}
        onClose={() => { setAlbumFormOpen(false); setEditingAlbum(undefined); setAlbumFormDefaultArtist(undefined); }}
        initial={editingAlbum}
        artists={artists}
        defaultArtistId={albumFormDefaultArtist}
        onSave={handleSaveAlbum}
      />
      <DeleteAlbumModal
        open={deleteOpen}
        onClose={() => { setDeleteOpen(false); setDeletingAlbum(null); }}
        album={deletingAlbum}
        artist={deletingAlbumArtist}
        onConfirm={handleDeleteAlbum}
      />
      <DeleteArtistModal
        open={deleteArtistOpen}
        onClose={() => { setDeleteArtistOpen(false); setDeletingArtist(null); }}
        artist={deletingArtist}
        albumCount={deletingArtistAlbumCount}
        onConfirm={handleDeleteArtist}
      />
    </CatalogContext.Provider>
  );
}

// Re-export view components so pages can import them
export { ArtistsView, AlbumsView, ArtistDetailView, AlbumDetailView };

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return <RouterProvider router={router} />;
}
