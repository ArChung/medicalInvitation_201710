var mom = $('.container');
var pages = $('.page');

$(document).ready(function() {
    // mom.click(goNext);

    // playAni($('.p1'))




    initLoading();

    
    initPop();
    initBtn();
    // initSwipeEvent();
    // initArr();

})


function initArr() {
    TweenMax.to($('.arr'), .6, { transform: "translateY(-20px)", yoyo: true, repeat: -1, ease: Power1.easeInOut });

}

function initSwipeEvent() {
    // console.log(123)
    $(".bigContainer").swipe({
        //Generic swipe handler for all directions
        swipeUp: function(event, direction, distance, duration, fingerCount, fingerData) {
            goNext();
        },
        swipeDown: function(event, direction, distance, duration, fingerCount, fingerData) {
            goPrev();
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
}

function initBtn() {
    // $(".homeBtn").swipe({
    //     click: function() {
    //         ChungTool.removeClassWithFilter(mom, 'channel_');
    //         mom.addClass('channel_1');
    //         playAni($('.p1'));
    //     }
    // });

    // $(".mapBtn").swipe({
    //     click: function() {
    //         ChungTool.openGoogleApp('高雄長庚紀念醫院');
    //     }
    // });

    // $(".arr").swipe({
    //     click: function() {
    //          goNext();
    //     }
    // });

    // $('.tripBtn').swipe({
    //     click: function() {
    //         var element = ChungTool.getAtagElement();
    //         element.href = 'http://www.thsrc.com.tw/tw/TimeTable/SearchResult';
    //         $(element).attr('target','_blank');
    //         element.click();
    //     }
    // });
}


function initPop() {
    $(".calendarBtn").swipe({
        click: function() {
            simpleShow($('.calendarPop'));
        }
    });


    $(".calendarPop .bg").swipe({
        click: function() {
            simpleHide($('.calendarPop'));
        }
    });

    $(".calendarPop .clozBtn").swipe({
        click: function() {
            simpleHide($('.calendarPop'));
        }
    });
}

function initLine() {
    $('.lineBtn').click(function() {
        ChungTool.shareToLine('https://archung.github.io/medicalInvitation/index.html');
    })
}

function initLoading() {
    //loading animation
    TweenMax.to('.loading .wTxt', .3, { autoAlpha: .3, yoyo: true, repeat: -1, ease: Power2.easeInOut })


    $('body').waitForImages({
        finished: function() {
            $('.bigContainer').removeClass('hide');
            $('.loading').addClass('hide');
            playAni($('.p1'));

        },
        each: function(loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
            $('.loading').find('i').html(r);
            console.log(r)
        },
        waitForAll: true
    });
}


function playAni(page) {
    var ani = new TimelineMax();


    ani.set(page.find('.wrap'), { perspective: 1000 })
        .set(page.find('.wrap > *'), { autoAlpha: 0 })
        .set(page.find('.lAni'), { marginLeft: -60 })
        .set(page.find('.rAni'), { marginLeft: 60 })
        .set(page.find('.tAni'), { marginTop: -60 })
        .set(page.find('.bAni'), { marginTop: 100 })
        .set(page.find('.roleAni'), { rotationY: 60 })
        .set(page.find('.rotateAni'), { rotationZ: 60 })
        .set(page.find('.roleRAni'), { rotationY: 60, transformOrigin: '120% 0%' })
        .staggerTo(page.find('.wrap > *'), .6, { rotationZ: 0, autoAlpha: 1, marginTop: 0, marginLeft: 0 }, .1)


}




function goNext() {


    var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
    var cNext = cNow + 1;

    if (cNext > pages.length) {
        // cNext = 1;
        return;
    }

    ChungTool.removeClassWithFilter(mom, 'channel_');
    mom.addClass('channel_' + cNext);
    playAni($('.p' + cNext));
}



function goPrev() {
    var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
    var cNext = cNow - 1;

    if (cNext < 1) {
        return;
    }

    ChungTool.removeClassWithFilter(mom, 'channel_');
    mom.addClass('channel_' + cNext);
    playAni($('.p' + cNext));

}