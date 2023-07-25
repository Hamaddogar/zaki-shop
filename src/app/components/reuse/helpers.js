
export function pxToRem(pxValue, baseFontSize = 16) {
    const px = parseFloat(pxValue);
    const baseRem = parseFloat(baseFontSize);
    if (isNaN(px) || isNaN(baseRem)) {
        throw new Error('Invalid input. Please provide valid numbers.');
    }
    const remValue = px / baseRem;
    return remValue.toFixed(4) + 'rem';
}

export const pageLinks = [
    { href: '/', text: "Home" },
    { href: '/services', text: "Website" },
    { href: '/mobileapp', text: "Mobile Apps" },
    { href: '/marketing', text: "Marketing" },
    { href: '/invoices', text: "Invoices" },
]
export const activeLink = { color: '#1BFCB6' }
