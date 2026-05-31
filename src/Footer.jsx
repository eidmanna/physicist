import { useState } from 'react';
import './Footer.css';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

export default function Footer({ language, onLanguageToggle, onExportPDF }) {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  if (showImpressum) {
    return (
      <div>
        <button
          className="back-button"
          onClick={() => setShowImpressum(false)}
          style={{ margin: '2rem' }}
        >
          ← Zurück zum Comic
        </button>
        <Impressum />
      </div>
    );
  }

  if (showDatenschutz) {
    return (
      <div>
        <button
          className="back-button"
          onClick={() => setShowDatenschutz(false)}
          style={{ margin: '2rem' }}
        >
          ← Zurück zum Comic
        </button>
        <Datenschutz />
      </div>
    );
  }

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <button
            onClick={onLanguageToggle}
            className="footer-link"
          >
            {language === 'de' ? 'English' : 'Deutsch'}
          </button>
          <span className="footer-separator">|</span>
          <button
            onClick={onExportPDF}
            className="footer-link"
          >
            {language === 'de' ? 'Als PDF exportieren' : 'Export as PDF'}
          </button>
          <span className="footer-separator">|</span>
          <button
            onClick={() => setShowImpressum(true)}
            className="footer-link"
          >
            Impressum
          </button>
          <span className="footer-separator">|</span>
          <button
            onClick={() => setShowDatenschutz(true)}
            className="footer-link"
          >
            Datenschutz
          </button>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} - Alle Rechte vorbehalten</p>
          <p className="footer-attribution">
            Illustrationen von{' '}
            <a
              href="https://www.humaaans.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Humaaans by Pablo Stanley
            </a>
            {' '}(CC BY 4.0)
          </p>
        </div>
      </div>
    </footer>
  );
}

// Made with Bob
