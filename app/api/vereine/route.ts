import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
  // Führe eine Abfrage auf der "verein"-Tabelle durch
  const vereine = await prisma.verein.findMany({
    select: {
      id: true, // Wähle die ID des Vereins aus
      name: true, // Wähle den Namen des Vereins aus
      avatarUrl: true, // Wähle die URL des Vereinsavatars aus
      instagramProfileUrl: true, // Wähle die URL zum Instagram-Profil des Vereins aus
    },
  });

  // Gib die gefundenen Vereine als JSON-Antwort zurück
  return NextResponse.json({ vereine });
}
