/* Mobile Menü anzeigen bzw. verbergen */
let menu = document.querySelector("#mobile");

function showMenu() {
    menu.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
}

/* Rezept öffnen bzw. schließen */

let rezeptModal = document.querySelector("#rezept");

function showRezept() {
    /* Pfad vom Bild und Name des Rezepts in eine Variable speichern */
    let image = document.querySelector("#rezept-bild");
    let rezeptName = document.querySelector("#rezept-name");

    image = image.src;
    rezeptName = rezeptName.textContent;

    const thumbnails = ["#i1", "#i2", "#i3", "#i4", "#i5", "#i6", "#i7", "#i8", "#i9", "#i10", "#i11", "#i12"];
    let tLength = thumbnails.length;

    const descriptions = ["#d1", "#d2", "#d3", "#d4", "#d5", "#d6", "#d7", "#d8", "#d9", "#d10", "#d11", "#d12"];
    let dLength = thumbnails.length;

    /*for(let t = 0; t < tLength; t++) {
        let thumbnail = document.querySelector(thumbnails[t]);
        thumbnail = thumbnail.src;
        image = thumbnail;

        document.querySelector("#rezept-bild").src = image;

        
        rezeptModal.style.display = "block";
    }*/

    for(let d = 0; d < dLength; d++) {
        let description = document.querySelector(descriptions[d]);
        description = description.textContent;
        rezeptName = description;

        document.querySelector("#rezept-name").innerHTML = rezeptName;
        
        rezeptModal.style.display = "block";
    }
}

function closeRezept() {
    rezeptModal.style.display = "none";
}

