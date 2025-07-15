/**
 * If you can read this, you are not supposed to be here.
 * Don't read this file and certainly don't change judge the code ;)
 */
const categories = {
    // important people
    DM001: {
        name: ["Delphine", "Mitch"],
        events: ["ceremonie", "receptie", "diner", "dansfeest"],
        hasCheckedIn: false
    },
    // FAMILIE
    DM302: {
        name: ["Mama", "Henk"],
        events: ["ceremonie", "receptie", "diner", "dansfeest"],
        hasCheckedIn: false
    },
    DM075: {
        name: ["Papa", "Juan", "Yilin"],
        events: ["ceremonie", "receptie", "diner", "dansfeest"],
        hasCheckedIn: true
    },
    DM183: {
        name: ["Bo", "Broerie"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM929: {
        name: ["Mama", "Papa"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM115: {
        name: ["Soeure", "Nick"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM252: {
        name: ["Oma"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM838: {
        name: ["Mamie", "Etienne"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM038: {
        name: ["Tante Saskia", "Nonkel Olivier"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM260: {
        name: ["Margaux", "Maxinne"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM663: {
        name: ["Nonkel Eddy"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM642: {
        name: ["Frederik"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM882: {
        name: ["Maaike"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },

    // VRIENDEN Delphine
    DM958: {
        name: ["Line", "Mattijs"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM826: {
        name: ["Emma"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM384: {
        name: ["Sofie", "Thomas"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM460: {
        name: ["Tine"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM069: {
        name: ["Anne-Laure"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM398: {
        name: ["Laura", "Kevin"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM039: {
        name: ["Tori"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM388: {
        name: ["Onerva"],
        events: ["ceremony", "reception", "dinner", "first dance"],
        hasCheckedIn: false,
    },
    DM785: {
        name: ["Sophie"],
        events: ["ceremony", "reception", "dinner", "first dance"],
        hasCheckedIn: false,
    },

    // Basket
    DM300: {
        name: ["Julie", "Wout"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM099: {
        name: ["Kathleen", "Iben"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM941: {
        name: ["Eva", "Louis"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM860: {
        name: ["Delphine", "Jonathan"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM394: {
        name: ["Iris", "Michiel"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM928: {
        name: ["Bram"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM165: {
        name: ["Severien", "Alex"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM116: {
        name: ["Maroushka", "Emiel"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM644: {
        name: ["Joachim"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM691: {
        name: ["Arne"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM549: {
        name: ["Gaëlle", "Jordy"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM276: {
        name: ["Immanuel"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },

    // vrienden Mitch
    DM963: {
        name: ["Eloïse", "Jérémie"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM437: {
        name: ["Nimuë", "Bryan"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM014: {
        name: ["Charlotte", "Thomas"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },

    // Australiers
    DM296: {
        name: ["Rachel", "Jath"],
        events: ["ceremony", "reception", "dinner", "first dance"],
        hasCheckedIn: false,
    },
    DM350: {
        name: ["Chelsea", "Matthew"],
        events: ["ceremony", "reception", "dinner", "first dance"],
        hasCheckedIn: false,
    },

    // VRIENDEN OUDERS
    DM352: {
        name: ["Annick", "Danny"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM442: {
        name: ["Linda", "Serge"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM327: {
        name: ["Katrien", "Chris"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: true
    },
    DM536: {
        name: ["Sabine", "Tom"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },
    DM899: {
        name: ["Nancy", "Raph"],
        events: ["ceremonie", "receptie", "avondeten", "dansfeest"],
        hasCheckedIn: false
    },

    // EXTRA

    // ouders
    DM086: {
        name: ["Marie-Anne", "Geert"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM703: {
        name: ["Hilde", "Philip"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM492: {
        name: ["Diane", "Luc"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM111: {
        name: ["Martine", "Erik"],
        events: ["receptie"],
        hasCheckedIn: true
    },
    DM181: {
        name: ["Dina", "Rudy"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM480: {
        name: ["Geert"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM581: {
        name: ["Kathy", "Matthieu"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM424: {
        name: ["Tamara", "Hans"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM219: {
        name: ["Cindy"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM119: {
        name: ["Caroline"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM208: {
        name: ["Valerie", "Michiel"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM449: {
        name: ["Mathias"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM774: {
        name: ["Kacey", "Arno"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM304: {
        name: ["Valérie L."],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM231: {
        name: ["Valérie J."],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM020: {
        name: ["Echo"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM911: {
        name: ["Charlotte"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM665: {
        name: ["Stefaan"],
        events: ["receptie"],
        hasCheckedIn: false
    },
    DM210: {
        name: ["Stijn"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM334: {
        name: ["Max"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM198: {
        name: ["Francesco"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM851: {
        name: ["Ngoni"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM180: {
        name: ["Igor"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM674: {
        name: ["Andrea"],
        events: ["reception"],
        hasCheckedIn: false
    },
    // collega's Mitch
    DM530: {
        name: ["Maarten"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM832: {
        name: ["Diederik"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM414: {
        name: ["Jens"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM280: {
        name: ["Bram"],
        events: ["reception"],
        hasCheckedIn: false
    },
    DM225: {
        name: ["Ignace"],
        events: ["reception"],
        hasCheckedIn: false
    },
    // grote tuin
    DM688: {
        name: ["Jonathan"], // de schrijver
        events: ["reception"],
        hasCheckedIn: false
    },
    DM864: {
        name: ["Arne"], // de schrijver
        events: ["reception"],
        hasCheckedIn: false
    },
    DM548: {
        name: ["Sarah"], // de schrijver
        events: ["reception"],
        hasCheckedIn: true
    },
    DM792: {
        name: ["Lucas"],
        events: ["reception"],
        hasCheckedIn: false
    },
}
