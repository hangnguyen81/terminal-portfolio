import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO, SERIF } from '../../../theme';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
  filter: 'relex' | 'earlier';
}

export function WorkPane({ theme, isMobile, filter }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';
  const items =
    filter === 'relex' ? PORTFOLIO.experience.slice(0, 2) : PORTFOLIO.experience.slice(2);

  return (
    <div style={{ padding: pad }}>
      <SectionHeader
        cmd="tail -f"
        path={`work/${filter}.ts`}
        theme={theme}
        isMobile={isMobile}
      />
      <div>
        {items.map((e, i) => (
          <div
            key={i}
            style={{
              marginBottom: 28,
              background: theme.bgPanel,
              border: `1px solid ${theme.rule}`,
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: isMobile ? '10px 14px' : '12px 20px',
                borderBottom: `1px solid ${theme.rule}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
                fontSize: isMobile ? 11 : 12,
                color: theme.textDim,
                flexWrap: 'wrap',
                fontFamily: MONO,
              }}
            >
              <span style={{ wordBreak: 'break-all' }}>
                <span style={{ color: theme.keyword }}>{'export const '}</span>
                <span style={{ color: theme.accent }}>
                  {e.company.toLowerCase().replace(/[^a-z]/g, '')}
                </span>
                <span>{' = {'}</span>
              </span>
              <span style={{ color: theme.textDim }}>{e.period}</span>
            </div>

            <div style={{ padding: isMobile ? '18px 18px' : '22px 28px' }}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: isMobile ? 22 : 28,
                  color: theme.text,
                  marginBottom: 2,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                {e.title}
              </div>
              <div
                style={{
                  fontSize: isMobile ? 12.5 : 13,
                  color: theme.textMute,
                  marginBottom: 4,
                  fontFamily: MONO,
                }}
              >
                @ <span style={{ color: theme.accent }}>{e.company}</span>
                <span style={{ color: theme.textDim }}> · {e.location}</span>
                {e.current && (
                  <span style={{ marginLeft: 12, color: theme.accent2 }}>● active</span>
                )}
              </div>
              {e.team && (
                <div
                  style={{
                    fontSize: 12,
                    color: theme.comment,
                    marginBottom: 14,
                    fontFamily: MONO,
                  }}
                >
                  {'// ' + e.team}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
                {e.bullets.map((b, j) => (
                  <div
                    key={j}
                    style={{
                      fontSize: isMobile ? 13 : 13.5,
                      lineHeight: 1.6,
                      color: theme.text,
                      display: 'flex',
                      gap: 12,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <span style={{ color: theme.accent, fontFamily: MONO, flexShrink: 0 }}>→</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              {e.stack && (
                <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {e.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        padding: '3px 8px',
                        background: 'rgba(125,184,150,0.08)',
                        color: theme.accent,
                        borderRadius: 3,
                        fontFamily: MONO,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{
                padding: isMobile ? '8px 14px' : '10px 20px',
                borderTop: `1px solid ${theme.rule}`,
                fontSize: 12,
                color: theme.textDim,
                fontFamily: MONO,
              }}
            >
              {'};'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
