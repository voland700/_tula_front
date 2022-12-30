	let slideUp = (target, duration=500) => {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout( () => {
              target.style.display = 'none';
              target.style.removeProperty('height');
              target.style.removeProperty('padding-top');
              target.style.removeProperty('padding-bottom');
              target.style.removeProperty('margin-top');
              target.style.removeProperty('margin-bottom');
              target.style.removeProperty('overflow');
              target.style.removeProperty('transition-duration');
              target.style.removeProperty('transition-property');
              //alert("!");
        }, duration);
    }

	/* SLIDE DOWN */
    let slideDown = (target, duration=500) => {

        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
          target.style.removeProperty('height');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
        }, duration);
    }

    /* TOOGLE */
    var slideToggle = (target, duration = 500) => {
        if (window.getComputedStyle(target).display === 'none') {
          return slideDown(target, duration);
        } else {
          return slideUp(target, duration);
        }
    }


	//Mobile Header - menu
	document.querySelectorAll('.top_link').forEach(function (elem) {
		elem.addEventListener('click', function (item) {
			item.preventDefault();
			let elemSelected = item.currentTarget;
			let nameAttr = elemSelected.dataset.link;
			let ul_list = document.querySelectorAll('.top_menu_ul');


			let ul_item =  document.querySelector('.top_menu_ul[data-ul="'+nameAttr+'"]');

			if (!elemSelected.classList.contains('active')){

				ul_list.forEach(ul => {
					if (ul.classList.contains('active')){
						ul.classList.remove('active');
						slideUp(ul, 500);
					}
					//console.log(ul);
				})
				document.querySelectorAll('.top_link').forEach(link => {
					if (link.classList.contains('active')) link.classList.remove('active');
				})

				elemSelected.classList.add('active');
				if(!ul_item.classList.contains('active')){
					ul_item.classList.add('active')
					slideDown(ul_item, 750);
				}
			} else {

				elemSelected.classList.remove('active');
				if(ul_item.classList.contains('active')){
					slideUp(ul_item, 500);
					ul_item.classList.remove('active');
				}
			}
		});
	});

	// - slider swiper.js
	var swiper = new Swiper('#slider', {
		speed: 1000,
		loop: true,
		parallax: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider-btn-next',
			prevEl: '.slider-btn-prev',
		},
	});


	//Left-menu show subcategories
	document.querySelectorAll('.sub').forEach(function (elem) {
		elem.addEventListener('mouseenter', function (item) {
			item.preventDefault();
			let mainWidth =  document.querySelector('main').offsetWidth;
			let subMenu = item.currentTarget.querySelector('.left_menu_sub_ul');
			let count = subMenu.querySelectorAll('.left_menu_sub_li').length;
			if( mainWidth == 698){
				if(count == 2){
					subMenu.style.width = '372px';
				} else if(count == 3){
					subMenu.style.width = '544px';
				}else if(count >= 4){
					subMenu.style.width = '716px';
				}
			} else if ( mainWidth == 855){
				if(count == 2){
					subMenu.style.width = '452px';
				} else if(count == 3){
					subMenu.style.width = '664px';
				}else if(count >= 4){
					subMenu.style.width = '876px';
				}
			} else if ( mainWidth >= 1020){
				if(count == 2){
					subMenu.style.width = '472px';
				} else if(count == 3){
					subMenu.style.width = '694px';
				}else if(count >= 4){
					subMenu.style.width = '916px';
				}
			}
		});
	});
