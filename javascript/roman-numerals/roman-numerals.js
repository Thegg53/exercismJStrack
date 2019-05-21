export const toRoman = (inputN) => {
    let s = '';




    let sing = inputN % 10;
    let decs = inputN % 100;
    decs = (decs - sing) / 10;
    let hundreds = inputN % 1000;
    hundreds = (hundreds - decs * 10 - sing) / 100;
    let thousands = Math.floor(inputN / 1000);


    if (hundreds != 0) {
        if (hundreds >= 1 && hundreds <= 3) {
            s = s + 'C'.repeat(hundreds);
        } else if (hundreds == 4) {
            s = s + 'CD';
        } else if (hundreds >= 5 && hundreds <= 8) {
            s = s + 'D' + 'C'.repeat(hundreds - 5);
        } else {
            s = s + 'CM'
        }
    }


    if (decs != 0) {
        if (decs >= 1 && decs <= 3) {
            s = s + 'X'.repeat(decs);
        } else if (decs == 4) {
            s = s + 'XL';
        } else if (decs >= 5 && decs <= 8) {
            s = s + 'L' + 'X'.repeat(decs - 5);
        } else {
            s = s + 'XC'
        }
    }


    if (sing != 0) {
        if (sing >= 1 && sing <= 3) {
            s = s + 'I'.repeat(sing);
        } else if (sing == 4) {
            s = s + 'IV';
        }
        else if (sing >= 5 && sing <= 8) {
            s = s + 'V' + 'I'.repeat(sing - 5);
        } else {
            s = s + 'IX'
        }
    }
    return s;
} 