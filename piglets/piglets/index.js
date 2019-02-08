document.addEventListener('DOMContentLoaded', function () {
    var ul = document.querySelector('ul')
    ul.addEventListener('mouseover', addRed)
    ul.addEventListener('mouseout', removeRed)
  
    function addRed() {
      ul.classList.add('red')
    }
    function removeRed() {
      ul.classList.remove('red')
    }
  })