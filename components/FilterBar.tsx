import "../css/components/filterbar.css";
import { useState } from "react";

// Definiere die Props, die die FilterBar-Komponente erwartet
interface FilterBarProps {
  onSearch: (searchTerm: string, date?: string) => void; // Callback-Funktion für die Suche
  onReset: () => void; // Callback-Funktion für das Zurücksetzen der Suche
}

export default function FilterBar({ onSearch, onReset }: FilterBarProps) {
  // Zustände für Suchbegriff und ausgewähltes Datum
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Funktion zum Handhaben der Suche
  const handleSearch = () => {
    onSearch(searchTerm, selectedDate); // Rufe die onSearch-Callback-Funktion mit den aktuellen Werten auf
  };

  // Funktion zum Handhaben des Zurücksetzens der Suche
  const handleReset = () => {
    setSearchTerm(""); // Setze den Suchbegriff zurück
    setSelectedDate(""); // Setze das Datum zurück
    onReset(); // Rufe die onReset-Callback-Funktion auf
  };

  return (
    <div className="filter-bar">
      <div className="input-group">
        {/* Suchfeld für Workshops */}
        <input
          type="text"
          placeholder="Suche nach Workshops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Aktualisiere den Suchbegriff
          className="search-input"
        />
        {/* Datumsauswahl für Workshops */}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)} // Aktualisiere das ausgewählte Datum
          className="filter-date"
        />
      </div>
      <div className="button-group">
        {/* Such-Button */}
        <button className="search-button" onClick={handleSearch}>
          Suche
        </button>
        {/* Zurücksetzen-Button */}
        <button className="reset-button" onClick={handleReset}>
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}
