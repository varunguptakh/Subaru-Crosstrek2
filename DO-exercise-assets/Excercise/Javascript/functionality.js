// Scroll to Section Smoothly
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Use jQuery animate to add smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Modal for Image Gallery
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Back to Top Button
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

// Show the button when scrolled down 20px
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to the top when button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
