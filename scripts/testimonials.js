const mySiema = new Siema({
  selector: '.carousel--items',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
})

document.querySelector('.carousel--prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.carousel--next').addEventListener('click', () => mySiema.next());

function setupDots(carousel, itemsCount) {
  if (itemsCount > 8) {
      return
  }
  let dots = document.createElement("DIV")
  dots.className = "carousel--dots"
  carousel.appendChild(dots)
  for (let i = 0; i < itemsCount; i++) {
      const dot = document.createElement("DIV")
      dots.appendChild(dot)
      dot.dataset.indexDot = i
      dot.addEventListener("click", (event) => {
        event.target.classList.add("carousel--dot-is-active")
        mySiema.goTo(i)
        const dots = document.querySelectorAll(".carousel--dots")
        for (const dot of dots) {
          dot.classList.remove("carousel--dot-is-active")
        }
      })
  }
  return dots
}

function updateItems(items, dots) {
  let index = parseInt(items.dataset.index, 10)
  items = items.querySelectorAll(".carousel--item")
  for (let i = 0; i < items.length; i++) {
      if (i != index) {
          items[i].classList.add("carousel--item-is-hidden")
          if (dots) {
              dots.children[i].classList.remove("carousel--dot-is-active")
          }
      } else {
          items[i].classList.remove("carousel--item-is-hidden")
          if (dots) {
              dots.children[i].classList.add("carousel--dot-is-active")
          }
      }
  }
}

const carousel = document.querySelector(".carousel")
const items = carousel.querySelector(".carousel--items")
let dots = setupDots(carousel, items.querySelectorAll(".carousel--item").length)
