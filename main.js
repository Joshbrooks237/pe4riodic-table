// Main Application Logic
class LivingPeriodicTable {
    constructor() {
        this.elements = [];
        this.draggingElement = null;
        this.molecules = [];
        this.draggedElements = new Set();
        this.originalPositions = new Map();
        this.particleSystem = null;
        this.audioSystem = new AudioSystem();
        this.bondDistance = 80;
        this.nearbyDistance = 150;
        
        this.init();
    }
    
    init() {
        // Setup particle system
        const canvas = document.getElementById('particleCanvas');
        this.particleSystem = new ParticleSystem(canvas);
        
        // Render periodic table
        this.renderPeriodicTable();
        
        // Setup breathing animations
        this.setupBreathingAnimations();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Setup controls
        this.setupControls();
        
        console.log('🎨 Living Periodic Table initialized');
    }
    
    renderPeriodicTable() {
        const table = document.getElementById('periodicTable');
        table.innerHTML = '';
        
        elements.forEach(element => {
            const div = document.createElement('div');
            div.className = `element ${element.category}`;
            div.dataset.symbol = element.symbol;
            div.dataset.name = element.name;
            div.dataset.number = element.number;
            div.style.gridColumn = element.col;
            div.style.gridRow = element.row;
            
            div.innerHTML = `
                <span class="atomic-number">${element.number}</span>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;
            
            table.appendChild(div);
            this.elements.push(div);
            
            // Store original position
            setTimeout(() => {
                const rect = div.getBoundingClientRect();
                const tableRect = table.getBoundingClientRect();
                this.originalPositions.set(div, {
                    x: rect.left - tableRect.left,
                    y: rect.top - tableRect.top,
                    inTable: true
                });
            }, 100);
        });
    }
    
    setupBreathingAnimations() {
        this.elements.forEach((element, index) => {
            // Random phase offset for organic feel
            const phaseOffset = Math.random() * Math.PI * 2;
            const duration = 3 + Math.random() * 2; // 3-5 seconds
            const scale = 1 + Math.random() * 0.05; // Subtle scale variation
            
            gsap.to(element, {
                scale: scale,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: phaseOffset / Math.PI,
            });
        });
    }
    
    setupEventListeners() {
        this.elements.forEach(element => {
            // Hover effects
            element.addEventListener('mouseenter', (e) => this.onElementHover(e));
            element.addEventListener('mouseleave', (e) => this.onElementLeave(e));
            
            // Drag and drop
            element.addEventListener('mousedown', (e) => this.onDragStart(e));
        });
        
        document.addEventListener('mousemove', (e) => this.onDragMove(e));
        document.addEventListener('mouseup', (e) => this.onDragEnd(e));
    }
    
    onElementHover(e) {
        const element = e.currentTarget;
        
        // Play hover sound
        this.audioSystem.playHoverSound();
        
        // Intense glow and expand with rotation
        gsap.to(element, {
            scale: 1.25,
            rotation: Math.random() * 10 - 5,
            duration: 0.3,
            ease: "back.out(2)"
        });
        
        // Add pulsing effect
        gsap.to(element, {
            scale: 1.3,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Pulse nearby tiles
        this.pulseNearbyTiles(element);
    }
    
    onElementLeave(e) {
        const element = e.currentTarget;
        
        // Kill all ongoing animations
        gsap.killTweensOf(element);
        
        // Return to normal state
        gsap.to(element, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.inOut"
        });
    }
    
    pulseNearbyTiles(targetElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const targetCenter = {
            x: targetRect.left + targetRect.width / 2,
            y: targetRect.top + targetRect.height / 2
        };
        
        this.elements.forEach(element => {
            if (element === targetElement) return;
            
            const rect = element.getBoundingClientRect();
            const center = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
            
            const distance = Math.hypot(center.x - targetCenter.x, center.y - targetCenter.y);
            
            if (distance < this.nearbyDistance) {
                const intensity = 1 - (distance / this.nearbyDistance);
                
                // More intense pulsing
                gsap.to(element, {
                    scale: 1 + intensity * 0.2,
                    rotation: (Math.random() - 0.5) * intensity * 15,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: "elastic.out(1, 0.5)"
                });
                
                // Add glow ripple effect
                gsap.to(element, {
                    filter: `brightness(${1 + intensity * 0.5}) saturate(${1 + intensity * 0.8})`,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    }
    
    onDragStart(e) {
        const element = e.currentTarget;
        
        // Initialize audio on first interaction
        this.audioSystem.init();
        
        this.draggingElement = element;
        element.classList.add('dragging');
        
        // Convert to absolute positioning
        const rect = element.getBoundingClientRect();
        const workspace = document.querySelector('.workspace');
        const workspaceRect = workspace.getBoundingClientRect();
        
        element.style.position = 'absolute';
        element.style.left = (rect.left - workspaceRect.left) + 'px';
        element.style.top = (rect.top - workspaceRect.top) + 'px';
        element.style.width = rect.width + 'px';
        element.style.height = rect.height + 'px';
        element.style.zIndex = '1000';
        
        // Remove from grid
        element.style.gridColumn = 'unset';
        element.style.gridRow = 'unset';
        
        this.draggedElements.add(element);
        
        this.dragOffset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    onDragMove(e) {
        if (!this.draggingElement) return;
        
        const workspace = document.querySelector('.workspace');
        const workspaceRect = workspace.getBoundingClientRect();
        
        const x = e.clientX - workspaceRect.left - this.dragOffset.x;
        const y = e.clientY - workspaceRect.top - this.dragOffset.y;
        
        this.draggingElement.style.left = x + 'px';
        this.draggingElement.style.top = y + 'px';
        
        // Check for nearby elements to bond
        this.checkProximityForBonding();
    }
    
    onDragEnd(e) {
        if (!this.draggingElement) return;
        
        this.draggingElement.classList.remove('dragging');
        
        // Check if bonding occurred
        const bondedElements = this.getNearbyElements(this.draggingElement);
        
        if (bondedElements.length > 0) {
            // Try to create a molecule
            this.attemptBonding([this.draggingElement, ...bondedElements]);
        }
        
        this.draggingElement = null;
    }
    
    getNearbyElements(element) {
        const rect = element.getBoundingClientRect();
        const center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        
        const nearby = [];
        
        this.draggedElements.forEach(other => {
            if (other === element) return;
            
            const otherRect = other.getBoundingClientRect();
            const otherCenter = {
                x: otherRect.left + otherRect.width / 2,
                y: otherRect.top + otherRect.height / 2
            };
            
            const distance = Math.hypot(center.x - otherCenter.x, center.y - otherCenter.y);
            
            if (distance < this.bondDistance) {
                nearby.push(other);
            }
        });
        
        return nearby;
    }
    
    checkProximityForBonding() {
        const nearby = this.getNearbyElements(this.draggingElement);
        
        if (nearby.length > 0) {
            // Visual feedback
            this.draggingElement.style.borderColor = 'var(--bond-glow)';
            nearby.forEach(el => {
                el.style.borderColor = 'var(--bond-glow)';
            });
        } else {
            this.draggingElement.style.borderColor = '';
        }
    }
    
    attemptBonding(elements) {
        const symbols = elements.map(el => el.dataset.symbol);
        const bond = checkBond(symbols);
        
        if (bond) {
            this.createMolecule(elements, bond);
        }
    }
    
    createMolecule(elements, bond) {
        // Play chime sound
        this.audioSystem.playChime();
        
        // Calculate center position
        let centerX = 0, centerY = 0;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const workspace = document.querySelector('.workspace');
            const workspaceRect = workspace.getBoundingClientRect();
            centerX += rect.left - workspaceRect.left + rect.width / 2;
            centerY += rect.top - workspaceRect.top + rect.height / 2;
        });
        centerX /= elements.length;
        centerY /= elements.length;
        
        // Create particle burst
        this.particleSystem.createBurst(centerX, centerY, '#00ff88', 40);
        
        // Create molecule object
        const molecule = {
            id: Date.now(),
            elements: elements.map(el => ({
                symbol: el.dataset.symbol,
                name: el.dataset.name,
                element: el
            })),
            bond: bond,
            x: centerX,
            y: centerY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        };
        
        this.molecules.push(molecule);
        
        // Show bond display
        this.showBondDisplay(bond);
        
        // Create visual molecule cluster
        this.createMoleculeCluster(molecule);
        
        // Hide original elements
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
        });
        
        // Update molecule count
        this.updateMoleculeCount();
    }
    
    createMoleculeCluster(molecule) {
        const moleculeArea = document.getElementById('moleculeArea');
        const cluster = document.createElement('div');
        cluster.className = 'molecule';
        cluster.dataset.moleculeId = molecule.id;
        cluster.style.left = molecule.x + 'px';
        cluster.style.top = molecule.y + 'px';
        
        // Arrange elements in a circle
        const radius = 40;
        molecule.elements.forEach((el, i) => {
            const angle = (Math.PI * 2 * i) / molecule.elements.length;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            const elementDiv = document.createElement('div');
            elementDiv.className = 'molecule-element';
            elementDiv.style.left = x + 'px';
            elementDiv.style.top = y + 'px';
            elementDiv.innerHTML = `<div class="symbol">${el.symbol}</div>`;
            
            cluster.appendChild(elementDiv);
        });
        
        moleculeArea.appendChild(cluster);
        molecule.clusterElement = cluster;
        
        // Animate orbiting
        this.animateMoleculeOrbit(molecule);
        
        // Make molecule draggable
        this.makeMoleculeDraggable(cluster, molecule);
    }
    
    animateMoleculeOrbit(molecule) {
        const elements = molecule.clusterElement.querySelectorAll('.molecule-element');
        const duration = 4 + Math.random() * 2;
        
        elements.forEach((el, i) => {
            const angle = (Math.PI * 2 * i) / elements.length;
            const radius = 50;
            
            gsap.to(el, {
                x: `+=${Math.cos(angle) * 10}`,
                y: `+=${Math.sin(angle) * 10}`,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2
            });
            
            // Rotate around center
            gsap.to(el, {
                rotation: 360,
                duration: duration * 2,
                repeat: -1,
                ease: "none"
            });
        });
        
        // Gentle floating
        gsap.to(molecule.clusterElement, {
            y: '+=20',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Pulsing glow
        gsap.to(molecule.clusterElement, {
            scale: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
    
    makeMoleculeDraggable(cluster, molecule) {
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        
        cluster.addEventListener('mousedown', (e) => {
            isDragging = true;
            const rect = cluster.getBoundingClientRect();
            const workspace = document.querySelector('.workspace');
            const workspaceRect = workspace.getBoundingClientRect();
            
            dragOffset.x = e.clientX - (rect.left - workspaceRect.left);
            dragOffset.y = e.clientY - (rect.top - workspaceRect.top);
            
            cluster.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const workspace = document.querySelector('.workspace');
            const workspaceRect = workspace.getBoundingClientRect();
            
            const x = e.clientX - workspaceRect.left - dragOffset.x;
            const y = e.clientY - workspaceRect.top - dragOffset.y;
            
            cluster.style.left = x + 'px';
            cluster.style.top = y + 'px';
            
            molecule.x = x;
            molecule.y = y;
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                cluster.style.cursor = 'move';
            }
        });
    }
    
    showBondDisplay(bond) {
        const display = document.getElementById('bondDisplay');
        display.innerHTML = `${bond.formula} <span style="font-size: 0.8em; color: #aaddff;">(${bond.name})</span>`;
        display.classList.add('show');
        
        setTimeout(() => {
            display.classList.remove('show');
        }, 3000);
    }
    
    updateMoleculeCount() {
        const count = document.getElementById('moleculeCount');
        count.textContent = `Molecules: ${this.molecules.length}`;
    }
    
    setupControls() {
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetTable();
        });
        
        document.getElementById('clearMolecules').addEventListener('click', () => {
            this.clearMolecules();
        });
    }
    
    resetTable() {
        // Reset all elements to original positions
        this.elements.forEach(element => {
            const originalPos = this.originalPositions.get(element);
            if (originalPos) {
                element.style.position = '';
                element.style.left = '';
                element.style.top = '';
                element.style.width = '';
                element.style.height = '';
                element.style.zIndex = '';
                element.style.opacity = '1';
                element.style.pointerEvents = '';
                element.style.gridColumn = '';
                element.style.gridRow = '';
            }
        });
        
        // Clear molecules
        this.clearMolecules();
        
        // Clear dragged elements set
        this.draggedElements.clear();
        
        // Re-render table
        this.renderPeriodicTable();
        this.setupBreathingAnimations();
        
        // Re-setup event listeners
        this.setupEventListeners();
    }
    
    clearMolecules() {
        // Remove molecule clusters
        this.molecules.forEach(molecule => {
            if (molecule.clusterElement) {
                molecule.clusterElement.remove();
            }
            
            // Restore original elements
            molecule.elements.forEach(el => {
                if (el.element) {
                    el.element.style.opacity = '1';
                    el.element.style.pointerEvents = '';
                }
            });
        });
        
        this.molecules = [];
        this.updateMoleculeCount();
        this.particleSystem.clear();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.periodicTable = new LivingPeriodicTable();
});

