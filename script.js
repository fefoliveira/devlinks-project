function toggleMode() {
  const html = document.documentElement
  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }
  */
  html.classList.toggle("light")

  const img = document.querySelector
  if (html.classList.contains("light")) {
    img.setAtribute("scr", "./assets/avatar-light.png")
  } else {
    img.setAtribute("scr", "./assets/avatar.png")
  }
}
