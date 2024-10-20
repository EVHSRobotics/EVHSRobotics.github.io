document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function(){
            document.querySelector('.center-title').classList.add('fade-in-logo');
            console.log('faded in')
            setTimeout(function(){
                document.querySelector('.center-title').classList.add('shift-left');
                console.log('sliding left...')
                setTimeout(function(){
                    document.querySelector('.team-number').classList.add('fade-in-text');
                    setTimeout(function() {
                    document.querySelector('.team-name').classList.add('fade-in-text');
                    document.querySelector('.team-quote').classList.add('fade-in-text');
                    console.log('show number, name, quote')
                    }, 500)
                }, 1000)
            }, 1000)
        }, 500)
    });

document.querySelectorAll('.bottom-image').addEventListener("DOMContentLoaded", function() {
    console.log('images loaded')
})


$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });



   // Function to handle the intersection observer callback
   function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer instance
  const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: 0.3 });

  // Get all elements with the class 'fade-in'
  const targets = document.querySelectorAll('.fade-in');

  // Observe each target element
  targets.forEach(target => {
    observer.observe(target);
  });