
export function pxToRem(pxValue, baseFontSize = 16) {
    const px = parseFloat(pxValue);
    const baseRem = parseFloat(baseFontSize);
    if (isNaN(px) || isNaN(baseRem)) {
        throw new Error('Invalid input. Please provide valid numbers.');
    }
    const remValue = px / baseRem;
    return remValue.toFixed(4) + 'rem';
}


// export const fonter = (s1, s2, s3, s4) => {
//     return { xs: pxToRem(s1), md: pxToRem(s2),, lg: '' }
// }
