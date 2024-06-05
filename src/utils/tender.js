const tender = (quantities, total) => {
    const sum = quantities.reduce((acc, quantity) => acc + quantity, 0);
    const shares = quantities.map(quantity => ((quantity / sum) * total).toFixed(3));
    
    return shares;
};
export default tender