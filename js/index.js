var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var awake = awake || {};
var $window, $stage, $pageBg, $pageWrapper;
$(function () {
  var opend = 0;
  $stage = $('html');
  $('<img />').one("load", function () {
    var h = window.innerHeight ? window.innerHeight : $(window).height()
    $('body').css("height", h + "px");

    $('#loader').css("display", "block");
    $('#loading').loadgo({
        'direction': 'bt',
        'bgcolor': '#ffffff',
      }
    );
    $('#loading').loadgo('setprogress', 0);
    //pre load images
    var $preload = $('img,source');
    var imgSrcs = [];

    $preload.each(function () {
      imgSrcs.push($(this).attr('src'));
    });

    imgSrcs.push("../images/contents/main/visual_bg/contents_visual_bg_left200.png");
    imgSrcs.push("../images/contents/main/visual_bg/contents_visual_bg_right280.png");
    imgSrcs.push("../images/contents/main/visual_bg/contents_visual_bg_right440.png");

    var loader = new $.ImgLoader({
      srcs: imgSrcs,
      pipesize: 5,
      delay: 100,
      timeout: 500,
      useXHR2: false
    });

    loader.on('progress', function (progress) {
      var prog = progress.loadedRatio;
      var p = Math.ceil(prog * 100);
      $('#loader p').html(p + '%');
      $('#loading').loadgo('setprogress', p);
    });

    loader.on('itemload', function ($img) {

    });

    loader.on('allload', function ($img) {
      $("#loader").fadeOut(function () {

        colorboxInit();

//var test=true;
//if (test) {

        if (!$.cookie("access")) {
          //display sound alert
          $('.all,.centerline').velocity('fadeIn', {
            duration: 500,
            complete: function () {
              $('.all').css('width', $(window).width());
              $('.all').css('height', $(window).height());
              $('.op').velocity('fadeIn', {
                duration: 500,
                complete: function () {
                  $.cookie("access", "1");
                  op();
/*
                  $.colorbox({
                    open: true,
                    href: "movie/pv2.php",
                    iframe: true,
                    innerWidth: '900px',
                    innerHeight: '540px',
                    opacity: 0,
                    allowTransparency: true,
                    transition: 'none',
                    onClosed: function () {
                      op();
                    },
                  });
*/
                }
              });
            }
          });

        } else {
          var myPlayer = $(".player").YTPlayer();
          loadTumbler();

          $(".all").velocity({blur:30},{duration:0})

          $('.all,.centerline,.visual-right,.visual-left,.top,.visual-bg,.top .visual-center,.all,.op-decoline,.centerline,#bnrs,.movie,.main-bnr,.news,header,.sns,.scroll-down,#second').velocity('fadeIn',
            {
              duration: 1500,
              complete: function () {

                $(".all").velocity({blur:0},{duration:1250,
                complete:function(){
                  $(".decoline-red1").velocity(
                    {right: 4000},
                    {duration: 3000, loop: true}
                  );
                  $(".decoline-red2").velocity(
                    {left: 4000},
                    {duration: 2500, loop: true}
                  );
                  $(".decoline-red3").velocity(
                    {right: 4000},
                    {duration: 2000, loop: true}
                  );

                  $('.visual-bg .left1').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_left200.png');
                  $('.visual-bg .right1').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_right280.png');
                  $('.visual-bg .right2').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_right440.png');
                  opend = 1;
                }})
              }
            });
        }
      });
    });
    loader.load();  //launch loading
  }).attr("src", "images/loading/loading_logo_on.png");
  function op() {

    //ライン動かす

    var winWidth = $(window).width();


    if (winWidth < 1240) {
      winWidth = 1240;
    } else {
      var winWidth = $(window).width();
    }
    $(".decoline-red1").velocity(
      {right: 4000},
      {duration: 3000, loop: true}
    );
    $(".decoline-red2").velocity(
      {left: 4000},
      {duration: 2500, loop: true}
    );
    $(".decoline-red3").velocity(
      {right: 4000},
      {duration: 2000, loop: true}
    );
    $(".top").velocity({blur:30},{duration:0});

    $('.top').velocity('fadeIn', {
      duration: 1500,
      delay: 1000,
      complete: function () { //

        $(".top").velocity({blur:0},{
          duration:1000,
          complete: function () {

            $('.visual-bg').velocity('fadeIn', {
              duration: 1500,
              complete: function () {
                $('.visual-bg .left1').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_left200.png');
                $('.visual-bg .right1').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_right280.png');
                $('.visual-bg .right2').attr('src', '../images/contents/main/visual_bg/contents_visual_bg_right440.png');

                $('.visual-right').velocity('fadeIn', {
                  duration: 1750,
                  complete: function () {
                    $('.visual-left').velocity('fadeIn', {
                      duration: 1750,
                      complete: function () {
                        $('.op-decoline,.centerline,#bnrs,.movie,.main-bnr,.news,header,.sns,#second').velocity('fadeIn',
                          {
                            duration: 1500,
                            complete: function () {
                              re_size();
                              var myPlayer = $(".player").YTPlayer();
                              loadTumbler();
                              opend = 1;
                            }
                          });

                      }
                    });
                  }
                });
              }
            })


          }

        })


      }
    });
  }

var windwow_h = $(window).height()
$('.visual').css('height', windwow_h);

$(window).resize(function () {
    re_size();
  }
)


function re_size() {


  if ($(window).width() < 1240) {
    wsize = 1240;
  } else {
    var wsize = $(window).width();
  }

  if ($(window).height() < 680) {
    hsize = 680;
  } else {
    var hsize = $(window).height();
  }


//        $('.visual-center').css("position","absolute");
  console.log(wsize);

  $('.visual').css('height', hsize);

  var visual_right_left = wsize - $('.visual-right').width();
  $('.visual-right').css('left', visual_right_left);

  $('.visual-bg').width(wsize);
  $('.visual-bg').height(hsize);

  $('#contents').width(wsize);
  $('#second').width(wsize);
  $('#second').height(hsize);
  $('.all').width(wsize);

  $('.mov').height(hsize);

  //Twitter Boxの位置
  twpt = ($(window).height() - 520) / 2 - 40;
  $("#twitter").css("margin-top", twpt + "px");

}

re_size();


$(window).bind("mousemove", charaMove);

$(window).scroll(function () {
  var value = $(this).scrollTop(); //スクロールの値を取得
  scrolled_top = $(this).scrollTop();
  if (value > 0) {
    $('.visual-center').css("position", "absolute");
  } else {
    //$('.visual-center').css("position","absolute");
  }

});
var fadeTime = 800;
$(".popup-youtube").colorbox({
    iframe: true,
    innerWidth: "100%",
    innerHeight: "100%",
    opacity: 1,
    scrolling: false,
    top: "0",
    onOpen: function () {
      $('#sound-file-1').get(0).pause();
      $("#overlay").fadeIn(fadeTime);
    },
    onClosed: function () {
      $("#overlay").fadeOut(fadeTime);
      if (sound == 1) {
        $('#sound-file-1').get(0).play();
        fadein();
      }
    },
  }
);

var sound = 0;

$(".bgm").click(function () {
  if (sound == 1) {
    sound = 0;
    $(".bgm img").attr("src", "../images/header/nav/sound_off.png");
    fadeout2();
  } else {
    sound = 1;
    $(".bgm img").attr("src", "../images/header/nav/sound_on.png");
    $('#sound-file-1').get(0).play();
    fadein();
  }
});

function charaMove(e) {
  var winWidth = $(window).width();
  var winHeight = $(window).height();

  var cx = e.clientX - (winWidth / 2);
  var cy = e.clientY - (winHeight / 2);
  var acx = cx / (winWidth / 2);
  var acy = cy / (winHeight / 2);

  var spd = 5000;


  if (opend == 1) {
    var chara1move = 80;
    $(".left1").stop(true, false)
      .animate({marginLeft: -(chara1move * acx) + "px", marginTop: -(chara1move * acy) + "px"}, spd, "easeOutExpo");

    var chara2move = 100;
    $(".left2").stop(true, false)
      .animate({marginLeft: -(chara2move * acx) + "px", marginTop: -(chara2move * acy) + "px"}, spd, "easeOutExpo");

    var chara3move = 140;
    $(".left3").stop(true, false)
      .animate({marginLeft: -(chara3move * acx) + "px", marginTop: -(chara3move * acy) + "px"}, spd, "easeOutExpo");


    var chara4move = -100;
    $(".right1").stop(true, false)
      .animate({
        marginRight: -(chara4move * acx) + "px",
        marginTop: -(chara4move * acy) + "px"
      }, spd, "easeOutExpo");

    var chara5move = 200;
    $(".right2").stop(true, false)
      .animate({
        marginRight: -(chara5move * acx) + "px",
        marginTop: -(chara5move * acy) + "px"
      }, spd, "easeOutExpo");
  }
}
})
;

