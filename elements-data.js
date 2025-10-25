// Periodic Table Element Data
const elements = [
    // Period 1
    { symbol: "H", name: "Hydrogen", number: 1, category: "nonmetal", row: 1, col: 1 },
    { symbol: "He", name: "Helium", number: 2, category: "noble-gas", row: 1, col: 18 },
    
    // Period 2
    { symbol: "Li", name: "Lithium", number: 3, category: "alkali-metal", row: 2, col: 1 },
    { symbol: "Be", name: "Beryllium", number: 4, category: "alkaline-earth", row: 2, col: 2 },
    { symbol: "B", name: "Boron", number: 5, category: "metalloid", row: 2, col: 13 },
    { symbol: "C", name: "Carbon", number: 6, category: "nonmetal", row: 2, col: 14 },
    { symbol: "N", name: "Nitrogen", number: 7, category: "nonmetal", row: 2, col: 15 },
    { symbol: "O", name: "Oxygen", number: 8, category: "nonmetal", row: 2, col: 16 },
    { symbol: "F", name: "Fluorine", number: 9, category: "halogen", row: 2, col: 17 },
    { symbol: "Ne", name: "Neon", number: 10, category: "noble-gas", row: 2, col: 18 },
    
    // Period 3
    { symbol: "Na", name: "Sodium", number: 11, category: "alkali-metal", row: 3, col: 1 },
    { symbol: "Mg", name: "Magnesium", number: 12, category: "alkaline-earth", row: 3, col: 2 },
    { symbol: "Al", name: "Aluminum", number: 13, category: "metal", row: 3, col: 13 },
    { symbol: "Si", name: "Silicon", number: 14, category: "metalloid", row: 3, col: 14 },
    { symbol: "P", name: "Phosphorus", number: 15, category: "nonmetal", row: 3, col: 15 },
    { symbol: "S", name: "Sulfur", number: 16, category: "nonmetal", row: 3, col: 16 },
    { symbol: "Cl", name: "Chlorine", number: 17, category: "halogen", row: 3, col: 17 },
    { symbol: "Ar", name: "Argon", number: 18, category: "noble-gas", row: 3, col: 18 },
    
    // Period 4
    { symbol: "K", name: "Potassium", number: 19, category: "alkali-metal", row: 4, col: 1 },
    { symbol: "Ca", name: "Calcium", number: 20, category: "alkaline-earth", row: 4, col: 2 },
    { symbol: "Sc", name: "Scandium", number: 21, category: "transition-metal", row: 4, col: 3 },
    { symbol: "Ti", name: "Titanium", number: 22, category: "transition-metal", row: 4, col: 4 },
    { symbol: "V", name: "Vanadium", number: 23, category: "transition-metal", row: 4, col: 5 },
    { symbol: "Cr", name: "Chromium", number: 24, category: "transition-metal", row: 4, col: 6 },
    { symbol: "Mn", name: "Manganese", number: 25, category: "transition-metal", row: 4, col: 7 },
    { symbol: "Fe", name: "Iron", number: 26, category: "transition-metal", row: 4, col: 8 },
    { symbol: "Co", name: "Cobalt", number: 27, category: "transition-metal", row: 4, col: 9 },
    { symbol: "Ni", name: "Nickel", number: 28, category: "transition-metal", row: 4, col: 10 },
    { symbol: "Cu", name: "Copper", number: 29, category: "transition-metal", row: 4, col: 11 },
    { symbol: "Zn", name: "Zinc", number: 30, category: "transition-metal", row: 4, col: 12 },
    { symbol: "Ga", name: "Gallium", number: 31, category: "metal", row: 4, col: 13 },
    { symbol: "Ge", name: "Germanium", number: 32, category: "metalloid", row: 4, col: 14 },
    { symbol: "As", name: "Arsenic", number: 33, category: "metalloid", row: 4, col: 15 },
    { symbol: "Se", name: "Selenium", number: 34, category: "nonmetal", row: 4, col: 16 },
    { symbol: "Br", name: "Bromine", number: 35, category: "halogen", row: 4, col: 17 },
    { symbol: "Kr", name: "Krypton", number: 36, category: "noble-gas", row: 4, col: 18 },
    
    // Period 5
    { symbol: "Rb", name: "Rubidium", number: 37, category: "alkali-metal", row: 5, col: 1 },
    { symbol: "Sr", name: "Strontium", number: 38, category: "alkaline-earth", row: 5, col: 2 },
    { symbol: "Y", name: "Yttrium", number: 39, category: "transition-metal", row: 5, col: 3 },
    { symbol: "Zr", name: "Zirconium", number: 40, category: "transition-metal", row: 5, col: 4 },
    { symbol: "Nb", name: "Niobium", number: 41, category: "transition-metal", row: 5, col: 5 },
    { symbol: "Mo", name: "Molybdenum", number: 42, category: "transition-metal", row: 5, col: 6 },
    { symbol: "Tc", name: "Technetium", number: 43, category: "transition-metal", row: 5, col: 7 },
    { symbol: "Ru", name: "Ruthenium", number: 44, category: "transition-metal", row: 5, col: 8 },
    { symbol: "Rh", name: "Rhodium", number: 45, category: "transition-metal", row: 5, col: 9 },
    { symbol: "Pd", name: "Palladium", number: 46, category: "transition-metal", row: 5, col: 10 },
    { symbol: "Ag", name: "Silver", number: 47, category: "transition-metal", row: 5, col: 11 },
    { symbol: "Cd", name: "Cadmium", number: 48, category: "transition-metal", row: 5, col: 12 },
    { symbol: "In", name: "Indium", number: 49, category: "metal", row: 5, col: 13 },
    { symbol: "Sn", name: "Tin", number: 50, category: "metal", row: 5, col: 14 },
    { symbol: "Sb", name: "Antimony", number: 51, category: "metalloid", row: 5, col: 15 },
    { symbol: "Te", name: "Tellurium", number: 52, category: "metalloid", row: 5, col: 16 },
    { symbol: "I", name: "Iodine", number: 53, category: "halogen", row: 5, col: 17 },
    { symbol: "Xe", name: "Xenon", number: 54, category: "noble-gas", row: 5, col: 18 },
    
    // Period 6
    { symbol: "Cs", name: "Cesium", number: 55, category: "alkali-metal", row: 6, col: 1 },
    { symbol: "Ba", name: "Barium", number: 56, category: "alkaline-earth", row: 6, col: 2 },
    { symbol: "La", name: "Lanthanum", number: 57, category: "lanthanide", row: 6, col: 3 },
    { symbol: "Hf", name: "Hafnium", number: 72, category: "transition-metal", row: 6, col: 4 },
    { symbol: "Ta", name: "Tantalum", number: 73, category: "transition-metal", row: 6, col: 5 },
    { symbol: "W", name: "Tungsten", number: 74, category: "transition-metal", row: 6, col: 6 },
    { symbol: "Re", name: "Rhenium", number: 75, category: "transition-metal", row: 6, col: 7 },
    { symbol: "Os", name: "Osmium", number: 76, category: "transition-metal", row: 6, col: 8 },
    { symbol: "Ir", name: "Iridium", number: 77, category: "transition-metal", row: 6, col: 9 },
    { symbol: "Pt", name: "Platinum", number: 78, category: "transition-metal", row: 6, col: 10 },
    { symbol: "Au", name: "Gold", number: 79, category: "transition-metal", row: 6, col: 11 },
    { symbol: "Hg", name: "Mercury", number: 80, category: "transition-metal", row: 6, col: 12 },
    { symbol: "Tl", name: "Thallium", number: 81, category: "metal", row: 6, col: 13 },
    { symbol: "Pb", name: "Lead", number: 82, category: "metal", row: 6, col: 14 },
    { symbol: "Bi", name: "Bismuth", number: 83, category: "metal", row: 6, col: 15 },
    { symbol: "Po", name: "Polonium", number: 84, category: "metalloid", row: 6, col: 16 },
    { symbol: "At", name: "Astatine", number: 85, category: "halogen", row: 6, col: 17 },
    { symbol: "Rn", name: "Radon", number: 86, category: "noble-gas", row: 6, col: 18 },
    
    // Period 7
    { symbol: "Fr", name: "Francium", number: 87, category: "alkali-metal", row: 7, col: 1 },
    { symbol: "Ra", name: "Radium", number: 88, category: "alkaline-earth", row: 7, col: 2 },
    { symbol: "Ac", name: "Actinium", number: 89, category: "actinide", row: 7, col: 3 },
];

