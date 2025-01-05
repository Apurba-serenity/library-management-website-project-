document.addEventListener('DOMContentLoaded', () => {
    const issueForm = document.getElementById('issueForm');
    const returnForm = document.getElementById('returnForm');

    issueForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert(`Book "${issueForm.bookTitle.value}" issued successfully to ${issueForm.studentName.value} on ${issueForm.issueDate.value}.`);
        issueForm.reset(); // Reset the form after submission
    });

    returnForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert(`Book "${returnForm.returnBookTitle.value}" returned successfully by ${returnForm.returnStudentName.value} on ${returnForm.returnDate.value}.`);
        returnForm.reset(); // Reset the form after submission
    });
});