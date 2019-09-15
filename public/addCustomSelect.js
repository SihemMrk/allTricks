function addCustomSelect(idContainer, wording, select) {
  var container = document.getElementById(idContainer);

  var selectDiv = document.createElement("div");
  selectDiv.classList.add("selectDiv");

  var optionsDiv = document.createElement("div");
  optionsDiv.classList.add("optionsDiv");
  optionsDiv.style.display = "none";

  selectDiv.onclick = function openOptions() {
    if (optionsDiv.style.display === "none") {
      optionsDiv.style.display = "block";
      selectDiv.style.borderBottom = "0";
    } else {
      optionsDiv.style.display = "none";
      selectDiv.style.borderBottom = "2px solid #000";
    }
  };

  container.appendChild(selectDiv);
  container.appendChild(optionsDiv);

  var placeholderDiv = document.createElement("div");
  var newContent = document.createTextNode("VEUILLEZ SELECTIONNER");

  var optionDiv = document.createElement("div");

  selectDiv.appendChild(placeholderDiv);
  placeholderDiv.appendChild(newContent);

  var select = document.getElementsByName(select);

  for (var i = 0; i < select[0].options.length; i++) {
    if (i == 0) {
      let optionDivTaille = document.createElement("div");
      optionDivTaille.classList.add("optionDivTaille");
      optionDivTaille.classList.add("taille");
      optionDivTaille.innerHTML = wording + " :";
      optionsDiv.appendChild(optionDivTaille);
    } else {
      let option = select[0].options[i];

      let optionDiv = document.createElement("div");
      optionDiv.classList.add("optionDiv");

      let value = option.innerHTML;
      let pValue = document.createElement("p");
      pValue.classList.add("pValue");
      pValue.innerHTML = value;

      let stock = option.dataset.stock;
      let pStock = document.createElement("p");
      pStock.classList.add("pStock");
      pStock.innerHTML = stock;

      if (parseInt(stock, 10) === 0) {
        pStock.innerHTML = "Épuisé";
      } else if (parseInt(stock, 10) === 1) {
        pStock.innerHTML = "C'est le dernier, dépêchez vous !";
      } else if (parseInt(stock, 10) <= 4) {
        pStock.innerHTML = "Vite plus que " + stock + " en stock!";
      } else {
        pStock.innerHTML = "En stock";
      }

      let price = option.dataset.price;
      let pPrice = document.createElement("p");
      pPrice.classList.add("pPrice");
      pPrice.innerHTML = price;

      optionDiv.appendChild(pValue);
      optionDiv.appendChild(pStock);
      optionDiv.appendChild(pPrice);

      optionsDiv.appendChild(optionDiv);

      if (i != select[0].options.length - 1) {
        let hr = document.createElement("hr");
        optionsDiv.appendChild(hr);
      }
    }
  }
}
