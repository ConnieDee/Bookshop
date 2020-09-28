function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchList');
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("list");
  li = ul.getElementsByTagName('p', 'h2');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p", "h2")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}