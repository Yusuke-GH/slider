$(function() {
  var mySwiper = new Swiper('.swiper-container', {
  	autoplay: {
  		delay: 3000,    //スライドのインターバル[ms]
  		stopOnLastSlide: false,   //最後のスライド到達時、最初のスライドに戻る。
  		disableOnInteraction: false,    //ユーザーがスライドを操作した後も、自動再生し続ける。
  		reverseDirection: false   //最初のスライドから順に再生する。
  	},
  	navigation: {
  		nextEl: '.swiper-button-next',    //次ページのセレクタ名を指定
  		prevEl: '.swiper-button-prev'   //前ページのセレクタ名を指定
  	},
  	pagination: {
  		el: '.swiper-pagination',   //pagenationのセレクタ名を指定
  		type: 'bullets',    //形式を指定
  		clickable: true   //選択したpignationに対応するスライドに移動する。
  	}
  });
})
