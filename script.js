     document.addEventListener('DOMContentLoaded', function () {
        // Check if the modal has already been shown
        if (!localStorage.getItem('newsletterShown')) {
            // Show the modal
            var newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'), {
                keyboard: false
            });
            newsletterModal.show();
            
            // Set localStorage to remember that the modal has been shown
            localStorage.setItem('newsletterShown', 'true');
        }
    });

    // Event listener for the "Subscribe to Newsletter" button click
    document.getElementById('newsletterBtn').addEventListener('click', function () {
        var newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'), {
            keyboard: false
        });
        newsletterModal.show();
    });
 