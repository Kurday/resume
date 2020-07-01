window.onload = function(e){

  const navItem = document.querySelectorAll('.nav-item'),
  featuredImage = document.querySelector('.featured__image img');

  // featuredImage = document.querySelector('.featured__image');



  // const coll = document.getElementsByClassName('collaps');
  const coll = document.querySelectorAll('.collaps');
  collCont = document.querySelectorAll('.collaps__content');





// **********************   сворачиваемые табы  **********************************
for (var i = 0; i < coll.length; i++) {

  coll[i].addEventListener('click', function(){

   collCont.forEach(function(item){

    item.classList.remove('collaps__content-active');

  });

   this.classList.toggle('collaps__active');
      let content = this.nextElementSibling;
      content.classList.toggle('collaps__content-active')
    }
    )}




//***************************   смена картинок по клику  ***********************
document.body.addEventListener('click', function (e){

  e.preventDefault();
  const target = e.target;

  //в Make забиваем элемент по которому произошел клик (li)
  const make = target.closest('.nav-item'); //make = this.li
  if (make) {
    //в img записываем класс ссылки которая внутри этого li
    img = make.querySelector('.nav-link'); // img = li a
    //В changeImg записываем dataset этой ссылки
    const changeImg = img.dataset.src; //changeImg = data a
    //подсталвем изображение 
    if (changeImg) {
      featuredImage.src = changeImg


        //добавляем класс тени
        navItem.forEach(btn => btn.classList.remove('active'))
        make.classList.add('active')
      }
    }
  });



function initMenuBurger(){
    //меню бургер
    $('.header__burger').click(function(e){
      $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock') // блокируем скрол мыши при активном меню
      })
  }

var mainH = $("#js-height-header").height(), //забиваем высоту блока в переменную mainH
    navH = $("#js-nav").innerHeight(); //в переменную помещаем значение высоты с нашей навигацией
    //innerHeight Значит присвоить высоту с учетом внутреннего padding 

    $(document).on("scroll", function(){
  var documentScroll = $(this).scrollTop(); //this указывает на страницу. Тут мы присваиваем переменной сколько проскролили
  if (documentScroll > mainH) {
    $("#js-nav").addClass("fixed");
    $("#js-height-header").css("marginBottom", navH); //свойство для присваивания переменной из js файла 
    //paddingTop это css свойство для использования в JS файле
  } else {
    $("#js-nav").removeClass("fixed");
    $("#js-height-header").removeAttr("style"); // удаляем атрибут стайл через JS
  }
});


    // $(function(){
    //   let filter = $("[data-filter]");
    //   filter.on("click", function(event){
    //     event.preventDefault()

    //     let cat = $(this).data('filter');
    //     // $("[data-cat]").addClass("hide");
    //     if(cat == 'all'){
    //       $("[data-cat]").removeClass("hide");
    //     } else {

    //       $("[data-cat]").each(function(){
    //         let workCat = $(this).data('cat');

    //         if(workCat != cat) {
    //           $(this).addClass('hide');
    //           // $(this).fadeOut('slow');

    //         } else {
    //           $(this).removeClass('hide')
    //           // $(this).fadeIn('slow');
    //         }
    //       });
    //     }

    //   })
    // });


    //*********************фильтры************************************* 

    $(function(){
      let filter = $("[data-filter]");

      filter.on("click", function(event){
        event.preventDefault()
        
        //нажали на app и в cat падает app
        let cat = $(this).data('filter');
        // $("[data-cat]").addClass("hide");
        if(cat == 'all'){
          
          $("[data-cat]").removeClass("hide");
        } else {

          $("[data-cat]").each(function(){
            let workCat = $(this).data('cat');
            
            if(workCat != cat) {
              
              $(this).addClass('hide');
              $("[data-cat]").removeClass("hide2");

            } else {

              $(this).removeClass('hide')

            }
          });
        }

      })
    });

    initMenuBurger()



    $(document).ready(function(){
      $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true

      });
    });












  }


