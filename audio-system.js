// Audio System for interactive sounds
class AudioSystem {
    constructor() {
        this.audioContext = null;
        this.initialized = false;
    }
    
    // Initialize on first user interaction
    init() {
        if (this.initialized) return;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }
    
    // Play bond formation sound
    playBondSound(frequency = 440) {
        this.init();
        if (!this.audioContext) return;
        
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        
        osc.frequency.value = frequency;
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + 0.5);
    }
    
    // Play melodic chime for molecule formation
    playChime() {
        this.init();
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 (C major chord)
        
        notes.forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.value = freq;
            osc.type = 'sine';
            
            const startTime = now + i * 0.1;
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.8);
            
            osc.start(startTime);
            osc.stop(startTime + 0.8);
        });
    }
    
    // Play hover sound
    playHoverSound() {
        this.init();
        if (!this.audioContext) return;
        
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        
        osc.frequency.value = 800;
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + 0.1);
    }
}

