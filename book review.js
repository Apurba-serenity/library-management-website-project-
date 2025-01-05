// JavaScript for dynamic interactions like 'Read More' button toggle
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const shortReview = button.previousElementSibling;
    shortReview.classList.toggle('expanded');
    button.textContent = shortReview.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});