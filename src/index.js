// hamburger script
const btn=document.querySelector("#menu-btn")
const nav=document.querySelector("#menu")

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
})

// carousel script
document.querySelectorAll(".testimonials-nav").forEach(testimonial => {
    // pick all elements you want to add to the carousel
    const items=testimonial.querySelectorAll(".testimonials-nav__item")
    const buttonsHTML=Array.from(items, () => {
        return `<span class="testimonials-nav__btn"></span>`
    })
    testimonial.insertAdjacentHTML("beforeend", `
    <div class="testimonials-nav__div">
    ${buttonsHTML.join("")}
    </div>
    `)

    const buttons=testimonial.querySelectorAll(".testimonials-nav__btn")
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // unselect all the items
            items.forEach(item => item.classList.remove("testimonials-nav__item--active"))
            buttons.forEach(button => button.classList.remove("testimonials-nav__btn--active"))

            // select the correct item
            items[i].classList.add("testimonials-nav__item--active")
            button.classList.add("testimonials-nav__btn--active")
        })
    });
    // select the first item on page load
    items[0].classList.add("testimonials-nav__item--active")
    buttons[0].classList.add("testimonials-nav__btn--active")
})
