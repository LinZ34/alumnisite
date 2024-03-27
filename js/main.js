$(document).ready(function() {
    // Slick slider initialization
    $('.slider').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // FAQ toggle
    $(".question").click(function() {
        const faqItem = $(this).parent();
        const answerElement = faqItem.find(".answer");
        faqItem.toggleClass("active");
    });

    // Sticky navbar
    const navbar = $('.al_header');
    const keyvisual = $('#home');

    $(window).scroll(function() {
        if ($(window).scrollTop() > keyvisual.offset().top) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

    // Mobile navigation toggle
    const collapser = document.querySelector(".navbar-toggler");
    const navlist = document.querySelector(".navlist");
    const section = document.querySelector("section");
    const header = document.querySelector(".header_items");

    collapser.addEventListener("click", function () {
        navlist.classList.toggle("expanded");
        section.classList.toggle("expanded");
        header.classList.toggle("expanded");
    });

    // Hamburger menu icon toggle
    $('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
    
    // Seminar page status class assignment
    $('[data-display-limit-date], [data-display-start-date]').each((i, el) => {
        const limit = new Date($(el).data('display-limit-date')).getTime();
        const start = new Date($(el).data('display-start-date')).getTime();
        const today = new Date().getTime();

        let status = '受付中';
        if (today >= limit) {
            status = '受付終了';
            $(el).removeClass('seminar_page_accept');
            $(el).addClass('seminar_page_unaccept');
        }
        $(el).find('span').text(status);

        if (today >= start) {
            $(el).removeClass('seminar_invisible');
        } 
    });

    // Seminar page status class assignment
    const seminarPageStatusElements = document.querySelectorAll('.seminar_page_status');
    seminarPageStatusElements.forEach(function(element) {
        var seminarType = element.textContent.trim();
        if (seminarType === 'ライブ配信') {
            element.classList.add('seminar_page_live');
        } else if (seminarType === 'アーカイブ配信') {
            element.classList.add('seminar_page_archieve');
        }
    });
    // Automatically assign a to different div
    const seminarLinks = document.querySelectorAll('a[classification-limit-date]');
    const today = new Date();
    seminarLinks.forEach(link => {
    const limitDate = new Date(link.getAttribute('classification-limit-date'));
    if (limitDate > today) {
        document.querySelector('.seminar_appliable').appendChild(link);
    } else {
        document.querySelector('.seminar-container').appendChild(link);
    }
    });
    
    const appliableDiv = document.querySelector('.seminar_appliable');
    appliableDiv.innerHTML = ''; 
    const hasApplicableSeminars = false;
    seminarLinks.forEach(link => {
    const limitDate = new Date(link.getAttribute('classification-limit-date'));
    if (limitDate > today) {
        appliableDiv.appendChild(link);
        hasApplicableSeminars = true;
    }
    });
    if (!hasApplicableSeminars) {
    const noSeminarText = document.createElement('div');
    noSeminarText.textContent = '受付中のセミナーはありません。';
    noSeminarText.classList.add('noappliableseminar');
    appliableDiv.appendChild(noSeminarText);
    }
});