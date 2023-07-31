// Dados dos cachorros disponíveis para adoção
const data = {
  "cachorros": [
    {
      "nome": "Dobby",
      "idade": "2 anos",
      "raca": "Vira-lata",
      "imagem": "caramelocapapreta.jpg"
    },

    {
      "nome": "Marley",
      "idade": "1 ano",
      "raca": "Vira-lata",
      "imagem": "marley.jpg"
    },
    {
      "nome": "Ragnar",
      "idade": "4 anos",
      "raca": "Vira-lata",
      "imagem": "ragnar.jpg"
    },
    {
      "nome": "Kim",
      "idade": "4 anos",
      "raca": "Vira-lata",
      "imagem": "kim.jpg"
    }
  ]
};

const imagemadt = document.querySelector(".imagem-adt");

function createCarousel(dogs) {
  dogs.forEach((dog) => {
    const dogContainer = document.createElement("div");
    dogContainer.classList.add("dog-container");

    const dogContainerInfo = document.createElement("div");
    dogContainerInfo.classList.add("dog-container-info");

    dogContainer.style.backgroundImage = `url(assets/${dog.imagem})`;

    const paragraphName = document.createElement("p");
    paragraphName.textContent = `Nome: ${dog.nome}`

    const paragraphAge = document.createElement("p");
    paragraphAge.textContent = `Idade: ${dog.idade}`;

    dogContainerInfo.appendChild(paragraphName);
    dogContainerInfo.appendChild(paragraphAge);

    // Adicione dogContainerInfo como filho de dogContainer
    dogContainer.appendChild(dogContainerInfo);

    // Adicione dogContainer como filho de imagemadt
    imagemadt.appendChild(dogContainer);
  });

  const flkty = new Flickity(imagemadt, {
    contain: false,
    prevNextButtons: false,
    autoPlay: true,
  });
}

// Chamando a função para criar o carrossel com base nos dados "data.cachorros"
createCarousel(data.cachorros);

