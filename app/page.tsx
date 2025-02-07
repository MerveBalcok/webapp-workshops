"use client";

import { useState, useEffect } from "react";
import WorkshopCard from "@/components/WorkshopCard";
import FilterBar from "@/components/FilterBar";
import type { Workshop } from "../types/types";
import "../css/components/page.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/toast.css";

export default function Home() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Funktion zum Abrufen der Workshops
  const fetchWorkshops = async (searchTerm = "", date = "") => {
    setLoading(true);
    setError(null); // Zurücksetzen des Fehlers vor dem Abruf
    try {
      const res = await fetch(
        `/api/search-workshops?searchTerm=${searchTerm}&date=${date}`
      );
      if (!res.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      const text = await res.text();
      if (!text) {
        throw new Error("Leere Antwort");
      }
      const data = JSON.parse(text) as { workshops: Workshop[] };
      setWorkshops(data.workshops);
    } catch (error) {
      console.error("Fehler beim Abrufen der Workshops:", error);
      setError(
        "Fehler beim Laden der Workshops. Bitte versuche es später erneut."
      );
      toast.error(
        "Fehler beim Laden der Workshops. Bitte versuche es später erneut."
      ); // Benutzerbenachrichtigung
    } finally {
      setLoading(false);
    }
  };

  // Initialer Abruf der Workshops beim Start
  useEffect(() => {
    fetchWorkshops();
  }, []);

  // Filtere Workshops basierend auf dem Suchbegriff und dem Datum
  useEffect(() => {
    const filterDate = new Date(selectedDate);
    const filtered = workshops.filter((workshop) => {
      const workshopDate = new Date(workshop.date);
      const timeDiff = Math.abs(workshopDate.getTime() - filterDate.getTime());
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Differenz in Tagen
      return (
        workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (dayDiff <= 7 || !selectedDate)
      ); // Workshops innerhalb von 7 Tagen
    });
    setFilteredWorkshops(filtered);
  }, [workshops, searchTerm, selectedDate]);

  // Handhabung der Suchanfrage
  const handleSearch = (searchTerm: string, date?: string) => {
    setSearchTerm(searchTerm);
    setSelectedDate(date || ""); // Setze das Datum, wenn angegeben
    fetchWorkshops(searchTerm, date || ""); // Hole Workshops basierend auf Suchbegriff und Datum
  };

  // Zurücksetzen der Suche
  const handleReset = () => {
    setSearchTerm("");
    setSelectedDate("");
    fetchWorkshops(); // Hole alle Workshops zurück
  };

  // Scrollen zum Workshop-Bereich, wenn der Hash #workshops in der URL vorhanden ist
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#workshops") {
      const element = document.getElementById("workshops");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="overlay">
          <h1>Tauche ein in kreative Workshops</h1>
          <div className="filter-container">
            <FilterBar onSearch={handleSearch} onReset={handleReset} />
          </div>
        </div>
      </section>
      <main className="container">
        <div id="workshops" className="workshops-header">
          <h2 className="text-center">Neuste Workshops</h2>
          <p className="workshops-count">
            {filteredWorkshops.length} Workshops gefunden
          </p>
        </div>
        {loading ? (
          <p>Lade Workshops...</p>
        ) : error ? (
          <p className="error-message">{error}</p> // Anzeige der Fehlermeldung im UI
        ) : (
          <div className="workshops-grid">
            {filteredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