function fadeout() {
  var media = document.getElementById("sound-file-1");
  var vl = media.volume;
  if (vl > 0.1) {
    media.volume = Math.floor((vl - 0.1) * 10) / 10;
    setTimeout("fadeout()", 200);
  } else {
    media.volume = 0;
    $('.popup-youtube').click();
  }
}

function fadeout2() {
  var media = document.getElementById("sound-file-1");
  media.pause();
}


function fadein() {
  var media = document.getElementById("sound-file-1");
  var vl = media.volume;
  if (vl < 1.0) {
    media.volume = Math.ceil((vl + 0.1) * 10) / 10;
    setTimeout("fadein()", 200);
  }
}

var loadTumbler = function () {

  $.ajax({
    url: 'getnews.php',
    dataType: 'xml',
    success: function (data) {
      // 取得件数
      var getCount = 1;
      if ($('item', data).length < getCount) {
        getCount = data.length;
      }
      ;

      var insert = '';
      for (var i = 0; i < getCount; i++) {
        var thisItem = $('channel', data).children('item').eq(i);

        // 日時の挿入
        var date = new Date(thisItem.children('pubDate').text());

        insert += '<p>' + date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate() + "　";
        insert += '<a href="' + thisItem.children('link').text() + '" target="_blank">';
        insert += '<span class="news-text">' + thisItem.children('title').text() + '</span>';
        insert += '</a></p>';
      }
      ;
      $('.news').append(insert);
    }
  });
}

