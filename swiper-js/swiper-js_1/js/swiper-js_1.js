
$(function() {

  // Params
  let mainSliderSelector = '.main-slider',    //【変数定義】クラスmain-sliderを格納
      navSliderSelector = '.nav-slider';    //【変数定義】クラスnav-sliderを格納

  // Main Slider
  let mainSliderOptions = {   //【変数定義】設定値を入れ込む（オプションパラメータの設定）
    loop: true,   //ループあり：最後のスライド → 最初のスライド
    speed:1000,   //スライドの切り替わる速度[ms]
    parallax:true,    //視差効果を有効にする
    autoplay:{    //自動再生ON
      delay:3000    //スライドが動く間隔時間[ms]
    },
    loopAdditionalSlides: 10,   //ループで使用するスライドの枚数
    grabCursor: true,   //カーソルでスライドを掴むことを可能にする
    navigation: {   //nナビゲーションボタンを使用する
      nextEl: '.swiper-button-next',    //セレクタの紐つけ
      prevEl: '.swiper-button-prev',    //セレクタの紐つけ
    },
    on: {   //onメソッド（イベント）
      init: function(){   //初期化されたとき、関数内の処理を実行する
        this.autoplay.stop();   //  選択されたスライドで自動再生をストップする
      },
      imagesReady: function(){    //スライト画像の読み込みが完了したとき
        this.el.classList.remove('loading');    //imagesReady's elementsのクラスリストから、クラスloadingを除去
        this.autoplay.start();    //自動再生スタート
      }
    }//on
  };//let mainSliderOptions =
  let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);   //メインスライダーのオプションパラメータの設定を書込み。

  // Navigation Slider
  let navSliderOptions = {   //【変数定義】設定値を入れ込む（オプションパラメータの設定）
        loop: true,   //ループあり：最後のスライド → 最初のスライド
        loopAdditionalSlides: 10,   //ループで使用するスライドの枚数
        speed:1000,   //スライドの切り替わる速度[ms]
        spaceBetween: 5,    //スライド間の余白サイズ[px]
        slidesPerView: 5,   //表示するスライドの枚数
        centeredSlides : true,    //スライドのスタートを全体の真ん中のスライドとする
        touchRatio: 0.2,    //タッチ感度の閾値。例) 閾値を超えたら、タッチとして認識する
        slideToClickedSlide: true,    //スワイプ中にクリックした場合、クリックを優先する
        direction: 'vertical',    //スライドの方向：縦
        on: {   //onメソッド（イベント）
          imagesReady: function(){    //スライト画像の読み込みが完了したとき
            this.el.classList.remove('loading');    //imagesReady's elementsのクラスリストから、クラスloadingを除去
          },
          click: function(){   //クリックイベント
            mainSlider.autoplay.stop();   //クリックされたとき、メインスライダをストップする
          }
        }
      };
  let navSlider = new Swiper(navSliderSelector, navSliderOptions);   //メインスライダーのオプションパラメータの設定を書込み

  // Matching sliders
  mainSlider.controller.control = navSlider;    //メインとナビスライダの同期
  navSlider.controller.control = mainSlider;

})
