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


//Stocks for main page
if(document.getElementById('mainStock')){
	const width = window.innerWidth;

  if (width > 768) {

		const stock = new Swiper("#mainStock", {
    enabled: false,
    breakpoints: {
      768: {
        enabled: true,
        slidesPerView: 2,
				spaceBetween: 2,

      },
 			1200: {
        enabled: true,
        slidesPerView: 3,
				spaceBetween: 2,
      },
    },
		navigation: {
			nextEl: '.main-stock-btn-next',
			prevEl: '.main-stock-btn-prev',
		},
		});

		funcItemsHeight()
		function funcItemsHeight() {
			let menuItems = document.querySelectorAll('.main-stock_title_link');
			let top = menuItems[0].offsetTop;
			let arrHeight = [];
			let arrItems = [];
			for (let i = 0; i < menuItems.length; i++) {
				menuItems[i].style.height = 'auto';
			}
			for (let i = 0; i < menuItems.length; i++) {
				if (top != menuItems[i].offsetTop) {
					arrHeight.sort(function (a, b) { return b - a });
					for (let j = 0; j < arrItems.length; j++) {

						arrItems[j].style.height = arrHeight[0] + 'px';
					}
					top = menuItems[i].offsetTop;
					arrHeight.length = arrItems.length = 0;
					i = i - 1;
					continue;
				}
				arrHeight[arrHeight.length] = menuItems[i].offsetHeight;
				arrItems[arrItems.length] = menuItems[i];
			}
			arrHeight.sort(function (a, b) { return b - a });
			for (let j = 0; j < arrItems.length; j++) {
				arrItems[j].style.height = arrHeight[0] + 'px';
			}
		}
		window.onresize = funcItemsHeight
	}
}

// Tabs on main page
document.querySelectorAll('.main_goods_btn').forEach(function (elem) {
	elem.addEventListener('click', function (item) {
		item.preventDefault();
		let elemSelected = item.currentTarget;
		let nameAttr = elemSelected.dataset.advice;
		let nameList = document.querySelectorAll('.main_goods_btn');
		let tabsList;

		if (!elemSelected.classList.contains('active')) {
			nameList.forEach(function (name) {
				if (name.classList.contains('active')) name.classList.remove('active');
			});
			elemSelected.classList.add('active');
			tabsList = document.querySelectorAll('.main_goods_elem');
			tabsList.forEach(item => {
				item.dataset.tab == nameAttr ? item.classList.add('behold') : item.classList.remove('behold');
			})
		}
		console.log(nameAttr);
	});
});

//*--- Counter for products list  ---*//
const counter = function () {
	const btns = document.querySelectorAll('.product_item_counter__btn');
	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			const direction = this.dataset.direction;
			const inp = this.parentElement.querySelector('.product_item_counter__value');
			const currentValue = +inp.value;
			let newValue;
			if (direction === 'plus') {
				newValue = currentValue + 1;
			} else {
				newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
			}
			if(typeof newValue !== NaN){
				inp.value =  newValue;
			} else {
				inp.value =  1;
			}
		})
	})
}
counter();