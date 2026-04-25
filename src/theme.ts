import type { Theme } from './types';

export const darkTheme: Theme = {
  bg: '#0a1f14',
  bgAlt: '#0d2619',
  bgPanel: '#082016',
  text: '#d9e8d5',
  textMute: 'rgba(217,232,213,0.62)',
  textDim: 'rgba(217,232,213,0.42)',
  rule: 'rgba(217,232,213,0.1)',
  accent: '#7db896',
  accent2: '#d4e157',
  keyword: '#7db896',
  string: '#c9a66b',
  comment: 'rgba(217,232,213,0.35)',
  number: '#d4e157',
};

export const lightTheme: Theme = {
  bg: '#f5f0e6',
  bgAlt: '#ede6d6',
  bgPanel: '#faf6ed',
  text: '#0a1f14',
  textMute: 'rgba(10,31,20,0.68)',
  textDim: 'rgba(10,31,20,0.42)',
  rule: 'rgba(10,31,20,0.12)',
  accent: '#1e5540',
  accent2: '#5a7a3e',
  keyword: '#1e5540',
  string: '#8b6914',
  comment: 'rgba(10,31,20,0.45)',
  number: '#5a7a3e',
};

export const MONO = "'JetBrains Mono', ui-monospace, Menlo, monospace";
export const SERIF = "'Instrument Serif', Georgia, serif";
