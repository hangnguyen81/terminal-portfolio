interface Props {
  label?: string;
}

export function PortraitPlaceholder({ label = 'PORTRAIT' }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background:
          'repeating-linear-gradient(135deg, rgba(125,184,150,0.08) 0 8px, rgba(125,184,150,0.02) 8px 16px)',
        border: '1px solid rgba(125,184,150,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 100 120" style={{ width: '65%', height: '65%', opacity: 0.35 }}>
        <circle cx="50" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
        <path
          d="M 18 120 Q 18 78 50 78 Q 82 78 82 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 12,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: '0.12em',
          opacity: 0.55,
        }}
      >
        [{label}]
      </div>
    </div>
  );
}
