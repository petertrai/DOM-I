const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
    
  },
};
// Images
const logoImage = document.querySelector('#logo-img');
logoImage.src = siteContent.images['logo-img'];
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.images["cta-img"]
const midImage = document.querySelector('#middle-img');
midImage.src = siteContent.images['accent-img']

// Footer Link
const footerLink = document.querySelector('footer a');
footerLink.classList.add('bold') 
footerLink.textContent = siteContent.footer.copyright;

// Contact
const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact.address
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact.phone
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact.email

// Top Content
// 1st child / div
const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content']
// 2nd child / div
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

// Bottom Content 
// 1st child/div
const bottomContent = document.querySelector('.bottom-content');
bottomContent.children[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomContent.children[0].children[1].textContent = siteContent['main-content']['services-content']
// 2nd child / div
bottomContent.children[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomContent.children[1].children[1].textContent = siteContent['main-content']['product-content']
// 3rd child / div 
bottomContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomContent.children[2].children[1].textContent = siteContent['main-content']['vision-content']

// CTA 
const cta = document.querySelector('.cta-text')
console.log(cta)
cta.querySelector('h1').textContent = siteContent.cta.h1
cta.querySelector('button').textContent = siteContent.cta.button

//nav
const nav = document.querySelector('nav');
nav.children[0].textContent = siteContent.nav['nav-item-1']
nav.children[0].classList.add('italic')
nav.children[1].textContent = siteContent.nav['nav-item-2']
nav.children[1].classList.add('italic')
nav.children[2].textContent = siteContent.nav['nav-item-3']
nav.children[2].classList.add('italic')
nav.children[3].textContent = siteContent.nav['nav-item-4']
nav.children[3].classList.add('italic')
nav.children[4].textContent = siteContent.nav['nav-item-5']
nav.children[4].classList.add('italic')
nav.children[5].textContent = siteContent.nav['nav-item-6']
nav.children[5].classList.add('italic')

console.log(nav);

