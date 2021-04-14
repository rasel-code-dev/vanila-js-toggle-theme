// import './style.scss'


const toggleTheme = document.querySelector("#toggle_theme")
toggleTheme.addEventListener("click", handleApplyTheme)

function handleApplyTheme(e){
  let theme = e.target.dataset.theme
  let html = document.querySelector("html")
  
  if(theme !== "dark"){
    html.setAttribute("data-color-mode", "light")
    e.target.setAttribute("data-theme", "dark")
    // e.target.firstChild.classList.replace("fa-sun", "fa-moon")
  } else {
    html.setAttribute("data-color-mode", "dark")
    e.target.setAttribute("data-theme", "light")
    e.target.firstChild.classList.replace("fa-moon", "fa-sun")
    
  }
}