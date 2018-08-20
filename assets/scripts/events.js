'use strict'

const onShowProjectDescription = function(event) {
    event.preventDefault()
    $(this).toggleClass('show-project-description')
  }

const addHandlers = () => {
    $('div').on('click', onShowProjectDescription)
}

module.exports = {
    addHandlers
}