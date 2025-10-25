# ⚛️ The Living Periodic Table (pe4riodic-table)

> **trippy tabel** - An immersive, artistic, and interactive web experience that blends chemistry, physics, and motion design. Each element breathes, responds to interactions, and can be combined to form glowing, orbiting molecules.

![The Living Periodic Table](preview.png)

## ✨ Features

### 🌊 Breathing Elements
- Each element tile gently pulses with GSAP animations
- Random phase offsets create an organic, living feel
- Smooth scale transformations that mimic breathing

### 🎯 Interactive Hover Effects
- **Intense neon glow** - Triple-layered box shadows with category-specific colors
- **Color-shifting backgrounds** - Radial gradient cycles (Cyan → Magenta → Green)
- Elements expand to 1.3x size with random rotation
- Nearby tiles pulse in response with elastic bouncing
- Subtle audio feedback for interactions
- Visual effects that respond to cursor proximity

### 🧲 Drag & Drop Chemistry
- Drag elements anywhere on the workspace
- Proximity detection for bonding (~80px)
- Visual feedback when elements are close enough to bond
- Smooth physics-based movement

### ⚗️ Molecular Bonding
- 30+ pre-defined chemical bond rules
- Automatic molecule formation when valid combinations are nearby
- Real chemical formulas (H₂O, CO₂, NH₃, etc.)
- Visual and audio feedback on successful bonding

### 🌟 Particle Effects
- Burst effects on molecule formation
- Orbiting particles around molecules
- Glowing connections between bonded atoms
- Canvas-based particle system for smooth performance

### 🎵 Audio System
- Melodic chimes for molecule formation
- Hover sound effects
- Bond formation sounds
- Web Audio API for procedural sound generation

### 🌀 Living Molecules
- Molecules float and drift in space
- Elements orbit around molecular centers
- Pulsing glow effects
- Molecules can be dragged and repositioned
- Smooth GSAP animations for organic movement

## 🎮 How to Use

1. **Open the application** - Simply open `index.html` in a modern web browser
2. **Hover** - Move your mouse over elements to see them glow and nearby tiles pulse
3. **Drag** - Click and drag elements out of the periodic table
4. **Bond** - Bring compatible elements close together (within ~80px) to form molecules
5. **Experiment** - Try different combinations to discover new molecules!

### Known Molecule Combinations

- **H + O** → Water (H₂O)
- **Na + Cl** → Salt (NaCl)
- **C + O + O** → Carbon Dioxide (CO₂)
- **N + H + H + H** → Ammonia (NH₃)
- **C + H + H + H + H** → Methane (CH₄)
- **H + Cl** → Hydrochloric Acid (HCl)
- **Ca + C + O + O + O** → Calcium Carbonate (CaCO₃)

...and many more!

## 🛠️ Technology Stack

- **GSAP** - Professional-grade animation library
- **D3.js** - Data-driven transformations
- **Matter.js** - Physics engine (referenced but primarily custom drag implementation)
- **Web Audio API** - Procedural audio generation
- **Canvas API** - Particle system rendering
- **Vanilla JavaScript** - Core application logic

## 📁 Project Structure

```
elementslit/
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── elements-data.js        # Periodic table data and bond rules
├── particle-system.js      # Particle effects engine
├── audio-system.js         # Sound generation system
├── main.js                 # Core application logic
└── README.md              # This file
```

## 🎨 Visual Design

- **Dark cosmic theme** with gradients
- **Neon glow effects** (cyan, green, orange, magenta, yellow)
- **Category-based color coding** for element types
- **Smooth transitions** and organic animations
- **Responsive grid layout** for the periodic table
- **1.5x brightness + 1.8x saturation** on hover for ultra-vivid colors

## 🔧 Customization

### Adjust Bond Distance
In `main.js`, modify the `bondDistance` property:
```javascript
this.bondDistance = 80; // Distance in pixels
```

### Add New Molecules
In `elements-data.js`, add to the `bondRules` object:
```javascript
"H,S": { formula: "H₂S", name: "Hydrogen Sulfide" }
```

### Change Animation Speed
In `main.js`, adjust the breathing animation duration:
```javascript
const duration = 3 + Math.random() * 2; // 3-5 seconds
```

### Modify Particle Effects
In `particle-system.js`, customize particle properties:
```javascript
count = 30,      // Number of particles
speed = 2 + Math.random() * 4,  // Particle speed
size = 2 + Math.random() * 3    // Particle size
```

## 🌐 Browser Compatibility

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅
- **Safari** 14+ ✅
- **Edge** 90+ ✅

Requires:
- CSS Grid support
- ES6+ JavaScript
- Web Audio API
- Canvas 2D Context
- GSAP 3.x
- D3.js 7.x

## 🚀 Getting Started

No build process required! Just open `index.html` in your browser.

For development:
```bash
# Serve with any static file server
python -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000`

## 🎓 Educational Value

This project demonstrates:
- Chemical bonding concepts
- Interactive data visualization
- Advanced CSS animations
- Canvas rendering techniques
- Web Audio synthesis
- Physics-based interactions
- Event-driven architecture
- State management in vanilla JavaScript

## 📝 License

MIT License - Feel free to use, modify, and distribute!

## 🤝 Contributing

Ideas for enhancement:
- [ ] Add more complex molecules
- [ ] Implement actual molecular geometry (VSEPR)
- [ ] Add element information panels
- [ ] Create periodic table quiz mode
- [ ] Add mobile touch support
- [ ] Implement molecule decay over time
- [ ] Add 3D rotation with Three.js
- [ ] Create molecular orbital visualizations

## 💡 Credits

Built with passion for chemistry, physics, and beautiful code.

---

**Enjoy experimenting with The Living Periodic Table!** ⚛️✨
