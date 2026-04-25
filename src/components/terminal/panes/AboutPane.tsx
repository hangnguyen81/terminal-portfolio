import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO, SERIF } from '../../../theme';
import avatar from '../../../assets/avatar.png';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
  isNarrow: boolean;
  dark: boolean;
}

export function AboutPane({ theme, isMobile, isNarrow }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';

  return (
    <div style={{ padding: pad, maxWidth: 900 }}>
      <SectionHeader cmd="cat" path="about.md" theme={theme} isMobile={isMobile} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 240px',
          gap: isMobile ? 28 : 40,
          alignItems: 'start',
        }}
      >
        {isMobile && (
          <div>
            <div
              style={{
                aspectRatio: '1 / 1',
                border: `1px solid ${theme.rule}`,
                borderRadius: 4,
                maxWidth: 280,
                margin: '0 auto',
                overflow: 'hidden',
              }}
            >
              <img src={avatar} alt="Hang Nguyen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        )}

        <div>
          <div style={{ color: theme.comment, fontSize: 13, fontFamily: MONO }}>
            {'// hello, world 🌱'}
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isNarrow ? 48 : isMobile ? 56 : 72,
              fontWeight: 400,
              margin: '16px 0 24px',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: theme.text,
            }}
          >
            Hang Nguyen
          </h1>

          <div
            style={{
              fontSize: isMobile ? 12.5 : 14,
              color: theme.textMute,
              marginBottom: 32,
              display: 'flex',
              gap: isMobile ? 8 : 14,
              flexDirection: isNarrow ? 'column' : 'row',
              flexWrap: 'wrap',
              fontFamily: MONO,
            }}
          >
            <span>
              <span style={{ color: theme.keyword }}>const</span> role ={' '}
              <span style={{ color: theme.string }}>"Software Developer"</span>
            </span>
            <span>
              <span style={{ color: theme.keyword }}>const</span> city ={' '}
              <span style={{ color: theme.string }}>"Vantaa, Uusimaa 🇫🇮"</span>
            </span>
            <span>
              <span style={{ color: theme.keyword }}>let</span> years ={' '}
              <span style={{ color: theme.number }}>{PORTFOLIO.years.replace('+', '')}</span>{' '}
              <span style={{ color: theme.comment }}>{'// keeps growing'}</span>
            </span>
          </div>

          <p
            style={{
              fontSize: isMobile ? 14 : 15,
              lineHeight: 1.7,
              color: theme.text,
              marginBottom: 16,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {PORTFOLIO.tagline}
          </p>
          <p
            style={{
              fontSize: isMobile ? 13 : 14,
              lineHeight: 1.7,
              color: theme.textMute,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {PORTFOLIO.tagline_long}
          </p>

          <div style={{ marginTop: 32 }}>
            <div style={{ color: theme.comment, fontSize: 13, marginBottom: 12, fontFamily: MONO }}>
              {'// specialties'}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {PORTFOLIO.specialties.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 12,
                    padding: '6px 14px',
                    border: `1px solid ${theme.accent}`,
                    color: theme.accent,
                    borderRadius: 4,
                    fontFamily: MONO,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {!isMobile && (
          <div>
            <div
              style={{
                aspectRatio: '1 / 1',
                border: `1px solid ${theme.rule}`,
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <img src={avatar} alt="Hang Nguyen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
