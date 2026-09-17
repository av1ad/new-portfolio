import { useRef } from 'react';
import './Piano.scss';

// A tiny playable octave. Click a key, hear a note. That's it.
const NOTES = [
  { name: 'C', freq: 261.63 },
  { name: 'D', freq: 293.66 },
  { name: 'E', freq: 329.63 },
  { name: 'F', freq: 349.23 },
  { name: 'G', freq: 392.0 },
  { name: 'A', freq: 440.0 },
  { name: 'B', freq: 493.88 },
  { name: 'C', freq: 523.25 },
];

const Piano = () => {
  const ctxRef = useRef(null);

  const play = freq => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = ctxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1);
    } catch {
      // No audio? No problem.
    }
  };

  return (
    <div className="piano" role="group" aria-label="A tiny piano. Click the keys.">
      {NOTES.map((n, i) => (
        <button
          key={i}
          type="button"
          className="piano-key"
          onPointerDown={() => play(n.freq)}
          aria-label={`Play ${n.name}`}
        >
          <span>{n.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Piano;
