"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Verein } from "../../types/types";
import "../../css/components/vereine.css";

export default function VereinePage() {
  const [vereine, setVereine] = useState<Verein[]>([]);
  const [loading, setLoading] = useState(true);

  // Funktion zum Abrufen der Vereine von der API
  const fetchVereine = async () => {
    const res = await fetch("/api/vereine"); // API-Anfrage an den Endpunkt /api/vereine
    const data = (await res.json()) as { vereine: Verein[] }; // JSON-Daten parsen
    setVereine(data.vereine); // Vereine in den State setzen
    setLoading(false); // Ladezustand auf false setzen
  };

  // useEffect-Hook, der die Vereine beim ersten Laden der Seite abruft
  useEffect(() => {
    fetchVereine();
  }, []);

  return (
    <div className="vereine-container">
      <h1>Alle Vereine</h1>
      {loading ? (
        <p>Lade Vereine...</p> // Anzeige während der Daten geladen werden
      ) : (
        <div className="vereine-list">
          {vereine.map((verein) => (
            <div key={verein.id} className="verein-card">
              <Link
                href={verein.instagramProfileUrl || "https://www.instagram.com"}
                // Link zum Instagram-Profil des Vereins oder zur Standardseite
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/${
                    verein.avatarUrl || "public/img/default-avatar.jpg"
                  }`} // Avatar-Bild des Vereins oder Standardbild
                  alt={verein.name}
                  className="verein-avatar"
                />
              </Link>
              <Link
                href={verein.instagramProfileUrl || "https://www.instagram.com"}
                // Link zum Instagram-Profil des Vereins oder zur Standardseite
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{verein.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
