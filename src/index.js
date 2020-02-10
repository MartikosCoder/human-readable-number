const toReadable = number => {
    const base_strings = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    if (number === 0) return "zero";

    const hundreds_string = ~~(number / 100)
        ? `${base_strings[~~(number / 100)]} hundred`
        : "";

    const ten_info = {
        val: number % 100,
        cond: number % 100 >= 10 && number % 100 <= 20
    };
    const tenths = ten_info.cond ? ten_info.val : ~~(ten_info.val / 10) * 10;
    const tenths_string = tenths ? ` ${base_strings[tenths]}` : "";

    const ones = ten_info.cond ? 0 : ten_info.val % 10;
    const ones_string = ones ? ` ${base_strings[ones]}` : "";

    return `${hundreds_string}${tenths_string}${ones_string}`.trim();
};

module.exports = toReadable;
