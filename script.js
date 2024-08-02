// //identificam butonul pe care vom da click sa schimbam tema
// const switcherElem = document.querySelector(".switcher");
// const bodyElem = document.querySelector("body");

// //definim o functie care se va executa la click pe btn "switcherElem"
// const toggleTheme = () => {
//   //pe body facem toggle(adaugam si stergem) clasa "dark-mode"
//   bodyElem.classList.toggle("dark-mode");
//   //pentru a persista modificarile si dupa ce reincarcam pagina, adaugam in local storage proprietatea "DarkMode" si se seteaza valoarea true sau false in functie daca exista clasa dark-mode pe body
//   localStorage.setItem(
//     "DarkMode",
//     bodyElem.classList.contains("dark-mode") ? "true" : "false" //verificam daca exista clasa "dark-mode" si stabilim valoarea pt local storage
//   );
// };

// //luam din local storage valoarea proprietatii "DarkMode" si verificam daca este true inseamna ca tema dark-mode va fi afisata, adica se adauga clasa "dark-mode" pe body
// if (localStorage.getItem("DarkMode") === "true") {
//   bodyElem.classList.add("dark-mode");
// }

// //adaugam un ascultator de evenimente pe butonul de switch, la click se va executa functia "toggleTheme"
// switcherElem.addEventListener("click", toggleTheme);
