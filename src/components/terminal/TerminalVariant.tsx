import { useState } from 'react';
import type { FileKey } from '../../types';
import { darkTheme, lightTheme, MONO } from '../../theme';
import cvPdf from '../../assets/HangNguyen_CV.pdf';
import { useViewport } from '../../hooks/useViewport';
import { Sidebar } from './Sidebar';
import { AboutPane } from './panes/AboutPane';
import { WorkPane } from './panes/WorkPane';
import { ShowcasePane } from './panes/ShowcasePane';
import { ArchivePane } from './panes/ArchivePane';
import { StackPane } from './panes/StackPane';
import { EducationPane } from './panes/EducationPane';
import { ContactPane } from './panes/ContactPane';

interface Props {
  dark: boolean;
}

export function TerminalVariant({ dark }: Props) {
  const theme = dark ? darkTheme : lightTheme;
  const { isMobile, isNarrow } = useViewport();
  const [activeFile, setActiveFile] = useState<FileKey>('about.md');
  const [navOpen, setNavOpen] = useState(false);

  const pickFile = (name: FileKey) => {
    setActiveFile(name);
    setNavOpen(false);
    const el = document.getElementById('term-main');
    if (el) el.scrollTop = 0;
  };

  const renderPane = () => {
    switch (activeFile) {
      case 'about.md':
        return <AboutPane theme={theme} isMobile={isMobile} isNarrow={isNarrow} dark={dark} />;
      case 'relex.ts':
        return <WorkPane theme={theme} isMobile={isMobile} filter="relex" />;
      case 'earlier.ts':
        return <WorkPane theme={theme} isMobile={isMobile} filter="earlier" />;
      case 'featured.tsx':
        return <ShowcasePane theme={theme} isMobile={isMobile} />;
      case 'archive.tsx':
        return <ArchivePane theme={theme} isMobile={isMobile} isNarrow={isNarrow} dark={dark} />;
      case 'stack.json':
        return <StackPane theme={theme} isMobile={isMobile} />;
      case 'education.md':
        return <EducationPane theme={theme} isMobile={isMobile} isNarrow={isNarrow} />;
      case 'contact.sh':
        return <ContactPane theme={theme} isMobile={isMobile} dark={dark} />;
      default:
        return <AboutPane theme={theme} isMobile={isMobile} isNarrow={isNarrow} dark={dark} />;
    }
  };

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        fontFamily: MONO,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          height: isMobile ? 42 : 36,
          background: theme.bgPanel,
          borderBottom: `1px solid ${theme.rule}`,
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 10px' : '0 14px',
          gap: isMobile ? 8 : 14,
          fontSize: 12,
          flexShrink: 0,
        }}
      >
        {isMobile ? (
          <button
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Toggle explorer"
            style={{
              background: 'transparent',
              border: `1px solid ${theme.rule}`,
              color: theme.text,
              fontFamily: MONO,
              fontSize: 14,
              cursor: 'pointer',
              borderRadius: 4,
              width: 32,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              flexShrink: 0,
            }}
          >
            {navOpen ? '✕' : '≡'}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            {(['#d4605b', '#d4b55b', theme.accent] as const).map((c, i) => (
              <div
                key={i}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: c,
                  opacity: 0.85,
                }}
              />
            ))}
          </div>
        )}

        <div
          style={{
            flex: 1,
            textAlign: 'center',
            color: theme.textDim,
            letterSpacing: '0.05em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: isMobile ? 11 : 12,
          }}
        >
          {isMobile ? activeFile : 'hang@vantaa — ~/portfolio — zsh'}
        </div>

        <a
          href={cvPdf}
          download="HangNguyen_CV.pdf"
          style={{
            fontSize: 11,
            padding: isMobile ? '6px 10px' : '5px 12px',
            background: theme.accent,
            color: dark ? '#0a1f14' : '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: MONO,
            fontWeight: 500,
            letterSpacing: '0.04em',
            flexShrink: 0,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {isMobile ? 'CV ↓' : 'resume.pdf ↓'}
        </a>
      </div>

      {/* Body */}
      {isMobile ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            position: 'relative',
          }}
        >
          {navOpen && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ flex: 1, overflowY: 'auto' }}>
                <Sidebar
                  theme={theme}
                  activeFile={activeFile}
                  onPickFile={pickFile}
                  mobile
                  onClose={() => setNavOpen(false)}
                />
              </div>
              <div
                onClick={() => setNavOpen(false)}
                style={{ background: 'rgba(0,0,0,0.2)', flex: 0, height: 0 }}
              />
            </div>
          )}
          <main id="term-main" style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
            {renderPane()}
          </main>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          <Sidebar theme={theme} activeFile={activeFile} onPickFile={pickFile} />
          <main id="term-main" style={{ overflowY: 'auto' }}>
            {renderPane()}
          </main>
        </div>
      )}

      {/* Status bar */}
      <div
        style={{
          height: isMobile ? 26 : 28,
          background: theme.accent,
          color: dark ? '#0a1f14' : '#f5f0e6',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 12px' : '0 16px',
          fontSize: isMobile ? 10 : 11,
          letterSpacing: '0.05em',
          justifyContent: 'space-between',
          flexShrink: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{ display: 'flex', gap: isMobile ? 10 : 20 }}>
          <span>❯ main</span>
          {!isNarrow && <span>⚡ ready</span>}
          {!isMobile && <span>{activeFile}</span>}
        </div>
        <div style={{ display: 'flex', gap: isMobile ? 10 : 20 }}>
          {!isNarrow && <span>UTF-8</span>}
          <span>
            HEL ·{' '}
            {new Date().toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          {!isMobile && <span>◆ TERMINAL</span>}
        </div>
      </div>
    </div>
  );
}
