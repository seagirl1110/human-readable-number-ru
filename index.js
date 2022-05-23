const number = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function toReadable(num) {
    if (num >= 0 && num < 20) {
        return number[num];
    }

    if (num >= 20 && num < 100) {
        const integer = Math.floor(num / 10);
        const remainder = num % 10;
        if (remainder === 0) {
            return tens[integer];
        }
        return `${tens[integer]} ${number[remainder]}`;
    }

    if (num >= 100 && num < 1000) {
        const integer = Math.floor(num / 100);
        const remainder = num % 100;
        if (remainder === 0) {
            return hundreds[integer];
        }
        return `${hundreds[integer]} ${toReadable(remainder)}`;
    }

    if (num >= 1000 && num < 1000000) {
        let integer = Math.floor(num / 1000);
        const remainder = num % 1000;
        let value = 'тысяч';
        const integerStr = integer.toString();
        const end = +integerStr.slice(-1);
        const end10 = +integerStr.slice(-2, -1);
        let endStr;
        if (end10 !== 1) {
            if (end === 1) {
                value = 'тысяча';
                endStr = 'одна';
                integer -= 1;
            } else if (end === 2) {
                value = 'тысячи';
                endStr = 'две';
                integer -= 2;
            } else if (end === 3 || end === 4) {
                value = 'тысячи';
            }
        }
        if (endStr && remainder === 0) {
            return `${toReadable(integer)} ${endStr} ${value}`
        } else if (endStr) {
            return `${toReadable(integer)} ${endStr} ${value} ${toReadable(remainder)}`
        } else if (remainder === 0) {
            return `${toReadable(integer)} ${value}`
        }
        return `${toReadable(integer)} ${value} ${toReadable(remainder)}`
    }

    if (num >= 1000000 && num < 1000000000) {
        let integer = Math.floor(num / 1000000);
        const remainder = num % 1000000;
        let value = 'миллионов';
        const integerStr = integer.toString();
        const end = +integerStr.slice(-1);
        const end10 = +integerStr.slice(-2, -1);
        if (end10 !== 1) {
            if (end === 1) {
                value = 'миллион';
            } else if (end === 2 || end === 3 || end === 4) {
                value = 'миллиона';
            }
        }
        if (remainder === 0) {
            return `${toReadable(integer)} ${value}`
        }
        return `${toReadable(integer)} ${value} ${toReadable(remainder)}`
    }
}

console.log(toReadable(981562387));