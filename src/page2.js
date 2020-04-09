import './page2.css'
import $ from 'jquery'

const $tarBar = $('.tab-bar')
const $tabContent = $('.tab-content')

$tarBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index=$li.index()
    console.log(index);

    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tarBar.children().eq(0).trigger('click')