export const toRoman = (inputN) => {
    let s = '';

    let thousands = Math.floor(inputN / 1000);
    let hundreds = inputN % 1000;
    let decs = inputN % 100;


    let sing = inputN % 10;
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