import { useState } from 'react';
import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO, SERIF } from '../../../theme';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
}

export function ShowcasePane({ theme, isMobile }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: pad }}>
      <SectionHeader cmd="ls -la" path="projects/featured/" theme={theme} isMobile={isMobile} />
      <div
        style={{
          marginTop: -10,
          marginBottom: 14,
          fontSize: 12,
          color: theme.textDim,
          fontFamily: MONO,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Selected Work
      </div>
      <div style={{ display: 'grid', gap: 14 }}>
        {PORTFOLIO.showcase.map((p, i) => (
          <div
            key={i}
            style={{
              background: theme.bgPanel,
              border: `1px solid ${hoveredIndex === i ? theme.accent : theme.rule}`,
              borderRadius: 6,
              padding: isMobile ? 18 : 24,
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
              gap: isMobile ? 14 : 24,
              alignItems: 'start',
              transition: 'border-color .2s',
              cursor: 'default',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                fontSize: isMobile ? 28 : 44,
                color: theme.accent,
                fontFamily: SERIF,
                fontStyle: 'italic',
                lineHeight: 1,
                width: isMobile ? 'auto' : 80,
              }}
            >
              /{String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: theme.accent2,
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                  fontFamily: MONO,
                }}
              >
                {p.year.toUpperCase()} · {p.highlight.toUpperCase()}
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: isMobile ? 22 : 26,
                  color: theme.text,
                  marginBottom: 8,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: isMobile ? 13 : 13.5,
                  color: theme.textMute,
                  lineHeight: 1.6,
                  marginBottom: 14,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {p.description}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{ fontSize: 11, color: theme.textDim, padding: '2px 0', fontFamily: MONO }}
                  >
                    [{t}]
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                textAlign: isMobile ? 'left' : 'right',
                fontSize: 11,
                color: theme.textDim,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: MONO,
              }}
            >
              <div>{p.role}</div>
              <div style={{ color: theme.accent }}>→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
