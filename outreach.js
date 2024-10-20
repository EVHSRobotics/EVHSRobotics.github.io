document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');

    const options = {
        threshold: 0.5 // Adjust as needed
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });

    function startCounting(element) {
        const target = +element.getAttribute('data-target');
        let count = 0;
        const speed = 200; // The lower the slower

        const updateCount = () => {
            const inc = target / speed;

            if (count < target) {
                count += inc;
                element.innerText = '+' + Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                element.innerText = '+' + target;
            }
        };

        // Start counting
        updateCount();
    }
});
