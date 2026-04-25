import { useState } from 'react';
import type { Theme } from '../../../types';
import { PORTFOLIO } from '../../../data';
import { MONO } from '../../../theme';
import { SectionHeader } from '../SectionHeader';

interface Props {
  theme: Theme;
  isMobile: boolean;
  dark: boolean;
}

const contacts = [
  {
    label: 'Email',
    display: 'hangntt@gmail.com',
    href: `mailto:${PORTFOLIO.contact.email}`,
    icon: '✉',
    action: 'Send email',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/hang-nguyen-a619b1105',
    href: PORTFOLIO.contact.linkedin,
    icon: 'in',
    action: 'View profile',
  },
  {
    label: 'GitHub',
    display: 'github.com/hangnguyen81',
    href: PORTFOLIO.contact.github,
    icon: '⎇',
    action: 'View repos',
  },
];

export function ContactPane({ theme, isMobile, dark }: Props) {
  const pad = isMobile ? '24px 20px' : '48px 56px';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: pad }}>
      <SectionHeader cmd="./contact.sh" path="--friendly" theme={theme} isMobile={isMobile} />
      <div style={{ fontSize: 14, lineHeight: 1.8 }}>
        <div style={{ color: theme.comment, marginBottom: 20, fontFamily: MONO }}>
          {'# Open to frontend & full-stack opportunities. Let\'s chat. ☕'}
        </div>
        {contacts.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '34px 1fr auto' : '46px 120px 1fr auto',
              gap: isMobile ? 10 : 18,
              padding: isMobile ? '14px 14px' : '16px 20px',
              marginBottom: 10,
              background: hoveredIndex === i ? 'rgba(125,184,150,0.06)' : theme.bgPanel,
              border: `1px solid ${hoveredIndex === i ? theme.accent : theme.rule}`,
              borderRadius: 6,
              textDecoration: 'none',
              alignItems: 'center',
              transition: 'all .2s',
              fontSize: isMobile ? 13 : 14,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(125,184,150,0.12)',
                color: theme.accent,
                fontFamily: MONO,
                fontSize: 16,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {c.icon}
            </span>
            {!isMobile && (
              <span
                style={{
                  color: theme.text,
                  fontWeight: 500,
                  fontFamily: MONO,
                  fontSize: 13,
                }}
              >
                {c.label}
              </span>
            )}
            <span style={{ color: theme.textMute, wordBreak: 'break-all', fontFamily: MONO, fontSize: isMobile ? 12 : 13 }}>
              {isMobile && (
                <span style={{ color: theme.text, fontWeight: 500, marginRight: 8 }}>
                  {c.label}
                </span>
              )}
              {c.display}
            </span>
            <span
              style={{
                color: dark ? theme.accent : '#1e5540',
                fontSize: 11,
                fontFamily: MONO,
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}
            >
              {c.action} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
