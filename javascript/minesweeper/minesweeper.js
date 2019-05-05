export { annotate };

const annotate = (iA) => {
    let oA = [];
    let nRows = iA.length;
    if (iA.length) {
        let nCols = iA[0].length;
        for (let i = 0; i < nRows; i++) {
            let aRow = [];
            if (i === 0) {//first row
                for (let j = 0; j < nCols; j++) {
                    if (j == 0) { //first Col
                        let n = 0;
                        if (nRows === 1) { //in the case that we only have one line..... that is a stupid game, but I have to pass the test :( 
                            n = calc([[0, 1]], iA);
                        } else if (nRows > 1) {
                            n = calc([[0, 1], [1, 0], [1, 1]], iA);
                        }
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else if (j < nCols - 1) { //middle cols
                        let n = 0;
                        if (nRows === 1) { //in the case that we only have one line..... that is a stupid game, but I have to pass the test :( 
                            n = calc([[0, j - 1], [0, j + 1]], iA);
                        } else if (nRows > 1) {
                            n = calc([[0, j - 1], [0, j + 1], [1, j - 1], [1, j], [1, j + 1]], iA);
                        }
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else { //last col
                        let n = 0;
                        if (nRows === 1) { //in the case that we only have one line..... that is a stupid game, but I have to pass the test :( 
                            n = calc([[0, j - 1]], iA);
                        } else if (nRows > 1) {
                            n = calc([[0, j - 1], [1, j], [1, j - 1]], iA);
                        }
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    }
                }
                oA.push(aRow.join('').replace(/0/g, ' '));
            } else if (i < nRows - 1) { //midle rows
                for (let j = 0; j < nCols; j++) {
                    if (j == 0) { //first Col
                        let n = calc([[i, j + 1], [i - 1, j], [i + 1, j], [i + 1, j + 1], [i - 1, j + 1]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else if (j < nCols - 1) { //middle cols
                        let n = calc([[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else { //last col
                        let n = calc([[i, j - 1], [i - 1, j], [i + 1, j], [i + 1, j - 1], [i - 1, j - 1]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    }
                }
                oA.push(aRow.join('').replace(/0/g, ' '));
            } else { //last row
                for (let j = 0; j < nCols; j++) {
                    if (j == 0) { //first Col
                        let n = calc([[i, 1], [i - 1, 0], [i - 1, 1]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else if (j < nCols - 1) { //middle cols
                        let n = calc([[i, j - 1], [i, j + 1], [i - 1, j - 1], [i - 1, j], [i - 1, j + 1]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    } else { //last col
                        let n = calc([[i, j - 1], [i - 1, j - 1], [i - 1, j]], iA);
                        iA[i].substr(j, 1) != '*' ? aRow.push(n) : aRow.push('*');
                    }
                }
                oA.push(aRow.join('').replace(/0/g, ' '));
            }
        }
    }
    return oA;
};

const calc = (locs, iA) => {
    let n = 0;
    locs.forEach(el => { if (iA[el[0]].substr(el[1], 1) === '*') n++ })
    return n;
}