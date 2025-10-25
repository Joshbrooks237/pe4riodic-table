// Particle System for burst effects
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    createBurst(x, y, color = '#00ff88', count = 30) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
            const speed = 2 + Math.random() * 4;
            
            this.particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: 0.015 + Math.random() * 0.01,
                size: 2 + Math.random() * 3,
                color,
                glow: true
            });
        }
    }
    
    createOrbitParticles(x, y, radius, color = '#00ffff', count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            
            this.particles.push({
                x,
                y,
                centerX: x,
                centerY: y,
                angle,
                radius,
                angularSpeed: 0.02 + Math.random() * 0.02,
                life: 1,
                decay: 0,
                size: 2,
                color,
                orbit: true,
                glow: true
            });
        }
    }
    
    createConnectionParticles(x1, y1, x2, y2, color = '#00ff88') {
        const particles = 5;
        for (let i = 0; i < particles; i++) {
            const t = i / particles;
            const x = x1 + (x2 - x1) * t;
            const y = y1 + (y2 - y1) * t;
            
            this.particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                life: 1,
                decay: 0.02,
                size: 2,
                color,
                glow: true
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles = this.particles.filter(p => {
            if (p.orbit) {
                // Orbit around center
                p.angle += p.angularSpeed;
                p.x = p.centerX + Math.cos(p.angle) * p.radius;
                p.y = p.centerY + Math.sin(p.angle) * p.radius;
            } else {
                // Linear motion with gravity
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1; // gravity
            }
            
            p.life -= p.decay;
            
            // Draw particle
            if (p.life > 0) {
                this.ctx.save();
                this.ctx.globalAlpha = p.life;
                
                if (p.glow) {
                    this.ctx.shadowBlur = 10;
                    this.ctx.shadowColor = p.color;
                }
                
                this.ctx.fillStyle = p.color;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.restore();
            }
            
            return p.life > 0;
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    clear() {
        this.particles = [];
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

