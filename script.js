document.addEventListener("DOMContentLoaded", function () {
    function animateText(elementId, loop = false) {
        const textElement = document.getElementById(elementId);
        const text = textElement.textContent;
        textElement.textContent = "";

        function showText() {
            textElement.textContent = ""; // Clear text
            text.split("").forEach((char, index) => {
                setTimeout(() => {
                    textElement.textContent += char;
                }, index * 100);
            });

            if (loop) {
                setTimeout(eraseText, text.length * 100 + 1000); // Wait 1 sec before erasing
            }
        }

        function eraseText() {
            setTimeout(() => {
                textElement.textContent = "";
                setTimeout(showText, 0); // Restart animation
            }, 500);
        }

        showText();
    }

    // Animate "Welcome To ChoferGo!!" once on page load
    animateText("animated-text");

    // Animate "Book skilled drivers on single click." in a loop
    animateText("loop-animated-text", true);
});
