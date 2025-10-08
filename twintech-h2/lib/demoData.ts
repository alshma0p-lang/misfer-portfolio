export const cellVoltageData = [
  { time: 0, value: 2.1, variance: 0.012 },
  { time: 6, value: 2.09, variance: 0.013 },
  { time: 12, value: 2.11, variance: 0.015 },
  { time: 18, value: 2.16, variance: 0.032 },
  { time: 24, value: 2.12, variance: 0.018 },
  { time: 30, value: 2.1, variance: 0.014 },
  { time: 36, value: 2.09, variance: 0.013 },
  { time: 42, value: 2.11, variance: 0.015 },
  { time: 48, value: 2.12, variance: 0.019 },
  { time: 54, value: 2.14, variance: 0.022 },
];

export const soeData = [
  { load: 15, state: 'purge' as const },
  { load: 25, state: 'hold' as const },
  { load: 40, state: 'safe' as const },
  { load: 55, state: 'safe' as const },
  { load: 70, state: 'safe' as const },
  { load: 85, state: 'hold' as const },
  { load: 95, state: 'purge' as const },
];

export const fftData = [
  { freq: 30, amplitude: 25 },
  { freq: 60, amplitude: 42 },
  { freq: 90, amplitude: 36 },
  { freq: 120, amplitude: 82 },
  { freq: 150, amplitude: 30 },
  { freq: 180, amplitude: 22 },
  { freq: 210, amplitude: 15 },
];

export type Locale = 'en' | 'ar';
