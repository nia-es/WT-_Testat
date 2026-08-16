// Warten, bis das gesamte HTML-Dokument geladen ist,
// bevor wir versuchen, auf den Container zuzugreifen
document.addEventListener("DOMContentLoaded", () => {

    const url = "https://raw.githubusercontent.com/ZbWWebTech/WT2/refs/heads/main/Aufgabenstellungen/Kapitel_2.1/artikel.json";

    // Container holen, in den die Artikel eingefügt werden sollen
    const container = document.querySelector(".container-menu");

    fetch(url)
        .then(response => response.json()) // Antwort in JS-Objekt/Array umwandeln
        .then(daten => {
            // daten ist jetzt ein Array mit mehreren Artikel-Objekten
            // Für jeden einzelnen Artikel im Array eine Aktion ausführen:
            daten.forEach(artikel => {

                // Neues, leeres <section>-Element im Arbeitsspeicher erzeugen
                const artikelSection = document.createElement("section");
                artikelSection.classList.add("news-vorschau");

                // Inhalt des neuen Elements befüllen
                // Wir bauen das innere HTML analog zur bisherigen, statischen Struktur
                artikelSection.innerHTML = `
                    <h2>${artikel.Titel}</h2>
                    <p>${artikel.Text}</p>
                `;

                // Neu erstelltes Element in den Container einhängen,
                // damit es im sichtbaren HTML erscheint
                container.appendChild(artikelSection);
            });
        })
        .catch(fehler => {
            // Falls beim Laden/Verarbeiten etwas schiefgeht (z. B. Netzwerkfehler)
            console.error("Fehler beim Laden der Artikel:", fehler);
        });

});