import { useState } from 'react';
import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO, SERIF } from '../../../theme';
import { SectionHeader } from '../SectionHeader';
import { archiveImages } from '../../../assets/archiveImages';

interface Props {
  theme: Theme;
  isMobile: boolean;
  isNarrow: boolean;
  dark: boolean;
}

export function ArchivePane({ theme, isMobile, isNarrow, dark }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';
  const [activeFilter, setActiveFilter] = useState('all');

  const total = PORTFOLIO.archive.reduce((n, g) => n + g.items.length, 0);
  const chips = [
    { id: 'all', label: 'All', count: total },
    ...PORTFOLIO.archive.map((g) => ({ id: g.category, label: g.category, count: g.items.length })),
  ];
  const visible =
    activeFilter === 'all'
      ? PORTFOLIO.archive
      : PORTFOLIO.archive.filter((g) => g.category === activeFilter);

  const thumbSize = isMobile ? 62 : 72;

  return (
    <div style={{ padding: pad }}>
      <SectionHeader
        cmd="git log --since=5years"
        path="projects/archive/"
        theme={theme}
        isMobile={isMobile}
      />
      <div
        style={{
          fontSize: 13,
          color: theme.textMute,
          marginBottom: 24,
          maxWidth: 620,
          lineHeight: 1.7,
          fontFamily: MONO,
        }}
      >
        {'// Older portfolio (circa 2020) — kept grouped by category as in the original.'}
      </div>

      {/* Filter chips — mobile only */}
      {isMobile && (
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 18,
            paddingBottom: 14,
            borderBottom: `1px dashed ${theme.rule}`,
          }}
        >
          {chips.map((c) => {
            const active = activeFilter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                style={{
                  appearance: 'none',
                  cursor: 'pointer',
                  fontFamily: MONO,
                  fontSize: isNarrow ? 9.5 : 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: isNarrow ? '5px 9px' : '6px 11px',
                  borderRadius: 999,
                  border: `1px solid ${active ? theme.accent : theme.rule}`,
                  background: active ? theme.accent : 'transparent',
                  color: active ? (dark ? '#0a1f14' : '#f5f0e6') : theme.textMute,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontWeight: active ? 500 : 400,
                }}
              >
                <span>{c.label}</span>
                <span
                  style={{
                    fontSize: 9,
                    color: active
                      ? dark
                        ? 'rgba(10,31,20,0.6)'
                        : 'rgba(245,240,230,0.7)'
                      : theme.textDim,
                  }}
                >
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div style={{ fontFamily: MONO, fontSize: 13 }}>
        {visible.map((group, gi) => (
          <div key={group.category} style={{ marginBottom: 28 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: isMobile ? 10 : 14,
                paddingBottom: isMobile ? 8 : 10,
                marginBottom: isMobile ? 10 : 14,
                borderBottom: `1px solid ${theme.rule}`,
              }}
            >
              <span
                style={{
                  color: theme.accent2,
                  fontSize: isMobile ? 10 : 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                ◆ {String(gi + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: isMobile ? (isNarrow ? 18 : 20) : 26,
                  color: theme.text,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                }}
              >
                {group.category}
              </span>
              <span style={{ color: theme.textDim, fontSize: isMobile ? 10 : 11, marginLeft: 'auto' }}>
                {group.items.length} {group.items.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                gap: isMobile ? 10 : 18,
              }}
            >
              {group.items.map((p, i) => {
                const img = archiveImages[p.name];

                const cardStyle: React.CSSProperties = {
                  background: theme.bgPanel,
                  border: `1px solid ${theme.rule}`,
                  borderRadius: 6,
                  padding: isMobile ? '12px 12px' : '14px 16px',
                  height: '100%',
                  display: 'grid',
                  gridTemplateColumns: `${thumbSize}px 1fr`,
                  gap: isMobile ? 12 : 14,
                  alignItems: 'start',
                  textDecoration: 'none',
                  color: theme.text,
                  transition: 'border-color 0.15s',
                };

                const content = (
                  <>
                    {/* Thumbnail */}
                    <div
                      style={{
                        width: thumbSize,
                        height: thumbSize,
                        boxSizing: 'border-box',
                        padding: 4,
                        border: `1px solid ${theme.rule}`,
                        borderRadius: 5,
                        background: theme.bg,
                        flexShrink: 0,
                        overflow: 'hidden',
                      }}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={p.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            borderRadius: 2,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background: theme.bgAlt,
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                        <span style={{ color: theme.accent, fontSize: isMobile ? 11 : 12, fontFamily: MONO }}>
                          {'</>'}
                        </span>
                        <span
                          style={{
                            fontFamily: SERIF,
                            fontSize: isMobile ? (isNarrow ? 15 : 17) : 19,
                            color: theme.text,
                            letterSpacing: '-0.01em',
                            lineHeight: 1.1,
                          }}
                        >
                          {p.name}
                        </span>
                        {p.link && (
                          <span
                            style={{
                              marginLeft: 'auto',
                              color: theme.accent,
                              fontSize: isMobile ? 11 : 12,
                              fontFamily: MONO,
                              flexShrink: 0,
                            }}
                          >
                            ↗
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: isMobile ? (isNarrow ? 11 : 11.5) : 12.5,
                          color: theme.textMute,
                          lineHeight: 1.5,
                          fontFamily: "'Inter', sans-serif",
                          flex: 1,
                        }}
                      >
                        {p.description}
                      </div>
                      <div style={{ display: 'flex', gap: isMobile ? 5 : 6, flexWrap: 'wrap' }}>
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: isMobile ? 9.5 : 10,
                              padding: isMobile ? '2px 6px' : '2px 7px',
                              fontFamily: MONO,
                              background: 'rgba(125,184,150,0.1)',
                              color: theme.accent,
                              borderRadius: 3,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                );

                return p.link ? (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={cardStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = theme.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = theme.rule)}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} style={cardStyle}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ fontSize: 12, color: theme.textDim, marginTop: 8, fontFamily: MONO }}>
          {'// source → '}
          <a
            href="https://github.com/hangnguyen81"
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.accent, textDecoration: 'underline' }}
          >
            github.com/hangnguyen81
          </a>
        </div>
      </div>
    </div>
  );
}
