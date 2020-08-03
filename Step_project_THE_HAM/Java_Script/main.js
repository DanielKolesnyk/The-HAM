$(document).ready(function () {
// -----------------------------------Our services

const $ourServicesButton = $('.our_ser_btn');
const $tabs = $('.our_ser_content div[data-tab]');
$ourServicesButton.on('click', function () {
    const serviceTabIndex = $(this).index();
    $ourServicesButton.removeClass('ser_active_btn');
    $(this).addClass('ser_active_btn');
    $tabs.each(function (index) {
        if (index === serviceTabIndex) {
            $tabs.eq(index).css({'display': 'flex'});
        } else {
            $tabs.eq(index).css({'display': 'none'});
        }
    })
});
//-----------------------------------Our Amazing
const $amazingButton = $('.amazing_btn');
let $ourAmazingWrapper = $('.amazing_wrapper figure');
$amazingButton.on('click', function () {
    let selectedItem = $(this).data().btnid;
    $amazingButton.removeClass('amazing_btn_active');
    $(this).addClass('amazing_btn_active');
    if (selectedItem !== 'All') {
        $ourAmazingWrapper.not(`[data-btnID='${selectedItem}']`).css({'display': 'none'});
        $(`figure[data-btnID='${selectedItem}']`).css({'display': 'flex'});
    } else {
        $ourAmazingWrapper.css({'display': 'flex'});
    }
});
//-----------------------------------BTN LOAD

const $amazingWorkBtn = $('.amazing_btn_load');
const $loading = $('.connect');
const $secondImgBlock = $('.amazing_img_second_part figure');
const $thirdImgBlock = $('.amazing_img_third_part figure');
let amazingCounter = 0;
$amazingWorkBtn.on('click', function (event) {
    setTimeout(function () {
        if (amazingCounter === 0) {
            $secondImgBlock.unwrap();
            amazingCounter++;
            $amazingWorkBtn.css({'opacity': '1'});
        } else if (amazingCounter === 1) {
            $thirdImgBlock.unwrap();
            amazingCounter++;
            $amazingWorkBtn.remove()
        }
        $loading.css({'display': 'none'});
    }, 2000);
    $loading.css({'display': 'unset'});
    $amazingWorkBtn.css({'opacity': '0'});
});
//-----------------------------------What-people

$('.slider_top').slick({
    asNavFor: ".slider_bot",
    arrows: false,
    infinite: true,
    dots: false,
    centerMode: true,
    fade: true,
    cssEase: 'linear',
    draggable: false
});
$('.slider_bot').slick({
    asNavFor: ".slider_top",
    dots:false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    draggable: false
});

});