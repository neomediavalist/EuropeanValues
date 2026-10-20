const countries = [
    // ==========================================
    // 1. Recognized European Nations (44)
    // ==========================================
    {
        name: "Albania",
        code: "al",
        stats: { integration: 88, economy: 42, culture: 46, ecology: 50, foreign: 94, migration: 26, horizon: 40 }
    },
    {
        name: "Andorra",
        code: "ad",
        stats: { integration: 48, economy: 18, culture: 52, ecology: 64, foreign: 36, migration: 38, horizon: 24 }
    },
    {
        name: "Austria",
        code: "at",
        stats: { integration: 50, economy: 48, culture: 42, ecology: 62, foreign: 24, migration: 14, horizon: 18 }
    },
    {
        name: "Belarus",
        code: "by",
        stats: { integration: 4, economy: 78, culture: 14, ecology: 18, foreign: 4, migration: 12, horizon: 6 }
    },
    {
        name: "Belgium",
        code: "be",
        stats: { integration: 84, economy: 56, culture: 80, ecology: 60, foreign: 60, migration: 36, horizon: 48 }
    },
    {
        name: "Bosnia and Herzegovina",
        code: "ba",
        stats: { integration: 66, economy: 44, culture: 30, ecology: 30, foreign: 48, migration: 24, horizon: 30 }
    },
    {
        name: "Bulgaria",
        code: "bg",
        stats: { integration: 62, economy: 36, culture: 26, ecology: 28, foreign: 54, migration: 18, horizon: 24 }
    },
    {
        name: "Croatia",
        code: "hr",
        stats: { integration: 72, economy: 44, culture: 32, ecology: 50, foreign: 74, migration: 16, horizon: 24 }
    },
    {
        name: "Czech Republic",
        code: "cz",
        stats: { integration: 44, economy: 32, culture: 52, ecology: 30, foreign: 88, migration: 18, horizon: 38 }
    },
    {
        name: "Denmark",
        code: "dk",
        stats: { integration: 54, economy: 66, culture: 64, ecology: 84, foreign: 86, migration: 14, horizon: 46 }
    },
    {
        name: "Estonia",
        code: "ee",
        stats: { integration: 80, economy: 22, culture: 72, ecology: 54, foreign: 96, migration: 20, horizon: 52 }
    },
    {
        name: "Finland",
        code: "fi",
        stats: { integration: 58, economy: 40, culture: 68, ecology: 64, foreign: 92, migration: 16, horizon: 34 }
    },
    {
        name: "France",
        code: "fr",
        stats: { integration: 74, economy: 56, culture: 68, ecology: 64, foreign: 26, migration: 48, horizon: 18 }
    },
    {
        name: "Germany",
        code: "de",
        stats: { integration: 76, economy: 48, culture: 74, ecology: 68, foreign: 70, migration: 34, horizon: 38 }
    },
    {
        name: "Greece",
        code: "gr",
        stats: { integration: 68, economy: 36, culture: 52, ecology: 56, foreign: 78, migration: 14, horizon: 22 }
    },
    {
        name: "Hungary",
        code: "hu",
        stats: { integration: 68, economy: 42, culture: 46, ecology: 45, foreign: 66, migration: 22, horizon: 36 }
    },
    {
        name: "Iceland",
        code: "is",
        stats: { integration: 32, economy: 66, culture: 92, ecology: 92, foreign: 68, migration: 44, horizon: 52 }
    },
    {
        name: "Ireland",
        code: "ie",
        stats: { integration: 80, economy: 32, culture: 80, ecology: 54, foreign: 38, migration: 36, horizon: 66 }
    },
    {
        name: "Italy",
        code: "it",
        stats: { integration: 48, economy: 44, culture: 34, ecology: 34, foreign: 78, migration: 16, horizon: 22 }
    },
    {
        name: "Latvia",
        code: "lv",
        stats: { integration: 76, economy: 38, culture: 46, ecology: 48, foreign: 96, migration: 16, horizon: 42 }
    },
    {
        name: "Liechtenstein",
        code: "li",
        stats: { integration: 38, economy: 16, culture: 50, ecology: 66, foreign: 28, migration: 20, horizon: 20 }
    },
    {
        name: "Lithuania",
        code: "lt",
        stats: { integration: 74, economy: 52, culture: 38, ecology: 48, foreign: 96, migration: 16, horizon: 36 }
    },
    {
        name: "Luxembourg",
        code: "lu",
        stats: { integration: 90, economy: 38, culture: 82, ecology: 70, foreign: 62, migration: 58, horizon: 54 }
    },
    {
        name: "Malta",
        code: "mt",
        stats: { integration: 70, economy: 46, culture: 68, ecology: 38, foreign: 34, migration: 14, horizon: 28 }
    },
    {
        name: "Moldova",
        code: "md",
        stats: { integration: 86, economy: 40, culture: 42, ecology: 44, foreign: 76, migration: 34, horizon: 34 }
    },
    {
        name: "Monaco",
        code: "mc",
        stats: { integration: 34, economy: 10, culture: 48, ecology: 62, foreign: 30, migration: 18, horizon: 24 }
    },
    {
        name: "Montenegro",
        code: "me",
        stats: { integration: 88, economy: 42, culture: 40, ecology: 44, foreign: 82, migration: 28, horizon: 32 }
    },
    {
        name: "Netherlands",
        code: "nl",
        stats: { integration: 50, economy: 30, culture: 68, ecology: 38, foreign: 82, migration: 14, horizon: 48 }
    },
    {
        name: "North Macedonia",
        code: "mk",
        stats: { integration: 62, economy: 42, culture: 30, ecology: 32, foreign: 68, migration: 22, horizon: 26 }
    },
    {
        name: "Norway",
        code: "no",
        stats: { integration: 36, economy: 74, culture: 86, ecology: 62, foreign: 90, migration: 36, horizon: 46 }
    },
    {
        name: "Poland",
        code: "pl",
        stats: { integration: 74, economy: 46, culture: 48, ecology: 42, foreign: 94, migration: 18, horizon: 36 }
    },
    {
        name: "Portugal",
        code: "pt",
        stats: { integration: 76, economy: 42, culture: 68, ecology: 68, foreign: 72, migration: 34, horizon: 62 }
    },
    {
        name: "Romania",
        code: "ro",
        stats: { integration: 74, economy: 44, culture: 30, ecology: 38, foreign: 92, migration: 24, horizon: 26 }
    },
    {
        name: "San Marino",
        code: "sm",
        stats: { integration: 66, economy: 28, culture: 56, ecology: 58, foreign: 34, migration: 22, horizon: 22 }
    },
    {
        name: "Serbia",
        code: "rs",
        stats: { integration: 30, economy: 44, culture: 22, ecology: 24, foreign: 20, migration: 16, horizon: 16 }
    },
    {
        name: "Slovakia",
        code: "sk",
        stats: { integration: 34, economy: 62, culture: 22, ecology: 26, foreign: 24, migration: 10, horizon: 14 }
    },
    {
        name: "Slovenia",
        code: "si",
        stats: { integration: 76, economy: 66, culture: 78, ecology: 76, foreign: 48, migration: 42, horizon: 38 }
    },
    {
        name: "Spain",
        code: "es",
        stats: { integration: 82, economy: 68, culture: 88, ecology: 78, foreign: 42, migration: 52, horizon: 56 }
    },
    {
        name: "Sweden",
        code: "se",
        stats: { integration: 52, economy: 38, culture: 70, ecology: 44, foreign: 88, migration: 14, horizon: 46 }
    },
    {
        name: "Switzerland",
        code: "ch",
        stats: { integration: 24, economy: 22, culture: 58, ecology: 52, foreign: 16, migration: 26, horizon: 32 }
    },
    {
        name: "Ukraine",
        code: "ua",
        stats: { integration: 94, economy: 46, culture: 54, ecology: 42, foreign: 98, migration: 26, horizon: 44 }
    },
    {
        name: "United Kingdom",
        code: "gb",
        stats: { integration: 42, economy: 52, culture: 68, ecology: 76, foreign: 90, migration: 32, horizon: 82 }
    },
    {
        name: "Vatican City",
        code: "va",
        stats: { integration: 50, economy: 68, culture: 8, ecology: 84, foreign: 22, migration: 88, horizon: 46 }
    },

    // ==========================================
    // 2. Transcontinental Nations (5)
    // ==========================================
    {
        name: "Russia",
        code: "ru",
        stats: { integration: 0, economy: 68, culture: 6, ecology: 12, foreign: 2, migration: 12, horizon: 0 }
    },
    {
        name: "Turkey",
        code: "tr",
        stats: { integration: 16, economy: 36, culture: 18, ecology: 28, foreign: 40, migration: 16, horizon: 20 }
    },
    {
        name: "Kazakhstan",
        code: "kz",
        stats: { integration: 16, economy: 44, culture: 36, ecology: 24, foreign: 46, migration: 26, horizon: 28 }
    },
    {
        name: "Georgia",
        code: "ge",
        stats: { integration: 26, economy: 32, culture: 16, ecology: 36, foreign: 34, migration: 26, horizon: 22 }
    },
    {
        name: "Azerbaijan",
        code: "az",
        stats: { integration: 10, economy: 56, culture: 22, ecology: 20, foreign: 30, migration: 16, horizon: 16 }
    },

    // ==========================================
    // 3. Culturally European Nations (2)
    // ==========================================
    {
        name: "Cyprus",
        code: "cy",
        stats: { integration: 80, economy: 36, culture: 44, ecology: 44, foreign: 74, migration: 12, horizon: 24 }
    },
    {
        name: "Armenia",
        code: "am",
        stats: { integration: 82, economy: 44, culture: 36, ecology: 38, foreign: 76, migration: 28, horizon: 80 }
    },

    // ==========================================
    // 4. Disputed & Unrecognized Entities (8)
    // ==========================================
    {
        name: "Kosovo",
        code: "xk",
        flag: "https://flagcdn.com/w80/xk.png",
        stats: { integration: 90, economy: 44, culture: 50, ecology: 24, foreign: 98, migration: 20, horizon: 74 }
    },
    {
        name: "Northern Cyprus",
        code: "trnc",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg/330px-Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg.png",
        stats: { integration: 42, economy: 52, culture: 64, ecology: 32, foreign: 42, migration: 26, horizon: 32 }
    },
    {
        name: "Abkhazia",
        code: "abk",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/330px-Flag_of_the_Republic_of_Abkhazia.svg.png",
        stats: { integration: 4, economy: 66, culture: 18, ecology: 34, foreign: 4, migration: 8, horizon: 6 }
    },
    {
        name: "South Ossetia",
        code: "sos",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_South_Ossetia.svg/330px-Flag_of_South_Ossetia.svg.png",
        stats: { integration: 2, economy: 74, culture: 14, ecology: 30, foreign: 2, migration: 6, horizon: 4 }
    },
    {
        name: "Transnistria",
        code: "pmr",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Transnistria_%28state%29.svg/330px-Flag_of_Transnistria_%28state%29.svg.png",
        stats: { integration: 12, economy: 68, culture: 16, ecology: 18, foreign: 4, migration: 10, horizon: 8 }
    }
];

function getCountryFlagUrl(country) {
    if (country.flag) return country.flag;
    return `https://flagcdn.com/w80/${country.code}.png`;
}
