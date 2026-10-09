const countries = [
    // ==========================================
    // 1. Recognized European Nations (44)
    // ==========================================
    {
        name: "Albania",
        code: "al",
        stats: { integration: 86, economy: 40, culture: 45, ecology: 48, foreign: 88, migration: 35 }
    },
    {
        name: "Andorra",
        code: "ad",
        stats: { integration: 52, economy: 20, culture: 55, ecology: 64, foreign: 40, migration: 45 }
    },
    {
        name: "Austria",
        code: "at",
        stats: { integration: 58, economy: 52, culture: 46, ecology: 68, foreign: 30, migration: 22 }
    },
    {
        name: "Belarus",
        code: "by",
        stats: { integration: 6, economy: 76, culture: 16, ecology: 20, foreign: 6, migration: 12 }
    },
    {
        name: "Belgium",
        code: "be",
        stats: { integration: 88, economy: 64, culture: 76, ecology: 66, foreign: 55, migration: 58 }
    },
    {
        name: "Bosnia and Herzegovina",
        code: "ba",
        stats: { integration: 68, economy: 46, culture: 34, ecology: 36, foreign: 62, migration: 28 }
    },
    {
        name: "Bulgaria",
        code: "bg",
        stats: { integration: 64, economy: 42, culture: 30, ecology: 32, foreign: 58, migration: 20 }
    },
    {
        name: "Croatia",
        code: "hr",
        stats: { integration: 74, economy: 50, culture: 38, ecology: 54, foreign: 74, migration: 22 }
    },
    {
        name: "Czech Republic",
        code: "cz",
        stats: { integration: 46, economy: 38, culture: 54, ecology: 36, foreign: 82, migration: 22 }
    },
    {
        name: "Denmark",
        code: "dk",
        stats: { integration: 48, economy: 66, culture: 64, ecology: 82, foreign: 78, migration: 18 }
    },
    {
        name: "Estonia",
        code: "ee",
        stats: { integration: 78, economy: 24, culture: 66, ecology: 56, foreign: 94, migration: 24 }
    },
    {
        name: "Finland",
        code: "fi",
        stats: { integration: 66, economy: 64, culture: 78, ecology: 74, foreign: 86, migration: 24 }
    },
    {
        name: "France",
        code: "fr",
        stats: { integration: 76, economy: 60, culture: 68, ecology: 64, foreign: 28, migration: 40 }
    },
    {
        name: "Germany",
        code: "de",
        stats: { integration: 78, economy: 52, culture: 70, ecology: 72, foreign: 65, migration: 52 }
    },
    {
        name: "Greece",
        code: "gr",
        stats: { integration: 62, economy: 54, culture: 42, ecology: 50, foreign: 70, migration: 20 }
    },
    {
        name: "Hungary",
        code: "hu",
        stats: { integration: 18, economy: 46, culture: 14, ecology: 22, foreign: 22, migration: 8 }
    },
    {
        name: "Iceland",
        code: "is",
        stats: { integration: 34, economy: 64, culture: 90, ecology: 88, foreign: 65, migration: 54 }
    },
    {
        name: "Ireland",
        code: "ie",
        stats: { integration: 82, economy: 34, culture: 78, ecology: 60, foreign: 35, migration: 56 }
    },
    {
        name: "Italy",
        code: "it",
        stats: { integration: 54, economy: 48, culture: 42, ecology: 46, foreign: 70, migration: 24 }
    },
    {
        name: "Latvia",
        code: "lv",
        stats: { integration: 74, economy: 42, culture: 38, ecology: 54, foreign: 92, migration: 22 }
    },
    {
        name: "Liechtenstein",
        code: "li",
        stats: { integration: 40, economy: 18, culture: 48, ecology: 62, foreign: 32, migration: 24 }
    },
    {
        name: "Lithuania",
        code: "lt",
        stats: { integration: 76, economy: 44, culture: 40, ecology: 52, foreign: 95, migration: 20 }
    },
    {
        name: "Luxembourg",
        code: "lu",
        stats: { integration: 92, economy: 48, culture: 84, ecology: 78, foreign: 54, migration: 72 }
    },
    {
        name: "Malta",
        code: "mt",
        stats: { integration: 75, economy: 50, culture: 58, ecology: 48, foreign: 42, migration: 22 }
    },
    {
        name: "Moldova",
        code: "md",
        stats: { integration: 74, economy: 44, culture: 36, ecology: 42, foreign: 72, migration: 32 }
    },
    {
        name: "Monaco",
        code: "mc",
        stats: { integration: 45, economy: 12, culture: 48, ecology: 58, foreign: 30, migration: 30 }
    },
    {
        name: "Montenegro",
        code: "me",
        stats: { integration: 80, economy: 44, culture: 38, ecology: 48, foreign: 78, migration: 30 }
    },
    {
        name: "Netherlands",
        code: "nl",
        stats: { integration: 62, economy: 36, culture: 76, ecology: 56, foreign: 74, migration: 28 }
    },
    {
        name: "North Macedonia",
        code: "mk",
        stats: { integration: 76, economy: 46, culture: 34, ecology: 38, foreign: 82, migration: 28 }
    },
    {
        name: "Norway",
        code: "no",
        stats: { integration: 40, economy: 72, culture: 82, ecology: 66, foreign: 84, migration: 42 }
    },
    {
        name: "Poland",
        code: "pl",
        stats: { integration: 44, economy: 56, culture: 28, ecology: 30, foreign: 92, migration: 16 }
    },
    {
        name: "Portugal",
        code: "pt",
        stats: { integration: 78, economy: 60, culture: 72, ecology: 70, foreign: 66, migration: 64 }
    },
    {
        name: "Romania",
        code: "ro",
        stats: { integration: 72, economy: 46, culture: 34, ecology: 40, foreign: 88, migration: 32 }
    },
    {
        name: "San Marino",
        code: "sm",
        stats: { integration: 56, economy: 38, culture: 54, ecology: 56, foreign: 36, migration: 34 }
    },
    {
        name: "Serbia",
        code: "rs",
        stats: { integration: 38, economy: 48, culture: 26, ecology: 30, foreign: 28, migration: 20 }
    },
    {
        name: "Slovakia",
        code: "sk",
        stats: { integration: 44, economy: 58, culture: 32, ecology: 34, foreign: 42, migration: 18 }
    },
    {
        name: "Slovenia",
        code: "si",
        stats: { integration: 72, economy: 62, culture: 64, ecology: 72, foreign: 58, migration: 36 }
    },
    {
        name: "Spain",
        code: "es",
        stats: { integration: 76, economy: 62, culture: 82, ecology: 74, foreign: 52, migration: 62 }
    },
    {
        name: "Sweden",
        code: "se",
        stats: { integration: 56, economy: 68, culture: 86, ecology: 84, foreign: 72, migration: 36 }
    },
    {
        name: "Switzerland",
        code: "ch",
        stats: { integration: 30, economy: 24, culture: 58, ecology: 62, foreign: 26, migration: 36 }
    },
    {
        name: "Ukraine",
        code: "ua",
        stats: { integration: 88, economy: 52, culture: 50, ecology: 44, foreign: 96, migration: 28 }
    },
    {
        name: "United Kingdom",
        code: "gb",
        stats: { integration: 24, economy: 30, culture: 62, ecology: 60, foreign: 88, migration: 26 }
    },
    {
        name: "Vatican City",
        code: "va",
        stats: { integration: 48, economy: 50, culture: 6, ecology: 65, foreign: 25, migration: 65 }
    },

    // ==========================================
    // 2. Transcontinental Nations (5)
    // ==========================================
    {
        name: "Russia",
        code: "ru",
        stats: { integration: 5, economy: 55, culture: 12, ecology: 14, foreign: 4, migration: 16 }
    },
    {
        name: "Turkey",
        code: "tr",
        stats: { integration: 22, economy: 42, culture: 22, ecology: 26, foreign: 46, migration: 22 }
    },
    {
        name: "Kazakhstan",
        code: "kz",
        stats: { integration: 12, economy: 52, culture: 24, ecology: 18, foreign: 32, migration: 26 }
    },
    {
        name: "Georgia",
        code: "ge",
        stats: { integration: 74, economy: 36, culture: 30, ecology: 44, foreign: 78, migration: 32 }
    },
    {
        name: "Azerbaijan",
        code: "az",
        stats: { integration: 16, economy: 48, culture: 26, ecology: 16, foreign: 36, migration: 24 }
    },

    // ==========================================
    // 3. Culturally European Nations (2)
    // ==========================================
    {
        name: "Cyprus",
        code: "cy",
        stats: { integration: 78, economy: 42, culture: 42, ecology: 52, foreign: 46, migration: 20 }
    },
    {
        name: "Armenia",
        code: "am",
        stats: { integration: 54, economy: 48, culture: 28, ecology: 40, foreign: 50, migration: 35 }
    },

    // ==========================================
    // 4. Disputed & Unrecognized Entities (8)
    // ==========================================
    {
        name: "Kosovo",
        code: "xk",
        flag: "https://flagcdn.com/w80/xk.png",
        stats: { integration: 92, economy: 38, culture: 44, ecology: 40, foreign: 98, migration: 34 }
    },
    {
        name: "Northern Cyprus",
        code: "trnc",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg/330px-Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg.png",
        stats: { integration: 14, economy: 42, culture: 42, ecology: 34, foreign: 35, migration: 20 }
    },
    {
        name: "Abkhazia",
        code: "abk",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/330px-Flag_of_the_Republic_of_Abkhazia.svg.png",
        stats: { integration: 8, economy: 62, culture: 22, ecology: 24, foreign: 8, migration: 16 }
    },
    {
        name: "South Ossetia",
        code: "sos",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_South_Ossetia.svg/330px-Flag_of_South_Ossetia.svg.png",
        stats: { integration: 6, economy: 64, culture: 20, ecology: 22, foreign: 6, migration: 15 }
    },
    {
        name: "Nagorno-Karabakh",
        code: "nkr",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_Artsakh.svg/330px-Flag_of_Artsakh.svg.png",
        stats: { integration: 22, economy: 50, culture: 24, ecology: 28, foreign: 18, migration: 20 }
    },
    {
        name: "Transnistria",
        code: "pmr",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Transnistria_%28state%29.svg/330px-Flag_of_Transnistria_%28state%29.svg.png",
        stats: { integration: 4, economy: 78, culture: 18, ecology: 16, foreign: 4, migration: 14 }
    },
    {
        name: "Donetsk Republic",
        code: "dpr",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Donetsk_People%27s_Republic.svg/330px-Flag_of_Donetsk_People%27s_Republic.svg.png",
        stats: { integration: 4, economy: 68, culture: 14, ecology: 10, foreign: 4, migration: 12 }
    },
    {
        name: "Lugansk Republic",
        code: "lpr",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_the_Luhansk_People%27s_Republic.svg/330px-Flag_of_the_Luhansk_People%27s_Republic.svg.png",
        stats: { integration: 4, economy: 68, culture: 14, ecology: 10, foreign: 4, migration: 12 }
    }
];

function getCountryFlagUrl(country) {
    if (country.flag) return country.flag;
    return `https://flagcdn.com/w80/${country.code}.png`;
}