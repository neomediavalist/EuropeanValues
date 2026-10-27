const parties = [
    {
        name: "European People's Party",
        abbr: "EPP",
        color: "#2563eb",
        logo: "party_images/epp.png", 
        stats: {
            integration: 74,
            economy: 30,
            culture: 38,
            ecology: 42,
            foreign: 82,
            migration: 22,
            horizon: 42
        }
    },
    {
        name: "Progressive Alliance of Socialists and Democrats",
        abbr: "S&D",
        color: "#e11d48",
        logo: "party_images/sandd.png", 
        stats: {
            integration: 80,
            economy: 70,
            culture: 78,
            ecology: 76,
            foreign: 64,
            migration: 64,
            horizon: 48
        }
    },
    {
        name: "Patriots for Europe",
        abbr: "Patriots",
        color: "#1e3a8a",
        logo: "party_images/pfe.png", 
        stats: {
            integration: 16,
            economy: 48,
            culture: 14,
            ecology: 16,
            foreign: 28,
            migration: 6,
            horizon: 10
        }
    },
    {
        name: "European Conservatives and Reformists",
        abbr: "ECR",
        color: "#0284c7",
        logo: "party_images/ecr.png", 
        stats: {
            integration: 32,
            economy: 24,
            culture: 22,
            ecology: 22,
            foreign: 88,
            migration: 14,
            horizon: 30
        }
    },
    {
        name: "Renew Europe",
        abbr: "Renew",
        color: "#e0920a",
        logo: "party_images/renew.png", 
        stats: {
            integration: 88,
            economy: 30,
            culture: 84,
            ecology: 64,
            foreign: 58,
            migration: 48,
            horizon: 64
        }
    },
    {
        name: "Greens / European Free Alliance",
        abbr: "Greens/EFA",
        color: "#059669",
        logo: "party_images/greensefa.png", 
        stats: {
            integration: 88,
            economy: 62,
            culture: 94,
            ecology: 96,
            foreign: 60,
            migration: 88,
            horizon: 68
        }
    },
    {
        name: "The Left in the European Parliament",
        abbr: "The Left",
        color: "#be1622",
        logo: "party_images/theleft.png", 
        stats: {
            integration: 40,
            economy: 90,
            culture: 88,
            ecology: 86,
            foreign: 18,
            migration: 88,
            horizon: 38
        }
    },
    {
        name: "Europe of Sovereign Nations",
        abbr: "ESN",
        color: "#334155",
        logo: "party_images/esn.png", 
        stats: {
            integration: 8,
            economy: 36,
            culture: 8,
            ecology: 12,
            foreign: 12,
            migration: 4,
            horizon: 6
        }
    },
    {
        name: "Volt Europa",
        abbr: "Volt",
        color: "#6b21a8",
        logo: "party_images/volt.png", 
        stats: {
            integration: 96,
            economy: 48,
            culture: 92,
            ecology: 86,
            foreign: 52,
            migration: 82,
            horizon: 72
        }
    },
    // ==========================================
    // Germany
    // ==========================================
    {
        name: "Social Democratic Party of Germany",
        abbr: "SPD",
        color: "#e11d48",
        logo: "party_images/spd.png",
        stats: {
            integration: 82,
            economy: 68,
            culture: 78,
            ecology: 72,
            foreign: 68,
            migration: 56,
            horizon: 48
        }
    },
    {
        name: "CDU/CSU",
        abbr: "CDU/CSU",
        color: "#18181b",
        logo: "party_images/cdu.png",
        stats: {
            integration: 74,
            economy: 32,
            culture: 38,
            ecology: 40,
            foreign: 84,
            migration: 24,
            horizon: 40
        }
    },
    {
        name: "Alliance 90 / The Greens",
        abbr: "Grüne",
        color: "#16a34a",
        logo: "party_images/gruene.png",
        stats: {
            integration: 90,
            economy: 60,
            culture: 92,
            ecology: 96,
            foreign: 70,
            migration: 82,
            horizon: 68
        }
    },
    {
        name: "Free Democratic Party",
        abbr: "FDP",
        color: "#eab308",
        logo: "party_images/fdp.png",
        stats: {
            integration: 80,
            economy: 14,
            culture: 76,
            ecology: 36,
            foreign: 78,
            migration: 44,
            horizon: 66
        }
    },
    {
        name: "Alternative for Germany",
        abbr: "AfD",
        color: "#0284c7",
        logo: "party_images/afd.png",
        stats: {
            integration: 8,
            economy: 26,
            culture: 10,
            ecology: 10,
            foreign: 18,
            migration: 4,
            horizon: 8
        }
    },
    {
        name: "Die Linke",
        abbr: "Die Linke",
        color: "#be123c",
        logo: "party_images/dielinke.png",
        stats: {
            integration: 54,
            economy: 90,
            culture: 90,
            ecology: 84,
            foreign: 16,
            migration: 92,
            horizon: 46
        }
    },
    {
        name: "Bündnis Sahra Wagenknecht",
        abbr: "BSW",
        color: "#7e22ce",
        logo: "party_images/bsw.png",
        stats: {
            integration: 22,
            economy: 82,
            culture: 28,
            ecology: 30,
            foreign: 14,
            migration: 18,
            horizon: 12
        }
    },
    // ==========================================
    // France
    // ==========================================
    {
        name: "Renaissance",
        abbr: "RE",
        color: "#d97706",
        logo: "party_images/re.png",
        stats: {
            integration: 88,
            economy: 34,
            culture: 72,
            ecology: 58,
            foreign: 26,
            migration: 42,
            horizon: 28
        }
    },
    {
        name: "National Rally",
        abbr: "RN",
        color: "#1e3a8a",
        logo: "party_images/rn.png",
        stats: {
            integration: 14,
            economy: 54,
            culture: 16,
            ecology: 20,
            foreign: 22,
            migration: 6,
            horizon: 8
        }
    },
    {
        name: "France Unbowed",
        abbr: "LFI",
        color: "#dc2626",
        logo: "party_images/lfi.png",
        stats: {
            integration: 42,
            economy: 88,
            culture: 86,
            ecology: 86,
            foreign: 18,
            migration: 86,
            horizon: 30
        }
    },
    {
        name: "The Republicans",
        abbr: "LR",
        color: "#2563eb",
        logo: "party_images/lr.png",
        stats: {
            integration: 52,
            economy: 24,
            culture: 28,
            ecology: 30,
            foreign: 42,
            migration: 16,
            horizon: 22
        }
    },
    {
        name: "Socialist Party",
        abbr: "PS (FR)",
        color: "#f43f5e",
        logo: "party_images/ps_fr.png",
        stats: {
            integration: 82,
            economy: 72,
            culture: 82,
            ecology: 78,
            foreign: 48,
            migration: 70,
            horizon: 42
        }
    },
    {
        name: "The Ecologists",
        abbr: "LE",
        color: "#15803d",
        logo: "party_images/le_fr.png",
        stats: {
            integration: 88,
            economy: 74,
            culture: 92,
            ecology: 98,
            foreign: 44,
            migration: 88,
            horizon: 56
        }
    },
    // ==========================================
    // Italy
    // ==========================================
    {
        name: "Brothers of Italy",
        abbr: "FdI",
        color: "#0369a1",
        logo: "party_images/fdi.png",
        stats: {
            integration: 34,
            economy: 38,
            culture: 18,
            ecology: 24,
            foreign: 88,
            migration: 10,
            horizon: 24
        }
    },
    {
        name: "Democratic Party",
        abbr: "PD",
        color: "#e11d48",
        logo: "party_images/pd_it.png",
        stats: {
            integration: 86,
            economy: 68,
            culture: 84,
            ecology: 78,
            foreign: 68,
            migration: 72,
            horizon: 54
        }
    },
    {
        name: "Five Star Movement",
        abbr: "M5S",
        color: "#ca8a04",
        logo: "party_images/m5s.png",
        stats: {
            integration: 56,
            economy: 78,
            culture: 72,
            ecology: 82,
            foreign: 28,
            migration: 52,
            horizon: 36
        }
    },
    {
        name: "League",
        abbr: "Lega",
        color: "#16a34a",
        logo: "party_images/lega.png",
        stats: {
            integration: 16,
            economy: 34,
            culture: 14,
            ecology: 18,
            foreign: 36,
            migration: 6,
            horizon: 10
        }
    },
    {
        name: "Forward Italy",
        abbr: "FI",
        color: "#0284c7",
        logo: "party_images/fi.png",
        stats: {
            integration: 76,
            economy: 22,
            culture: 42,
            ecology: 36,
            foreign: 86,
            migration: 26,
            horizon: 48
        }
    },
    {
        name: "Greens and Left Alliance",
        abbr: "AVS",
        color: "#991b1b",
        logo: "party_images/avs.png",
        stats: {
            integration: 80,
            economy: 86,
            culture: 92,
            ecology: 94,
            foreign: 26,
            migration: 90,
            horizon: 50
        }
    }
];
