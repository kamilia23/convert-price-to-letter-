// Fonction pour convertir le prix TTC en lettre
function NumberToLetter(nombre) {

    var letter = {
        0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept",
        8: "huit", 9: "neuf", 10: "dix", 11: "onze", 12: "douze", 13: "treize", 14: "quatorze",
        15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt",
        30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-dix",
        80: "quatre-vingt", 90: "quatre-vingt-dix"
    };

    var nb = parseFloat(nombre.toString().replace(/\./g, "").replace(",", "."));
    if (isNaN(nb)) return "Nombre non valide";
    if (nb < 0 || nb >= 1000000000000000) return "Dépassement de capacité ou nombre négatif non pris en charge";
    if (nb === 0) return letter[0]; // Cas du zéro

    // Séparation de la partie entière et de la partie décimale
    var parts = nombre.toString().split(",");
    var integerPart = parseInt(parts[0]);
    var decimalPart = parseInt(parts[1]);

    var numberToLetter = NumberToLetterIntegerPart(integerPart) + "";

    if (decimalPart > 0) {
        numberToLetter += " et " + NumberToLetterDecimalPart(decimalPart) + " centimes";
    }

    return numberToLetter;
}
function NumberToLetterIntegerPart(nb) {
    var letter = {
        0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept",
        8: "huit", 9: "neuf", 10: "dix", 11: "onze", 12: "douze", 13: "treize", 14: "quatorze",
        15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt",
        30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-et-onze",
        71: "soixante-et-onze", 72: "soixante-douze", 73: "soixante-treize", 74: "soixante-quatorze",
        75: "soixante-quinze", 76: "soixante-seize", 77: "soixante-dix-sept", 78: "soixante-dix-huit", 79: "soixante-dix-neuf", 80: "quatre-vingt", 90: "quatre-vingt-dix", 91: "quatre-vingt-onze",
        92: "quatre-vingt-douze",
        93: "quatre-vingt-treize",
        94: "quatre-vingt-quatorze",
        95: "quatre-vingt-quinze",
        96: "quatre-vingt-seize",
        97: "quatre-vingt-dix-sept",
        98: "quatre-vingt-dix-huit",
        99: "quatre-vingt-dix-neuf"
    };

    if (nb === 0) return '';

    var numberToLetter = '';
    // Correction pour les milliers
    if (nb >= 1000000) {
        var millions = Math.floor(nb / 1000000);
        numberToLetter += NumberToLetterIntegerPart(millions) + " million" + (millions > 1 ? "s " : " ");
        nb -= millions * 1000000;
    }
    // Correction pour les milliers
    if (nb >= 1000) {
        var thousands = Math.floor(nb / 1000);
        numberToLetter += (thousands === 1 ? "" : NumberToLetterIntegerPart(thousands)) + " mille ";
        nb -= thousands * 1000;
    }

    if (nb >= 100) {
        var hundreds = Math.floor(nb / 100);
        numberToLetter += (hundreds === 1 ? "cent" : letter[hundreds] + " cent ");
        nb -= hundreds * 100;
    }

    if (nb > 0) {
        if (numberToLetter !== '') numberToLetter += " ";
        if (nb <= 20 || nb % 10 === 0) {
            numberToLetter += letter[nb];
        } else if (nb >= 71 && nb <= 79) {
            numberToLetter += letter[nb];
        } else {
            var units = Math.floor(nb / 10) * 10;
            var remainder = nb % 10;
            numberToLetter += letter[units] + "-" + letter[remainder];
        }
    }

    return numberToLetter.trim();
}
function NumberToLetterDecimalPart(nb) {
    var letter = {
        0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept",
        8: "huit", 9: "neuf", 10: "dix", 11: "onze", 12: "douze", 13: "treize", 14: "quatorze",
        15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt",
        30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-et-onze",
        71: "soixante-et-onze", 72: "soixante-douze", 73: "soixante-treize", 74: "soixante-quatorze",
        75: "soixante-quinze", 76: "soixante-seize", 77: "soixante-dix-sept", 78: "soixante-dix-huit", 79: "soixante-dix-neuf", 80: "quatre-vingt", 90: "quatre-vingt-dix", 91: "quatre-vingt-onze",
        92: "quatre-vingt-douze",
        93: "quatre-vingt-treize",
        94: "quatre-vingt-quatorze",
        95: "quatre-vingt-quinze",
        96: "quatre-vingt-seize",
        97: "quatre-vingt-dix-sept",
        98: "quatre-vingt-dix-huit",
        99: "quatre-vingt-dix-neuf"
    };
    var numberToLetter = '';
    if (nb <= 20 || nb % 10 === 0) {
        numberToLetter += letter[nb];
    } else if (nb >= 71 && nb <= 79) {
        numberToLetter += letter[nb];
    } else if (nb >= 91 && nb <= 99) {
        numberToLetter += letter[nb];
    } else {
        var units = Math.floor(nb / 10) * 10;
        var remainder = nb % 10;
        numberToLetter += letter[units] + "-" + letter[remainder];
    }

    return numberToLetter.trim();
}

ttc =prompt('enter a number')

console.log('ttc', NumberToLetter(ttc))
