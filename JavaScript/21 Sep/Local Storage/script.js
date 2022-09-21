// console.log("Local storage");

var btn = document.getElementById("toggleBtn");

var theme = localStorage.getItem('theme');
function toggleTheme() {
  if (theme === "dark") {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    theme = "light";
    localStorage.setItem('theme','dark');
  } else if (theme === "light") {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    theme = "dark";
    localStorage.setItem('theme','light');
  }
}

btn.addEventListener("click", toggleTheme);
toggleTheme();
// Problem : When user refresh the page, the theme preference gets lost and default light theme gets applied.
// Solution : Use local storage to save the theme prefernce.
/*
Local Storage : 
localStorage
Operations : 
1. Insert/Save : setItem(key,value)
2. Read/Fetch : getItem(key)
3. Delete : removeItem(key)
*/