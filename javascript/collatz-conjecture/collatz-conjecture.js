export const steps = (iNumber) => {
    let counter = 0;
    while (iNumber !== 1) {
        iNumber % 2 === 0 ? iNumber = iNumber / 2 : iNumber = 3 * iNumber + 1;
        counter++;
    }
    return counter;
};