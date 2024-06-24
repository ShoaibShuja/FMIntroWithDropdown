/**** Normal Devices Script ****/

const featuresNav = document.getElementById("features__nav");
const companyNav = document.getElementById("company__nav");

const featuresDisplay = () => {
  document.getElementById("features__box").classList.toggle("active");
  document.getElementById("features__arrow").classList.toggle("active");
}

const companyDisplay = () => {
  document.getElementById("company__box").classList.toggle("active");
  document.getElementById("company__arrow").classList.toggle("active");
}

featuresNav.onclick = () => featuresDisplay();
companyNav.onclick = () => companyDisplay();

/**** Small Devices Script ****/

const openMenuIcon = document.getElementById("menu");
const closeMenuIcon = document.getElementById("close__menu");
const hamMenuContainer = document.getElementById("hamburger__menu");

const showHamMenu = () => {
  hamMenuContainer.classList.add("active");
}

const hideHamMenu = () => {
  hamMenuContainer.classList.remove("active");
}

openMenuIcon.onclick = () => showHamMenu();
closeMenuIcon.onclick = () => hideHamMenu();

/* Dropdown */

const dropdownHamFeatures = () => {
  document.getElementById("features__box-ham").classList.toggle("active");
  document.getElementById("ham__features-image").classList.toggle("active");
}

const dropdownHamCompany = () => {
  document.getElementById("company__box-ham").classList.toggle("active");
  document.getElementById("ham__company-image").classList.toggle("active");
}

document.getElementById("ham__features-text").onclick = () => dropdownHamFeatures();
document.getElementById("ham__company-text").onclick = () => dropdownHamCompany();