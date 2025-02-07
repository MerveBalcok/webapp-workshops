import Link from "next/link";
import "../css/components/workshopCard.css";
import type { Workshop } from "../types/types"; // Importiere den Typ

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  // URL des Instagram-Profils, wenn vorhanden, sonst # als Fallback
  const instagramUrl =
    workshop.instagramPostUrl || workshop.Verein?.instagramProfileUrl || "#";

  return (
    <div className="workshop-card">
      {/* Link zum Instagram-Profil des Workshops */}
      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={`/${workshop.imageUrl}`} // Bild des Workshops
          alt={workshop.title} // Alternativtext für das Bild
          className="workshop-image"
        />
      </Link>
      <div className="workshop-details">
        {/* Link zum Instagram-Profil des Workshops mit Workshop-Titel */}
        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <div className="workshop-title-container">
            <img
              src={`/${workshop.Verein?.avatarUrl || "img/default-avatar.png"}`} // Avatar des Vereins oder Standardbild
              alt={workshop.Verein?.name || "Default Name"} // Alternativtext für das Avatarbild
              className="workshop-avatar"
            />
            <h3 className="workshop-title">{workshop.title}</h3>{" "}
            {/* Titel des Workshops */}
          </div>
        </Link>
        <div className="workshop-info">
          <p className="date">{new Date(workshop.date).toLocaleDateString()}</p>{" "}
          {/* Datum des Workshops */}
          <p className="location">{workshop.location}</p>{" "}
          {/* Standort des Workshops */}
          <p className="price">{workshop.cost}€</p> {/* Kosten des Workshops */}
        </div>
      </div>
    </div>
  );
}

// note: npx prisma studio, um das Prisma Studio zu oeffnen
// Wichtige Befehle:
// npx prisma migrate dev --name add_avatarUrl
// npx prisma migrate dev --name require_avatarUrl
// npx prisma migrate dev --name remove_avatarUrl
