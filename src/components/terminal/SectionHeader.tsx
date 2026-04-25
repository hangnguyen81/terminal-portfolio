import type { Theme } from '../../types';

interface Props {
  cmd: string;
  path: string;
  theme: Theme;
  isMobile: boolean;
}

export function SectionHeader({ cmd, path, theme, isMobile }: Props) {
  return (
    <div
      style={{
        padding: isMobile ? '10px 20px' : '12px 56px',
        borderBottom: `1px solid ${theme.rule}`,
        fontSize: isMobile ? 11 : 12,
        color: theme.textDim,
        display: 'flex',
        gap: isMobile ? 10 : 16,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: isMobile ? -20 : -56,
        marginRight: isMobile ? -20 : -56,
        marginTop: isMobile ? -24 : -48,
        marginBottom: isMobile ? 24 : 32,
        fontFamily: "'JetBrains Mono', ui-monospace, Menlo, monospace",
      }}
    >
      <span style={{ color: theme.accent }}>❯</span>
      <span style={{ color: theme.text }}>{cmd}</span>
      <span style={{ wordBreak: 'break-all' }}>{path}</span>
    </div>
  );
}
