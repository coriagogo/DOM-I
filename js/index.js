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
let services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1'];

let product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2'];

let vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3'];

let features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4'];

let about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5'];

let contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];

// cta
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaHeader = document.getElementsByTagName('h1')[0];
ctaHeader.innerText = siteContent['cta']['h1'];

let ctaBtn = document.getElementsByTagName('button')[0];
ctaBtn.innerText = siteContent['cta']['button'];

// main content headers

let mainContentFeaturesH = document.getElementsByTagName('h4')[0];
mainContentFeaturesH.innerText = siteContent['main-content']['features-h4'];

let mainContentAboutH = document.getElementsByTagName('h4')[1];
mainContentAboutH.innerText = siteContent['main-content']['about-h4'];

let mainContentServicesH = document.getElementsByTagName('h4')[2];
mainContentServicesH.innerText = siteContent['main-content']['services-h4'];

let mainContentProductH = document.getElementsByTagName('h4')[3];
mainContentProductH.innerText = siteContent['main-content']['product-h4'];

let mainContentVisionH = document.getElementsByTagName('h4')[4];
mainContentVisionH.innerText = siteContent['main-content']['vision-h4'];

// middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// main content

let mainContentFeatures = document.getElementsByTagName('p')[0];
mainContentFeatures.innerText = siteContent['main-content']['features-content'];

let mainContentAbout = document.getElementsByTagName('p')[1];
mainContentAbout.innerText = siteContent['main-content']['about-content'];

let mainContentServices = document.getElementsByTagName('p')[2];
mainContentServices.innerText = siteContent['main-content']['services-content'];

let mainContentProduct = document.getElementsByTagName('p')[3];
mainContentProduct.innerText = siteContent['main-content']['product-content'];

let mainContentVision = document.getElementsByTagName('p')[4];
mainContentVision.innerText = siteContent['main-content']['vision-content'];

// contact

let contactHeader = document.getElementsByTagName('h4')[5];
contactHeader.innerText = siteContent['contact']['contact-h4'];

let contactAddress = document.getElementsByTagName('p')[5];
contactAddress.innerText = siteContent['contact']['address'];

let contactPhone = document.getElementsByTagName('p')[6];
contactPhone.innerText = siteContent['contact']['phone'];

let contactEmail = document.getElementsByTagName('p')[7];
contactEmail.innerText = siteContent['contact']['email'];

// footer

let footerCopy = document.getElementsByTagName('p')[8];
footerCopy.innerText = siteContent['footer']['copyright'];

