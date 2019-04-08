const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



// create nav items
const navItems = document.querySelectorAll('nav a');


const services = navItems[0];
services.innerText = siteContent['nav']['nav-item-1'];
services.style.color = 'green';

const product = navItems[1];
product.innerText = siteContent['nav']['nav-item-2'];
product.style.color = 'green';

const vision = navItems[2];
vision.innerText = siteContent['nav']['nav-item-3'];
vision.style.color = 'green';

const features = navItems[3];
features.innerText = siteContent['nav']['nav-item-4'];
features.style.color = 'green';

const about = navItems[4];
about.innerText = siteContent['nav']['nav-item-5'];
about.style.color = 'green';

const contact = navItems[5];
contact.innerText = siteContent['nav']['nav-item-6'];
contact.style.color = 'green';

// creating new nav with appendChild

const addedNav1 = document.createElement('a');
const addedNav1Text = document.createTextNode ('New nav');

addedNav1.appendChild(addedNav1Text);
addedNav1.style.padding = "0 0 0 20px";
addedNav1.style.color = 'green';

contact.appendChild(addedNav1);

// creating space between new nav item

const addedNav2 = document.createElement('a');
const addedNav2Text = document.createTextNode ('New nav 2');

addedNav2.appendChild(addedNav2Text);
addedNav2.style.padding = "0 20px 0 0";
addedNav2.style.color = 'green';

services.prepend(addedNav2);



// cta
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaHeader = document.getElementsByTagName('h1')[0];
ctaHeader.innerText = siteContent['cta']['h1'];

const ctaBtn = document.getElementsByTagName('button')[0];
ctaBtn.innerText = siteContent['cta']['button'];

// main content headers



const mainContentFeaturesH = document.getElementsByTagName('h4')[0];
mainContentFeaturesH.innerText = siteContent['main-content']['features-h4'];

const mainContentAboutH = document.getElementsByTagName('h4')[1];
mainContentAboutH.innerText = siteContent['main-content']['about-h4'];

const mainContentServicesH = document.getElementsByTagName('h4')[2];
mainContentServicesH.innerText = siteContent['main-content']['services-h4'];

const mainContentProductH = document.getElementsByTagName('h4')[3];
mainContentProductH.innerText = siteContent['main-content']['product-h4'];

const mainContentVisionH = document.getElementsByTagName('h4')[4];
mainContentVisionH.innerText = siteContent['main-content']['vision-h4'];

// middle image

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// main content

const mainContentFeatures = document.getElementsByTagName('p')[0];
mainContentFeatures.innerText = siteContent['main-content']['features-content'];

const mainContentAbout = document.getElementsByTagName('p')[1];
mainContentAbout.innerText = siteContent['main-content']['about-content'];

const mainContentServices = document.getElementsByTagName('p')[2];
mainContentServices.innerText = siteContent['main-content']['services-content'];

const mainContentProduct = document.getElementsByTagName('p')[3];
mainContentProduct.innerText = siteContent['main-content']['product-content'];

const mainContentVision = document.getElementsByTagName('p')[4];
mainContentVision.innerText = siteContent['main-content']['vision-content'];

// contact

const linebreak = document.createElement('br');

const contactHeader = document.getElementsByTagName('h4')[5];
contactHeader.innerText = siteContent['contact']['contact-h4'];

const contactAddress = document.getElementsByTagName('p')[5];
contactAddress.innerText = siteContent['contact']['address'];



let contactPhone = document.getElementsByTagName('p')[6];
contactPhone.innerText = siteContent['contact']['phone'];

let contactEmail = document.getElementsByTagName('p')[7];
contactEmail.innerText = siteContent['contact']['email'];

// footer

let footerCopy = document.getElementsByTagName('p')[8];
footerCopy.innerText = siteContent['footer']['copyright'];

