function toggleContent() {
    const spendenart = document.getElementById("spendenart").value;
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");

    // Inhalte ausblenden
    content1.style.display = "none";
    content2.style.display = "none";

    // Passenden Inhalt anzeigen
    if (spendenart === "option1") {
        content1.style.display = "block";
    } else if (spendenart === "option2") {
        content2.style.display = "block";
    }
}
