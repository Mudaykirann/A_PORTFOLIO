window.onscroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 90) {
        navbar.classList.add('sticky');
        navbar.style.width = '100%';
    } else {
        navbar.classList.remove('sticky');
        navbar.style.width = '85%';
    }
}

const menu = document.querySelector('.hamburger');
const respNav = document.querySelector('.resp__nav');
const remove = document.querySelector('.remove');
const body = document.querySelector('body');
menu.onclick = () => {
    respNav.classList.add('active')

}
remove.onclick = () => {
    respNav.classList.remove('active')
}



const text = document.querySelector(".profession__text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer"
    }, 500);
    //     setTimeout(() => {
    //         text.textContent = "Backend Developer"
    //     }, 2000);
    //     setTimeout(() => {
    //         text.textContent = "Software Designer"
    //     }, 4000);
    // }
}
textLoad();
setInterval(textLoad, 6000);




const sr = ScrollReveal({
    distance: '65px',
    duration: 2500,
    reset: true
})
const sr1 = ScrollReveal({
    distance: '105px',
    duration: 2300,
    reset: true
})
const sr2 = ScrollReveal({
    distance: '150px',
    duration: 2300,
    reset: true
})
//sr.reveal('.navbar', { origin: "top", delay: 300 });
sr.reveal('.title,.name', { origin: 'left', delay: 300 });
sr.reveal('.profession h1', { origin: 'bottom', delay: 300 });
sr1.reveal('.container .left p,.container .left .line,.left .boxes .box', { origin: 'bottom', delay: 200 });
sr1.reveal('.right .profile', { origin: 'right', delay: 200 })
sr1.reveal('.right .box__icon', { origin: 'top', delay: 200 })

sr1.reveal('.about__container .heading,.about__container p', { origin: 'top', delay: 300 })
sr1.reveal('.about__content .left', { origin: 'left', delay: 200 })
sr1.reveal('.about__content .right', { origin: 'right', delay: 200 })
sr1.reveal('.about__container .resume', { origin: 'bottom', delay: 400 })


sr1.reveal('.skills_container .heading,.skills_container p', { origin: 'top', delay: 300 })
const cols = document.querySelectorAll('.skills_container .row .col');

let i = 300;
cols.forEach((col) => {
    sr2.reveal(col, { origin: 'top', delay: `${i}` })
    i = i + 100;
})


sr1.reveal('.projects__container .heading,.projects__container p', { origin: 'top', delay: 300 })

sr1.reveal(' .l1, .l2, .l3', { origin: 'left', delay: 200 })

sr1.reveal('.r1,.r2', { origin: 'right', delay: 200 })


sr1.reveal('.contact-container .row .col-one', { origin: 'left', delay: 200 })

sr1.reveal('.contact-container .row .col-two', { origin: 'right', delay: 200 })


const footerCols = document.querySelectorAll('footer .row .col');


footerCols.forEach((col) => {
    sr1.reveal(col, { origin: 'top', delay: 300 })
})



const contactName = document.querySelector('#contact-name')
const contactEmail = document.querySelector('#contact-email')
const contactMsg = document.querySelector('#Message');
const button = document.querySelector('#submit');
button.addEventListener('click', sendEmail)

function sendEmail() {
    if (contactMsg && contactName && contactEmail) {
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'udaykirankirru2003@gmail.com',
            Password: "Uday@63012",
            To: 'udaykiran63012@gmail.com',
            From: contactEmail.value,
            Subject: "New Contact Query Form",
            Body: contactMsg.value,
        })
            .then(function (message) {
                alert("mail sent successfully")
            });

        console.log(contactEmail.value)
        console.log(contactName.value)
        console.log(contactMsg.value)
        contactEmail.value = ''
        contactMsg.value = ''
        contactName.value = ''
    } else { alert("Enter the crediantials") }

}








