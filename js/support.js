const cardobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('shown-card')
            entry.target.classList.remove('hidden-card')
            cardobserver.unobserve(entry.target);
        }


    });
});

const hiddencards = document.querySelectorAll('.hidden-card')
hiddencards.forEach((el) => cardobserver.observe(el))


const tiercardobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('shown-tier-card')
            entry.target.classList.remove('hidden-tier-card')
            tiercardobserver.unobserve(entry.target);
        }
    });
});

const hiddentiercards = document.querySelectorAll('.hidden-tier-card')
hiddentiercards.forEach((el) => tiercardobserver.observe(el))


const tierheadingobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('shown-tier-heading')
            entry.target.classList.remove('hidden-tier-heading')
            tierheadingobserver.unobserve(entry.target);
        } else {
            entry.target.classList.remove('shown-tier-heading')
            entry.target.classList.add('hidden-tier-heading')
        }
    });
});

const hiddentierheadings = document.querySelectorAll('.hidden-tier-heading')
hiddentierheadings.forEach((el) => tierheadingobserver.observe(el))


const tierreqobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('shown-tier-req')
            entry.target.classList.remove('hidden-tier-req')
            tierreqobserver.unobserve(entry.target);
        } else {
            entry.target.classList.remove('shown-tier-req')
            entry.target.classList.add('hidden-tier-req')
        }
    });
});

const hiddentierreqs = document.querySelectorAll('.hidden-tier-req')
hiddentierreqs.forEach((el) => tierreqobserver.observe(el))

const tierperkobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('shown-tier-perk')
            entry.target.classList.remove('hidden-tier-perk')
            tierperkobserver.unobserve(entry.target);
        } else {
            entry.target.classList.remove('shown-tier-perk')
            entry.target.classList.add('hidden-tier-perk')
        }
    });
});

const hiddentierperks = document.querySelectorAll('.hidden-tier-perk')
hiddentierperks.forEach((el) => tierperkobserver.observe(el))