document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature-item");

    const fadeInFeatures = () => {
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.classList.add("visible");
            }, index * 200); // Adds delay for each item
        });
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            fadeInFeatures();
        }
    });
});
