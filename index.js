 const button = document.querySelector('.button')
button.addEventListener ('click', e => {
  win()
})

const popUp = document.querySelector('.pop-up__wrapper')
function win() { /*поп-ап выигрыша*/
  popUp.classList.add("active");
}

function lost() {/*поп-ап проигрыша*/
  const img = document.querySelector('.img')
  const caption = document.querySelector('.pop-up__caption')
  const desc = document.querySelector('.desc')
  const button = document.querySelector('.pop-up__button')

  popUp.classList.add("active");
  popUp.classList.add("lost");

  img.src="./assets/img/poup-lost.png";
  caption.innerHTML = "Oh, no hay suerte ahora";
  desc.classList.add("remove");
  button.innerHTML = "GIRAR DE NUEVO";
}

const popUpButton = document.querySelector('.pop-up__button')
popUpButton.addEventListener ('click', e => {
  popUp.classList.remove("active")
  popUp.classList.remove("lost");
})
