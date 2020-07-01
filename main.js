/*global $*/
function Profile() {
    $('.content-field-main').load('profile.html',function(){
        $('.profile, .skill, .learned').hide();
        $('.profile').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});
        setTimeout(function(){
            $('.skill').fadeIn(500).animate({'marginRight': '-100px'},{queue: false});
            $('.skill-graph').hide();
            for(var j=1;j<=5;j++){
                $('.sg-'+j).hide().delay(200+j*100).fadeIn(300);
            }
        }, 550);
        setTimeout(function(){
            $('.learned').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});        
        }, 1500);
    });
    $('.content-name').hide().text('ABOUT ME').fadeIn(500);
}
function Etc(){
    $('.content-field-main').load('etc.html',function(){
        $('.gs, .team-pj, .other').hide();
        $('.gs').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});
        setTimeout(function(){
            $('.team-pj').fadeIn(500).animate({'marginRight': '-100px'},{queue: false});
        }, 550);
        setTimeout(function(){
            $('.other').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});        
        }, 1100);
    });
    $('.content-name').hide().text('ETC...').fadeIn();
}
$(function(){
    $('.solid-box').hover(function(){
        $('.click-me').delay(350).fadeIn(50);
        $('.front').css('background-color','beige');
    },function(){
        $('.click-me').fadeOut(30);
        $('.front').css('background-color','#70B994');
    });
    $('.solid-box').on('click',function(){
        $('.front').fadeOut(400,function(){
            Profile();
        });
    });
});
$(function(){
    $('.profile-btn').click(function() {
        $(this).css('color','#ec7b7c');
        $('.menu-btn').not(this).css('color','#70B994');
        Profile();
        $('.profile').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});
    });
});
$(function(){
    $('.webapp-btn').click(function() {
        $(this).css('color','#ec7b7c');
        $('.menu-btn').not(this).css('color','#70B994');
        $('.content-field-main').load('webapp.html',function(){
            $('.webapp-ex, .webapp-img').hide();
            $('.title').hide().fadeIn(500).animate({'marginLeft': '-50px'},{queue: false});
            setTimeout(function(){
                $('.webapp-img').fadeIn(300);
            },550);
            setTimeout(function(){
                $('.webapp-ex').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});
            },750);
        });
        $('.content-name').hide().text('WEB APP').fadeIn();
    });
});
$(function(){
    $('.3dgame-btn').click(function() {
        $(this).css('color','#ec7b7c');
        $('.menu-btn').not(this).css('color','#70B994');
        $('.content-field-main').load('3dgame.html',function(){
            $('.game-ex, .mp4').hide();
            $('.title').hide().fadeIn(500).animate({'marginLeft': '-50px'},{queue: false});
            setTimeout(function(){
                $('.mp4').fadeIn(300);
            },700);
            setTimeout(function(){
                $('.game-ex').fadeIn(500).animate({'marginLeft': '-100px'},{queue: false});
            },750);
        });
        $('.content-name').hide().text('3D GAME').fadeIn();
    });
});
$(function(){
    $('.illust-btn').click(function() {
        $(this).css('color','#ec7b7c');
        $('.menu-btn').not(this).css('color','#70B994');
        $('.content-field-main').load('illust.html',function(){
            $('.title').hide().fadeIn(500).animate({'marginLeft': '-50px'},{queue: false});
            for(var i=1;i<=5;i++){
                $('.illust-img-'+i).hide().delay(150*i+600).fadeIn(300);
            }
        });
        $('.content-name').hide().text('ILLUSTRATION').fadeIn();
    });
});
$(function(){
    $('.etc-btn').click(function() {
        $(this).css('color','#ec7b7c');
        $('.menu-btn').not(this).css('color','#70B994');
        Etc();
    });
});
$(function(){
    $('.gs-btn').on('click',function(){
        console.log('p');
        Etc();
    });
});