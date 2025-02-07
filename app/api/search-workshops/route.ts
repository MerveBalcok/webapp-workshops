import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Lese den Suchbegriff aus den URL-Parametern
  const { searchParams } = new URL(req.url);
  const searchTerm = searchParams.get("searchTerm") || "";

  // Führe eine Abfrage auf der "workshop"-Tabelle durch
  const workshops = await prisma.workshop.findMany({
    where: {
      title: {
        contains: searchTerm, // Suche nach Workshops, deren Titel den Suchbegriff enthält
        mode: "insensitive", // Suchvorgang ist nicht case-sensitiv
      },
    },
    orderBy: { date: "desc" }, // Sortiere die Workshops nach Datum in absteigender Reihenfolge
    include: { Verein: true }, // Füge die zugehörigen Vereinsdaten zu jedem Workshop hinzu
  });

  // Gib die gefundenen Workshops als JSON-Antwort zurück
  return NextResponse.json({ workshops });
}
