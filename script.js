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

    document.getElementById("shareButton").addEventListener("click", function () {
        console.log("Share button clicked!");

        if (navigator.share) {
            console.log("Web Share API is supported.");

            navigator.share({
                title: 'ChoferGoo - Driver Booking',
                text: 'Book skilled & experienced drivers in just one click! Try ChoferGoo now.',
                url: 'https://chofergoo.github.io/book/'  // Replace with your actual hosted URL
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.log('Error sharing:', error));

        } else {
            console.log("Web Share API is not supported on this browser.");
            alert("Sharing is not supported on this browser.");
        }
    });

});
