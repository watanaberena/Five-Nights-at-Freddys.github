
// ーーーーーーーーースライダーーーーーーーーーー//

$(document).ready(function(){
  $('.slider').slick({
      autoplay: true, // 自動的に動き出すか
      infinite: true, // スライドをループさせるかどうか
      speed: 500, // スライドのスピード
      slidesToShow: 3, // スライドを画面に3枚見せる
      slidesToScroll: 1, // 1回のスクロールで1枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>', // 矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>', // 矢印部分NextのHTMLを変更
      centerMode: true, // 要素を中央ぞろえにする
      centerPadding: '0px', // センターパディングを0に設定
      variableWidth: true, // 幅の違う画像の高さを揃えて表示
      dots: true, // 下部ドットナビゲーションの表示
  });
});






$('.slider2').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 6,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
});