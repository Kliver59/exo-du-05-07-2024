//* ex-01

console.log("Bonjour le monde !");

//* ex-02
const prenom = "christopher";
function greet() {
  return `bonjour, ${prenom}`;
}
console.log(greet());

//* ex-03
const year = 1990;
const age = naissance(year);
function naissance(year) {
  const année = 2017;
  return année - year;
}

console.log("L'âge en 2017 est de" + " " + age + " " + "ans .");

//* ex-04
const yar = 1990;
const hundredYear = birthday(yar);
function birthday(yar) {
  const annee = 2023;
  const age = annee - yar;
  const hundredYear = annee + (100 - age);
  return hundredYear;
}

console.log("Il aura 100 ans en " + hundredYear);

//* ex-05
function Message(nombre) {
  for (let i = 0; i < nombre; i++) {
    console.log("Salut, ça farte ?");
  }
}
Message(10);

//* ex-06
function afficherNombre(nombre) {
  for (let i = 0; i < nombre - 1; i++) {
    console.log("Bonjour toi !");
  }
}
afficherNombre(10);

//* ex-07
function sept(numbers) {
  for (let i = 0; i < numbers; i++) {
    console.log(`Le nombre est ${i}`);
  }
}
sept(10);

//* ex-08
function huit(numberss) {
  for (let i = numberss - 1; i >= 0; i--) {
    console.log(`Le nombre est ${i}`);
  }
}
huit(10);

//* ex-09
const anneeCourante = new Date().getFullYear();
function afficherAnneesDepuisNaissance(anneeNaissance) {
  for (let annee = anneeNaissance; annee <= anneeCourante; annee++) {
    console.log(annee);
  }
}

afficherAnneesDepuisNaissance(1990);

//* ex-10
function afficherAgeParAnnee(anneeNaissance) {
  const anneeActuelle = new Date().getFullYear();

  for (let annee = anneeNaissance; annee <= anneeActuelle; annee++) {
    let age = annee - anneeNaissance;
    console.log(`En ${annee}, vous aviez ${age} ans.`);
  }
}

afficherAgeParAnnee(1990);

//* ex-11
function afficherAgeParAnnee(age) {
  for (let i = 0; i <= age; i++) {
    let anneesPassees = age - i;
    console.log(`Il y a ${anneesPassees} ans, tu avais ${i} ans.`);
  }
}

afficherAgeParAnnee(30);

//* ex-12
function afficherAgeParAnnee(age) {
  for (let i = 0; i <= age; i++) {
    let anneesPassees = age - i;
    if (i === Math.floor(age / 2)) {
      console.log(
        `Il y a ${anneesPassees} ans, tu avais la moitié de l'âge que tu as aujourd'hui.`
      );
    } else {
      console.log(`Il y a ${anneesPassees} ans, tu avais ${i} ans.`);
    }
  }
}
afficherAgeParAnnee(30);

//* ex-13
function genererFauxEmails() {
  var fauxEmails = [];

  for (var i = 1; i <= 50; i++) {
    var numero = ("0" + i).slice(-2);

    var email = `john.doe.${numero}@gmail.com`;
    fauxEmails.push(email);
  }

  return fauxEmails;
}

var listeFauxEmails = genererFauxEmails();

console.log(listeFauxEmails);

//* ex-14
function afficherEmailsPairs(emails) {
  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];
    var numeroStr = email.split(".")[2];
    var numero = parseInt(numeroStr, 10);

    if (numero % 2 === 0) {
      console.log(email);
    }
  }
}

var fauxEmails = genererFauxEmails();
afficherEmailsPairs(fauxEmails);

//* ex-15
function afficherPyramide(nbEtages) {
  if (nbEtages < 1 || nbEtages > 25) {
    console.log("Le nombre d'étages doit être compris entre 1 et 25.");
    return;
  }

  for (let i = 1; i <= nbEtages; i++) {
    let ligne = "";

    for (let j = 1; j <= i; j++) {
      ligne += "#";
    }

    console.log(ligne);
  }
}

afficherPyramide(5);

//* ex-16
function afficherPyramide(nbEtages) {
  if (nbEtages < 1 || nbEtages > 25) {
    console.log("Le nombre d'étages doit être compris entre 1 et 25.");
    return;
  }

  for (let i = 1; i <= nbEtages; i++) {
    let ligne = "";

    for (let espace = nbEtages - i; espace > 0; espace--) {
      ligne += " ";
    }

    for (let j = 1; j <= i; j++) {
      ligne += "#";
    }

    console.log(ligne);
  }
}

afficherPyramide(5);

//* ex-17
function afficherPyramideMontanteDescendante(nbEtages) {
  if (nbEtages < 1 || nbEtages > 25) {
    console.log("Le nombre d'étages doit être compris entre 1 et 25.");
    return;
  }

  for (let i = 1; i <= nbEtages; i++) {
    let ligne = "";

    for (let espace = nbEtages - i; espace > 0; espace--) {
      ligne += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      ligne += "#";
    }
  }
}

afficherPyramideMontanteDescendante(5);
