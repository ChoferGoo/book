document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsContainer = document.getElementById("reviewsContainer");
    const stars = document.querySelectorAll(".rating span");
    const ratingInput = document.getElementById("rating");

    // Load existing reviews
    loadReviews();

    // Star Rating System
    stars.forEach(star => {
        star.addEventListener("click", function () {
            let value = this.getAttribute("data-value");
            ratingInput.value = value;

            // Highlight selected stars
            stars.forEach(s => s.classList.remove("selected"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("selected");
            }
        });
    });

    // Handle form submission
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = ratingInput.value;
        const review = document.getElementById("review").value;

        if (name && rating && review) {
            const reviewData = { name, rating, review };
            saveReview(reviewData);
            displayReview(reviewData);

            reviewForm.reset();
            stars.forEach(s => s.classList.remove("selected"));
        } else {
            alert("Please fill in all fields and select a rating.");
        }
    });

    function saveReview(reviewData) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(reviewData);
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    function loadReviews() {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.forEach(displayReview);
    }

    function displayReview(reviewData) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review-card");

        reviewElement.innerHTML = `
            <h4>${reviewData.name}</h4>
            <p class="stars">${"★".repeat(reviewData.rating)}</p>
            <p>${reviewData.review}</p>
        `;

        reviewsContainer.prepend(reviewElement);
    }
});
