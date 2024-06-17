const boxes = document.querySelectorAll(".box"),
    image = document.querySelector(".image");

    // loop through each boxes element
    boxes.forEach((box) => {
        // when the draggable element dragged over a box element
        box.addEventListener("dragover", (e) => {
            e.preventDefault();
            box.classList.add("hovered");
        });

        // when dragable element leaves box element
        box.addEventListener("dragleave", () => {
            box.classList.remove("hovered");
        });
        
         // when dragable element dropped on a box element
        box.addEventListener("drop", () => {
            box.appendChild(image);
            box.classList.remove("hovered");
        });
    });
