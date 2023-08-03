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
    paragraphName.textContent = `Nome: ${dog.nome}`;

    const paragraphAge = document.createElement("p");
    paragraphAge.textContent = `Idade: ${dog.idade}`;

    dogContainerInfo.appendChild(paragraphName);
    dogContainerInfo.appendChild(paragraphAge);

    dogContainer.appendChild(dogContainerInfo);

    imagemadt.appendChild(dogContainer);
  });

  const flkty = new Flickity(imagemadt, {
    cellAlign: 'left',
    contain: false,
    prevNextButtons: false,
    autoPlay: true,
  });
}

createCarousel(data.cachorros);

function closeMenuMobile() {
  menuMobile.classList.remove('active');
}

const linksMenuMobile = document.querySelectorAll('.menu-mobile a');
linksMenuMobile.forEach(link => {
  link.addEventListener('click', closeMenuMobile);
});

const menuIcon = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menu-mobile');

menuIcon.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
});

const buttonSaibaMais = document.querySelector('.info-container .button-contain');

buttonSaibaMais.addEventListener('click', () => {
    const link = buttonSaibaMais.getAttribute('data-link');
    window.open(link, '_blank');
});

const buttonSaibaMaisAdote = document.querySelector('.adote-container .button-containAdot');

buttonSaibaMaisAdote.addEventListener('click', () => {
    const link = buttonSaibaMaisAdote.getAttribute('data-link');
    window.open(link, '_blank');
});
