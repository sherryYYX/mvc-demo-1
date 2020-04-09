import './page3.css'
import $ from 'jquery'

const $square = $('#page3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')
})


