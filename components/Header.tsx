// components/Header.tsx
import "../css/components/header.css";
import Link from "next/link";

// Definiere den Typ für die Link-Zielobjekte
type LinkTarget = {
  text: string; // Text, der im Link angezeigt wird
  url: string; // URL, zu der der Link führt
};

// Erstelle eine Liste von Links für die Navigation
const linkTargets: LinkTarget[] = [
  {
    text: "Home",
    url: "/", // Link zur Startseite
  },
  {
    text: "Workshops",
    url: "/#workshops", // Link zur Startseite und zum Workshops-Abschnitt
  },
  {
    text: "Vereine",
    url: "/vereine", // Link zur Vereine-Seite
  },
];

// Header-Komponente, die die Navigationslinks anzeigt
export default function Header() {
  return (
    <header className="site-header">
      {" "}
      {/* Header-Bereich der Seite */}
      <nav>
        <ul className="nav-links">
          {" "}
          {/* Liste der Navigationslinks */}
          {linkTargets.map(({ text, url }) => (
            <li key={url}>
              {" "}
              {/* Jedes Listenelement erhält eine eindeutige Schlüssel-ID */}
              <Link href={url} className="nav-link">
                {" "}
                {/* Next.js Link-Komponente für Navigation */}
                {text} {/* Text des Links */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
