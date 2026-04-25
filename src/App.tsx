import { useState, useEffect } from 'react';
import { TerminalVariant } from './components/terminal/TerminalVariant';
import { MONO } from './theme';

type ThemeMode = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const dark = theme === 'dark';

  useEffect(() => {
    document.body.style.background = dark ? '#0a1f14' : '#f5f0e6';
    document.body.style.color = dark ? '#f5f0e6' : '#0a1f14';
  }, [dark]);

  return (
    <>
      <TerminalVariant dark={dark} />
      <ThemeToggle theme={theme} onToggle={setTheme} />
    </>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: ThemeMode;
  onToggle: (t: ThemeMode) => void;
}) {
  const dark = theme === 'dark';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 48,
        right: 16,
        zIndex: 100,
        display: 'flex',
        gap: 4,
        background: dark ? 'rgba(8,32,22,0.92)' : 'rgba(237,230,214,0.92)',
        border: `1px solid ${dark ? 'rgba(217,232,213,0.15)' : 'rgba(10,31,20,0.15)'}`,
        borderRadius: 8,
        padding: '4px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      }}
    >
      {(['dark', 'light'] as ThemeMode[]).map((t) => (
        <button
          key={t}
          onClick={() => onToggle(t)}
          style={{
            padding: '5px 12px',
            fontSize: 11,
            fontFamily: MONO,
            letterSpacing: '0.06em',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
            background:
              theme === t ? (dark ? '#7db896' : '#1e5540') : 'transparent',
            color:
              theme === t
                ? dark
                  ? '#0a1f14'
                  : '#fff'
                : dark
                ? 'rgba(217,232,213,0.5)'
                : 'rgba(10,31,20,0.5)',
            transition: 'all 0.15s',
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
