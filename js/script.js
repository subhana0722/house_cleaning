$('.counterUp').counterUp({
    delay: 10,
    time: 1000,
});
$('.service_body').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    prevArrow:'<button class="prevArr"><i class="fa-solid fa-arrow-left-long "></i></button>',
    nextArrow:'<button class="nextArr"><i class="fa-solid fa-arrow-right-long "></i></i></button>',

  });