/*[ColorBox]*/


var colorboxInit = function () {

  // フルスクリーンで表示

  $('.cboxResponsive').colorbox({

    iframe: true, innerWidth: '100%', innerHeight: '100%', opacity: 0, allowTransparency: true,

    transition: 'none'

  });

  $('.cboxResponsive').on('click', function () {

    isCboxFullScreen = true;

    $('body').addClass('cboxFullScreen');

  });


  // 個別にサイズ設定

  $('.cbox').colorbox({

    iframe: true, innerWidth: '1000px', innerHeight: '600px', opacity: 0, allowTransparency: true, transition: 'none'

  });

  $('.movieCbox').colorbox({
    iframe: true, innerWidth: '900px', innerHeight: '540px', opacity: 0, allowTransparency: true, transition: 'none'
  });


  // CallBack
  scrolled_top = $('html').scrollTop();
  $(document).on('cbox_open', function () {

    awake.isCboxView = true;

    $(".all").velocity({blur: 5}, {
      duration: 1500,
      complete: function () {
        //$(".all").css({'position': 'fixed', top: scrolled_top});
      }
    });

  });


  $(document).on('cbox_closed', function () {
    $(".all").velocity({blur: 0}, {
      duration: 500,
      complete: function () {
        $stage.css({'position': 'fixed', top: 0});

        awake.isCboxView = false;

        $('body').removeClass('cboxFullScreen');

        $stage.css({'position': 'relative', top: 0});

        $('window').scrollTop(scrolled_top);
      }
    });


  });

};


var onCboxResize = function () {

  $.colorbox.resize({'innerWidth': '100%', 'innerHeight': '100%'});

};


}
/*
     FILE ARCHIVED ON 19:08:53 Aug 23, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:52:58 Mar 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.089
  esindex: 0.009
  LoadShardBlock: 245.23 (6)
  PetaboxLoader3.datanode: 288.046 (8)
  load_resource: 172.183 (2)
  PetaboxLoader3.resolve: 89.088 (2)
*/