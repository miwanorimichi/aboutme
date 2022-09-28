$(function(){
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  });


  // ナビゲーションメニューのリンクのホバー時に
  // 不透明度を変更する
  $('a').hover(function() {
    $(this).stop().animate({"opacity":"0.7"}, 300);
  }, function() {
    $(this).stop().animate({"opacity":"1"}, 300);
  });


  // TOPに戻るボタン
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });


  // ページ内リンクのスクロールを滑らかにする
  // #で始まるa要素をクリックした場合に処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度（ミリ秒）
    const speed = 500;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    const href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    //href属性の値が#であれば、スクロール先をhtml要素にする（そうすることでスクロール先がページのトップになる）
    //href属性の値がそれ以外であれば、スクロール先をid名（href属性の値そのまま）にする
    let $target;
    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href);
    }
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    const position = $target.offset().top;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({'scrollTop':position}, speed, 'swing');
    return false;
  });


  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    // 「ブラウザの表示領域の高さ」を取得してwindowHeightに代入
    const windowHeight = $(window).height();
    // 「ブラウザのスクロール量」を取得してscrollAmountに代入
    const scrollAmount = $(window).scrollTop();
    // HTML内でsectionが付与された要素に対して、繰り返し処理を実行
    $("section").each(function () {
      // section要素のの左角を起点とした縦の位置を取得し、positionに代入
      const position = $(this).offset().top;
      if(scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fadeIn');
      }
    });
  });

  // Memoriesの画像をクリックしたときにモーダルで拡大表示する
  $('.photo').click(function() {
    // クリックした画像のsrc属性をimgSrcに代入
    const imgSrc = $(this).attr('src');
    $('.Img').attr('src', imgSrc);
    $('#modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false;
  });

  $('.close-btn').click(function() {
    $('#modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false;
  });
});