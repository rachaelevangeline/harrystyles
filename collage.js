document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".draggable");
    const collageArea = document.getElementById("collageArea");

    images.forEach(image => {
        image.addEventListener("mousedown", function (event) {
            let offsetX = event.clientX - image.offsetLeft;
            let offsetY = event.clientY - image.offsetTop;

            function moveImage(e) {
                image.style.position = "absolute";
                image.style.left = (e.clientX - offsetX) + "px";
                image.style.top = (e.clientY - offsetY) + "px";
            }

            document.addEventListener("mousemove", moveImage);

            document.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", moveImage);
            }, { once: true });
        });
    });

    // Download Collage as Image
    document.getElementById("downloadCollage").addEventListener("click", function () {
        html2canvas(collageArea, { useCORS: true }).then(canvas => {
            let link = document.createElement("a");
            link.download = "harry-styles-collage.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});
