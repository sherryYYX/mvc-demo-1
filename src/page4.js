import './page4.css'
import $ from 'jquery'
const $circle = $('#page4 .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})
