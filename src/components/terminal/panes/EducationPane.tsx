import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO, SERIF } from '../../../theme';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
  isNarrow: boolean;
}

export function EducationPane({ theme, isMobile, isNarrow }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';

  const BeyondRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '160px 1fr',
        gap: isMobile ? 4 : 24,
        padding: '14px 0',
        borderTop: `1px solid ${theme.rule}`,
      }}
    >
      <div
        style={{
          fontSize: isMobile ? 10.5 : 12,
          color: theme.accent2,
          fontFamily: MONO,
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );

  return (
    <div style={{ padding: pad }}>
      <SectionHeader cmd="cat" path="education.md" theme={theme} isMobile={isMobile} />

      {/* Education entries */}
      <div>
        {PORTFOLIO.education.map((e, i) => (
          <div
            key={i}
            style={{
              padding: isMobile ? '14px 0' : '18px 0',
              borderTop: i === 0 ? 'none' : `1px solid ${theme.rule}`,
              display: isMobile ? 'block' : 'grid',
              gridTemplateColumns: '160px 1fr auto',
              gap: 24,
            }}
          >
            {/* Period */}
            <div style={{ fontSize: isMobile ? 11 : 12, color: theme.accent2, fontFamily: MONO, marginBottom: isMobile ? 4 : 0 }}>
              {e.period}
            </div>

            {/* School + degree + grade */}
            <div>
              <div style={{ fontFamily: SERIF, fontSize: isMobile ? (isNarrow ? 17 : 19) : 22, color: theme.text, marginTop: isMobile ? 0 : 0 }}>
                {e.school}
              </div>
              <div style={{ fontSize: isMobile ? 12 : 13, color: theme.textMute, marginTop: isMobile ? 2 : 4, fontFamily: "'Inter', sans-serif" }}>
                {e.degree}
              </div>
              {e.grade && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? 5 : 6,
                    marginTop: isMobile ? 6 : 8,
                    padding: isMobile ? '2px 7px' : '2px 8px',
                    borderRadius: 3,
                    background: 'rgba(125,184,150,0.12)',
                    color: theme.accent,
                    fontSize: isMobile ? 9.5 : 10.5,
                    fontFamily: MONO,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>★</span>
                  <span>Grade: {e.grade}</span>
                </div>
              )}
              {/* Location shown below on mobile */}
              {isMobile && (
                <div style={{ fontSize: 11, color: theme.textDim, marginTop: 4, fontFamily: MONO }}>
                  {e.location}
                </div>
              )}
            </div>

            {/* Location — desktop only (right column) */}
            {!isMobile && (
              <div style={{ fontSize: 11, color: theme.textDim, fontFamily: MONO, whiteSpace: 'nowrap' }}>
                {e.location}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Beyond code */}
      <div style={{ marginTop: isMobile ? 28 : 40 }}>
        <div style={{ fontFamily: MONO, fontSize: isMobile ? 11 : 12, color: theme.comment, marginBottom: isMobile ? 10 : 14 }}>
          {'// beyond code'}
        </div>

        <BeyondRow label="LANGUAGES">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 16 : 28, marginTop: isMobile ? 8 : 0 }}>
            {PORTFOLIO.beyond.languages.map((l) => (
              <div key={l.name}>
                <div style={{ fontFamily: SERIF, fontSize: isMobile ? (isNarrow ? 16 : 18) : 19, color: theme.text, lineHeight: 1.1 }}>
                  {l.name}
                </div>
                <div style={{ fontSize: isMobile ? 10 : 11, color: theme.textMute, fontFamily: MONO, letterSpacing: '0.04em', textTransform: 'lowercase', marginTop: 3 }}>
                  {l.level.toLowerCase()}
                </div>
              </div>
            ))}
          </div>
        </BeyondRow>

        <BeyondRow label="HOBBIES">
          <div style={{ fontSize: isMobile ? 12.5 : 13.5, color: theme.text, fontFamily: "'Inter', sans-serif", lineHeight: 1.5, marginTop: isMobile ? 6 : 0 }}>
            {PORTFOLIO.beyond.hobbies}
          </div>
        </BeyondRow>

        <BeyondRow label="REFEREES">
          <div style={{ fontSize: isMobile ? 12 : 13, color: theme.textMute, fontStyle: 'italic', fontFamily: "'Inter', sans-serif", lineHeight: 1.5, marginTop: isMobile ? 6 : 0 }}>
            {PORTFOLIO.beyond.references}
          </div>
        </BeyondRow>
      </div>
    </div>
  );
}