// Molecular Bond Rules
const bondRules = {
    "H,H": { formula: "H₂", name: "Hydrogen Gas" },
    "H,O": { formula: "H₂O", name: "Water" },
    "H,H,O": { formula: "H₂O", name: "Water" },
    "Na,Cl": { formula: "NaCl", name: "Salt" },
    "C,O": { formula: "CO", name: "Carbon Monoxide" },
    "C,O,O": { formula: "CO₂", name: "Carbon Dioxide" },
    "N,H": { formula: "NH", name: "Imidogen" },
    "N,H,H": { formula: "NH₂", name: "Amidogen" },
    "N,H,H,H": { formula: "NH₃", name: "Ammonia" },
    "C,H": { formula: "CH", name: "Methylidyne" },
    "C,H,H": { formula: "CH₂", name: "Methylene" },
    "C,H,H,H": { formula: "CH₃", name: "Methyl" },
    "C,H,H,H,H": { formula: "CH₄", name: "Methane" },
    "N,O": { formula: "NO", name: "Nitric Oxide" },
    "N,O,O": { formula: "NO₂", name: "Nitrogen Dioxide" },
    "S,O": { formula: "SO", name: "Sulfur Monoxide" },
    "S,O,O": { formula: "SO₂", name: "Sulfur Dioxide" },
    "Ca,C,O,O,O": { formula: "CaCO₃", name: "Calcium Carbonate" },
    "Fe,O": { formula: "FeO", name: "Iron Oxide" },
    "Cu,O": { formula: "CuO", name: "Copper Oxide" },
    "Mg,O": { formula: "MgO", name: "Magnesium Oxide" },
    "Al,O": { formula: "AlO", name: "Aluminum Oxide" },
    "K,Cl": { formula: "KCl", name: "Potassium Chloride" },
    "Ca,Cl": { formula: "CaCl", name: "Calcium Chloride" },
    "Ca,Cl,Cl": { formula: "CaCl₂", name: "Calcium Chloride" },
    "Ag,Cl": { formula: "AgCl", name: "Silver Chloride" },
    "H,Cl": { formula: "HCl", name: "Hydrochloric Acid" },
    "H,F": { formula: "HF", name: "Hydrogen Fluoride" },
    "H,Br": { formula: "HBr", name: "Hydrogen Bromide" },
    "H,I": { formula: "HI", name: "Hydrogen Iodide" },
    "Li,F": { formula: "LiF", name: "Lithium Fluoride" },
    "Na,F": { formula: "NaF", name: "Sodium Fluoride" },
    "K,F": { formula: "KF", name: "Potassium Fluoride" },
};

// Function to check if elements can bond
function checkBond(elementSymbols) {
    // Sort the symbols to create a consistent key
    const sortedSymbols = [...elementSymbols].sort();
    const key = sortedSymbols.join(',');
    
    // Check exact match first
    if (bondRules[key]) {
        return bondRules[key];
    }
    
    // Check for permutations and subsets
    const uniqueSymbols = [...new Set(elementSymbols)];
    
    // Try all permutations of different lengths
    for (let len = 2; len <= elementSymbols.length; len++) {
        const combinations = getCombinations(elementSymbols, len);
        for (const combo of combinations) {
            const comboKey = combo.sort().join(',');
            if (bondRules[comboKey]) {
                return bondRules[comboKey];
            }
        }
    }
    
    return null;
}

// Helper function to get combinations
function getCombinations(arr, len) {
    if (len === 1) return arr.map(el => [el]);
    if (len === arr.length) return [arr];
    
    const result = [];
    for (let i = 0; i <= arr.length - len; i++) {
        const head = arr.slice(i, i + 1);
        const tailCombos = getCombinations(arr.slice(i + 1), len - 1);
        tailCombos.forEach(combo => result.push([...head, ...combo]));
    }
    return result;
}

