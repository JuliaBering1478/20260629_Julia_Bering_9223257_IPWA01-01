function showSummary(ev) {
  
    ev.preventDefault()

    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var strasse = document.getElementById("strasse").value;
    var zusammenfassung = "Vorname: " + vorname + "<br>" +
                        "Nachname: " + nachname + "<br>" +
                        "Straße: " + strasse + "<br>"
var ArtKleidungsstücke = document.getElementById("ArtKleidungsstücke").checked;
  var ArtKleidungsstücke2 = document.getElementById("ArtKleidungsstücke2").checked;
  var Kriesengebiete = document.getElementById("Kriesengebiete").value;
  var Kriesengebiete2 = document.getElementById("Kriesengebiete2").value;

  document.getElementById("zusammenfassung").innerHTML = zusammenfassung;

}