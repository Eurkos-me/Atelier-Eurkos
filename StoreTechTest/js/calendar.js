const month = window.location.search;

console.log(month);

function load_home() {
  document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
}