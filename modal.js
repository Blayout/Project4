function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  /*************************MODAL******************************/
  // DOM Elements
  const modalbg = document.querySelector(".bground"); //  récuperation modal d'inscription
  const modalBtn = document.querySelectorAll(".modal-btn"); // récuperation bouton modal d'inscription

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // on récupere le bouton et au clic la modal se lance

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block"; // modalbg devient block avec la fonction launchmodal que l'ont execute juste au dessus
    document.body.classList.add("modal-open"); // on add la class modal open son css "hoverflow hidden"
  }

  // close modal event
  const modalClose = document.getElementById("close-modal"); //on récupere close modal et au clic la modal se lance
  modalClose.addEventListener("click", closeModal); // au clic sur la croix la modal se ferme

  // close modal form
  function closeModal() {
    modalbg.style.display = "none"; // modalbg devient display none avec la fonction closecmodal que l'ont execute juste au dessus
    document.body.classList.remove("modal-open"); // on remove css hoverflow hidden
    // on enleve la sroll bar down
  }

  /*************************MODALTHANKS******************************/

  const modalThanksBg = document.querySelector(".thanks-modal"); // on récupère la modal de remerciement

  // launch modal form
  function launchModalThanks() {
    modalThanksBg.style.display = "block"; // quand la fonction launchModalThanks est active ".thanks-modal" devient block et
    //donc s'affiche ( la fonction est appelé a la fin de la fonction validate)
  }

  // close modal thanks
  const modalCloseThanks = document.querySelector(".thanks-modal"); // on récupère .thanks-modal
  modalCloseThanks.addEventListener("click", closeModalThx); // on récupere la modal de remerciement et au clic la
  //fonction closeModalThx se lance ce qui ferme la modal de remerciement

  // close modal form
  function closeModalThx() {
    modalCloseThanks.style.display = "none"; // // .thanks-modal devient display none avec la fonction closemodalThx que l'ont execute juste au dessus
  }

  const btnSubmit = document.querySelector(".btn-submit"); // on récupere le bouton submit du formulaire

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    return validate();
    // on récupère btnsubmit, on preventDefault pour annuler
    //le comportement de base de l'élèment et on return validate pour valider le formualire et fermer la modal
  });

  const firstNameInput = document.querySelector("#first");
  const lastNameInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const quantityInput = document.querySelector("#quantity");

  const firstNameError = document.getElementById("firstname-error");
  const lastNameError = document.getElementById("lastname-error");
  const emailError = document.getElementById("email-error");
  const quantityError = document.getElementById("quantity-error");
  const locationError = document.getElementById("location-error");
  const cguError = document.getElementById("cgu-error");

  //on créer des constantes pour récupérer chaque element de chaque class du formulaire

  function validate() {
    // on lance la fonction validate

    let firstNameInputValue,
      lastNameInputValue,
      emailInputValue,
      quantityInputValue,
      quantityInputValueParsed,
      locationInputChecked,
      cguInputChecked; // on déclare des variables pour chaques elements
    hasErrors = false;
    //hasErrors est initialisée à false, ce qui signifie qu'aucune erreur n'a encore été détectée.
    //Ensuite, à chaque vérification de champ, si une erreur est trouvée, la variable hasErrors est définie sur true.
    //Finalement, à la fin de la fonction validate(), la valeur de hasErrors est vérifiée. Si elle est toujours false,
    //cela signifie qu'aucune erreur n'a été trouvée dans les champs du formulaire.

    //sans cette variable la gestion des erreurs serait diffile a gérer

    firstNameInputValue = firstNameInput.value;
    lastNameInputValue = lastNameInput.value;
    emailInputValue = emailInput.value;
    quantityInputValue = quantityInput.value;
    quantityInputValueParsed = parseInt(quantityInputValue); //le parsint est obligatoire. sans cette fonction "isnan" il return un faux positif
    locationInputChecked = document.querySelector(
      'input[name="location"]:checked'
    );
    cguInputChecked = document.querySelector('input[name="checkbox1"]:checked');
    //on assignes une valeur a la variable

    if (
      firstNameInputValue.trim() === "" ||
      firstNameInputValue.length < 2 ||
      !/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(firstNameInputValue)
    ) {
      firstNameError.style.display = "block";
      hasErrors = true;
    } else {
      firstNameError.style.display = "none";
    }

    if (lastNameInputValue.trim() === "" || lastNameInputValue.length < 2 || !/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(lastNameInputValue)
    ) {
      lastNameError.style.display = "block";
      hasErrors = true;
    } else {
      lastNameError.style.display = "none";
    }

    if (
      !emailInputValue.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue)
    ) {
      emailError.style.display = "block";
      hasErrors = true;
    } else {
      emailError.style.display = "none";
    }

    if (quantityInputValue.trim() == "" || isNaN(quantityInputValueParsed)) {
      quantityError.style.display = "block";
      hasErrors = true;
    } else {
      quantityError.style.display = "none";
    }

    if (!locationInputChecked) {
      locationError.style.display = "block";
      hasErrors = true;
    } else {
      locationError.style.display = "none";
    }

    if (!cguInputChecked) {
      cguError.style.display = "block";
      hasErrors = true;
    } else {
      cguError.style.disply = "none";
    }

    if (hasErrors === false) {
      launchModalThanks();
      closeModal();
      //si haserrors === false alors il n'y a pas d'erreurs la fonction devient true, on lance donc la fonction launchmodalThanks et closeModal
    }
  }
});
