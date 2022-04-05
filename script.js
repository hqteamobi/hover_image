const squares = document.querySelectorAll('.container .square')

squares[squares.length - 1].addEventListener('mouseenter', (e) => {
  for (let i = 0; i < squares.length - 1; i++) {
    squares[i].classList.add('active')
  }
})

squares[squares.length - 1].addEventListener('mouseout', (e) => {
  for (let i = 0; i < squares.length - 1; i++) {
    squares[i].classList.remove('active')
  }
})
