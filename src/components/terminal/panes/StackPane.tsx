import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO } from '../../../theme';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
}

export function StackPane({ theme, isMobile }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';
  const entries = Object.entries(PORTFOLIO.stack);

  return (
    <div style={{ padding: pad }}>
      <SectionHeader cmd="cat" path="stack.json" theme={theme} isMobile={isMobile} />
      <div
        style={{
          background: theme.bgPanel,
          border: `1px solid ${theme.rule}`,
          borderRadius: 6,
          padding: isMobile ? '18px 16px' : '24px 28px',
          fontSize: isMobile ? 12.5 : 13.5,
          lineHeight: 1.9,
          color: theme.text,
          overflowX: 'auto',
          fontFamily: MONO,
        }}
      >
        <div style={{ color: theme.textDim }}>{'{'}</div>
        {entries.map(([cat, items], i) => (
          <div key={cat} style={{ paddingLeft: isMobile ? 14 : 24 }}>
            <span style={{ color: theme.string }}>"{cat}"</span>
            <span style={{ color: theme.textDim }}>: [</span>
            <div
              style={{
                paddingLeft: isMobile ? 14 : 24,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              {items.map((it, j) => (
                <span key={it}>
                  <span style={{ color: theme.accent }}>"{it}"</span>
                  {j < items.length - 1 && (
                    <span style={{ color: theme.textDim }}>,</span>
                  )}
                </span>
              ))}
            </div>
            <span style={{ color: theme.textDim }}>
              ]{i < entries.length - 1 ? ',' : ''}
            </span>
          </div>
        ))}
        <div style={{ color: theme.textDim }}>{'}'}</div>
      </div>
    </div>
  );
}
