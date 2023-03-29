//инициализация свайпера, задание его конфигурации
const swiper = new Swiper('.swiper', {
    //направление
    direction: 'horizontal',
    //зацикливание слайдера
    loop: true,
    //количество слайдов на экране
    slidesPerView: 3,

    //прокрутка с помошью колесика
    mousewheel: true,
    //прокрутка с помошью клавиатуры
    keyboard: true,

    //автоматическая прокрутка раз в какое-то время
    cssMode: true,
    autoplay: {
        //период
        delay: 2500,
        //отключение при взаимодействии пользователя
        disableOnInteraction: true,
    },

    //найстройка пагинации
    pagination: {
        el: '.swiper-pagination',
        //тип пагинации
        dynamicBullets: true,
        //кликабельность пагинации
        clickable: true,
    },

    //найстройка навигационных кнопок
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});