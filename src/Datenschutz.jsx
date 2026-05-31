import './Legal.css';

export default function Datenschutz() {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Datenschutzerklärung</h1>
        
        <section>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2>2. Hosting</h2>
          <h3>GitHub Pages</h3>
          <p>
            Diese Website wird auf GitHub Pages gehostet. Anbieter ist die GitHub Inc., 
            88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
          </p>
          <p>
            GitHub kann beim Besuch dieser Website technische Informationen einschließlich Ihrer 
            IP-Adresse erfassen. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in 
            der Datenschutzerklärung von GitHub:{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
               target="_blank" rel="noopener noreferrer">
              https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
            </a>
          </p>
        </section>

        <section>
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten (GitHub) erhebt und speichert automatisch Informationen in 
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
            Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Diese Website verwendet keine Cookies. Es werden keine Tracking-Tools oder 
            Analyse-Software eingesetzt.
          </p>
        </section>

        <section>
          <h2>6. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte:</p>
          <ul>
            <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung Ihrer Daten</li>
            <li>Recht auf Einschränkung der Datenverarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht gegen die Datenverarbeitung</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
          </ul>
        </section>

        <section>
          <h2>7. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden. 
            Die Kontaktdaten finden Sie im Impressum.
          </p>
        </section>

        <section>
          <h2>8. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites (z.B. Humaaans). Auf den Inhalt 
            dieser externen Seiten haben wir keinen Einfluss. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>

        <section className="legal-update">
          <p><em>Stand: {new Date().toLocaleDateString('de-DE')}</em></p>
        </section>
      </div>
    </div>
  );
}

// Made with Bob
