document.addEventListener('DOMContentLoaded', function () {
  var ol = document.querySelector('ol')
  ol.addEventListener('mouseover', addRed)
  ol.addEventListener('mouseout', removeRed)

  function addRed() {
    ol.classList.add('red')
  }
  function removeRed() {
    ol.classList.remove('red')
  }
})
