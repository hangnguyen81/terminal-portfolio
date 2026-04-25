import type { Theme, FileKey, FileEntry } from '../../types';
import { PORTFOLIO } from '../../data';
import { MONO } from '../../theme';

const FILES: FileEntry[] = [
  { icon: '◈', name: 'about.md', type: 'md' },
  { icon: '▸', name: 'work/', type: 'dir' },
  { icon: '  ▸', name: 'relex.ts', type: 'ts', child: true },
  { icon: '  ▸', name: 'earlier.ts', type: 'ts', child: true },
  { icon: '▸', name: 'projects/', type: 'dir' },
  { icon: '  ▸', name: 'featured.tsx', type: 'tsx', child: true },
  { icon: '  ▸', name: 'archive.tsx', type: 'tsx', child: true },
  { icon: '◆', name: 'stack.json', type: 'json' },
  { icon: '◉', name: 'education.md', type: 'md' },
  { icon: '✉', name: 'contact.sh', type: 'sh' },
];

interface Props {
  theme: Theme;
  activeFile: FileKey;
  onPickFile: (name: FileKey) => void;
  mobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({ theme, activeFile, onPickFile, mobile = false, onClose }: Props) {
  return (
    <aside
      style={{
        background: theme.bgAlt,
        borderRight: mobile ? 'none' : `1px solid ${theme.rule}`,
        borderBottom: mobile ? `1px solid ${theme.rule}` : 'none',
        padding: '18px 0',
        fontSize: 13,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '0 20px 14px',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: theme.textDim,
          borderBottom: `1px solid ${theme.rule}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: MONO,
        }}
      >
        <span>EXPLORER</span>
        {mobile && onClose && (
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 0,
              color: theme.textMute,
              fontFamily: MONO,
              fontSize: 14,
              cursor: 'pointer',
              padding: 4,
            }}
            aria-label="Close explorer"
          >
            ✕
          </button>
        )}
      </div>

      <div style={{ padding: '12px 0', flex: 1 }}>
        {FILES.map((f) => {
          const isActive = activeFile === f.name;

          if (f.type === 'dir') {
            return (
              <div
                key={f.name}
                style={{
                  padding: '6px 20px',
                  color: theme.textDim,
                  fontSize: 12.5,
                  letterSpacing: '0.02em',
                  fontFamily: MONO,
                }}
              >
                {f.icon} {f.name}
              </div>
            );
          }

          return (
            <div
              key={f.name}
              onClick={() => onPickFile(f.name as FileKey)}
              style={{
                padding: f.child ? '10px 20px 10px 36px' : '10px 20px',
                cursor: 'pointer',
                color: isActive ? theme.accent : theme.text,
                background: isActive ? 'rgba(125,184,150,0.08)' : 'transparent',
                borderLeft: isActive
                  ? `2px solid ${theme.accent}`
                  : '2px solid transparent',
                fontSize: 13,
                fontFamily: MONO,
              }}
            >
              <span
                style={{
                  color: isActive ? theme.accent : theme.textDim,
                  marginRight: 8,
                }}
              >
                {f.child ? '◦' : f.icon}
              </span>
              {f.name}
            </div>
          );
        })}
      </div>

      <div
        style={{
          padding: '18px 20px',
          borderTop: `1px solid ${theme.rule}`,
          fontSize: 11,
          color: theme.textDim,
          lineHeight: 1.7,
          fontFamily: MONO,
        }}
      >
        <div style={{ color: theme.accent, marginBottom: 6 }}>◉ status</div>
        <div>
          <span style={{ color: theme.accent2 }}>●</span> open to new opportunity
        </div>
        <div style={{ wordBreak: 'break-all' }}>{PORTFOLIO.contact.email}</div>
      </div>
    </aside>
  );
}
