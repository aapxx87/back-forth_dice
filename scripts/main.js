let position = 9
let player = 1


const generate_rand_number = function () {
  return Math.floor(Math.random() * 6) + 1
}

const highlight_winner = function () {
  if (player === 1) {
    player_1_win.textContent = '⭐️ 🏆 ⭐️'
    player_2_win.textContent = '🤬'
  } else {
    player_2_win.textContent = '⭐️ 🏆 ⭐️'
    player_1_win.textContent = '🤬'
  }
}



const move_figure = function (number) {

  document.querySelector('.figure').remove()

  const target_step = position + number

  const figure = document.createElement('div')
  figure.classList.add('figure')

  position = target_step

  if (position >= 2 && position <= 16) {

    document.getElementById(position).append(figure)

  } else if (position >= 17) {

    position === 17
    document.getElementById(17).append(figure)
    btn_move_figure.disabled = true
    highlight_winner()

  } else if (position <= 1) {

    position === 1
    document.getElementById(1).append(figure)
    btn_move_figure.disabled = true
    highlight_winner()

  }





}




btn_move_figure.addEventListener('click', function () {

  if (player === 1) {

    const number = generate_rand_number()

    box_display_number.textContent = number

    move_figure(number)

    player = 2

  } else {

    const number = -Number(generate_rand_number())

    box_display_number.textContent = -number

    move_figure(number)

    player = 1

  }



})