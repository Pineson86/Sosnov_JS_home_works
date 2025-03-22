const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Основная мелодия припева "Jingle Bells"
const notes = [
    { note: 'E4', duration: 0.5, time: 0 }, { note: 'E4', duration: 0.5, time: 0.5 },
    { note: 'E4', duration: 1, time: 1 }, { note: 'E4', duration: 0.5, time: 2 },
    { note: 'E4', duration: 0.5, time: 2.5 }, { note: 'E4', duration: 1, time: 3 },
    { note: 'E4', duration: 0.5, time: 4 }, { note: 'G4', duration: 0.5, time: 4.5 },
    { note: 'C4', duration: 0.5, time: 5 }, { note: 'D4', duration: 0.5, time: 5.5 },
    { note: 'E4', duration: 2, time: 6 }, { note: 'F4', duration: 0.5, time: 8 },
    { note: 'F4', duration: 0.5, time: 8.5 }, { note: 'F4', duration: 0.5, time: 9 },
    { note: 'F4', duration: 0.5, time: 9.5 }, { note: 'F4', duration: 0.5, time: 10 },
    { note: 'E4', duration: 0.5, time: 10.5 }, { note: 'E4', duration: 0.5, time: 11 },
    { note: 'E4', duration: 0.5, time: 11.5 }, { note: 'E4', duration: 0.5, time: 12 },
    { note: 'D4', duration: 0.5, time: 12.5 }, { note: 'D4', duration: 0.5, time: 13 },
    { note: 'E4', duration: 0.5, time: 13.5 }, { note: 'D4', duration: 1, time: 14 },
    { note: 'G4', duration: 1, time: 15 }
];

function playFrequency(frequency, startTime, duration) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + startTime);
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + startTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime + startTime);
    oscillator.stop(audioContext.currentTime + startTime + duration);
}

function noteToFrequency(note) {
    const noteMap = {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
        'G4': 392.00, 'A4': 440.00, 'B4': 493.88
    };
    return noteMap[note] || 440;
}

function playNote(note) {
    playFrequency(noteToFrequency(note), 0, 0.5);
}

function playMelody() {
    notes.forEach(({ note, time, duration }) => {
        playFrequency(noteToFrequency(note), time, duration);
    });
}

const container = document.createElement('div');
document.body.appendChild(container);

notes.forEach(({ note }) => {
    const button = document.createElement('button');
    button.textContent = note;
    button.onclick = () => playNote(note);
    container.appendChild(button);
});

const playAllButton = document.createElement('button');
playAllButton.textContent = 'Play All';
playAllButton.onclick = playMelody;
container.appendChild(playAllButton);
