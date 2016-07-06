$(document).ready(function(){
    var c = new Image();

    c.onload = function() {
        $('body').css({'background':'url("img/hawSunset.png")', 'background-repeat':'no-repeat', 'background-size':'cover', 'background-position':'center', 'background-attachment':'fixed'});
    }

    c.src = 'img/hawSunset.png';

    $('input:checkbox').click(function(){
        $(this).next().toggleClass('completed').find('.check').prop('checked',$(this).hasClass('completed'));
    });

    $('a.clearCom').on('click', function(){
        $(this).parents('li').slideUp('fast');
    });


})


//http://1.bp.blogspot.com/-UGQYEKQwjlY/VZRWQXZ3YiI/AAAAAAABJyM/9FgHq_8bCP8/s1600/06_sunset%2Bin%2Bisland_01.jpg
