document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    const showBoxes = () => {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 50; // Trigger 50px before reaching the box

            if (boxTop < triggerPoint) {
                box.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', showBoxes);
    showBoxes(); // Initial call in case elements are already in view
});