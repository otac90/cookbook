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
    /* Bild des Rezepts ändern, beim anklicken der Card */

    document.querySelector("#r1").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/lasagne.jpg";
        document.querySelector("#rezept-name").innerHTML = "Lasagne";
        rezeptModal.style.display = "block";
    }
    
    document.querySelector("#r2").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/pizza.jpg";
        document.querySelector("#rezept-name").innerHTML = "Pizza";
        rezeptModal.style.display = "block";
    }
    
    document.querySelector("#r3").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/cheeseburger.jpg";
        document.querySelector("#rezept-name").innerHTML = "Cheeseburger";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r4").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/gulasch.jpg";
        document.querySelector("#rezept-name").innerHTML = "Gulasch";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r5").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/schnitzel.jpg";
        document.querySelector("#rezept-name").innerHTML = "Schnitzel";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r6").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/bolognese.jpg";
        document.querySelector("#rezept-name").innerHTML = "Bolognese";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r7").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/chiliconcarne.jpg";
        document.querySelector("#rezept-name").innerHTML = "Chili Con Carne";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r8").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/linsensuppe.jpg";
        document.querySelector("#rezept-name").innerHTML = "Linsensuppe";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r9").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/vollkornbrot.jpg";
        document.querySelector("#rezept-name").innerHTML = "Vollkornbrot";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r10").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/käsespätzle.jpg";
        document.querySelector("#rezept-name").innerHTML = "Käsespätzle";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r11").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/rührei.jpg";
        document.querySelector("#rezept-name").innerHTML = "Rührei";
        rezeptModal.style.display = "block";
    }

    document.querySelector("#r12").onclick = function() {
        document.querySelector("#rezept-bild").src = "../media/hotdog.jpg";
        document.querySelector("#rezept-name").innerHTML = "Hot Dog";
        rezeptModal.style.display = "block";
    }
}

function closeRezept() {
    rezeptModal.style.display = "none";
}

