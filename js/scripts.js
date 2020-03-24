$(document).ready(function(){
    $("button#green").click(function(){
        $("body").removeClass();
        $("body").addClass("green-background");
        //$('body').css('background-color', 'green');
    });
    $("button#yellow").click(function(){
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });
    $("button#red").click(function(){
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $('button#clickable').click(function(){
        $('body').addClass('font-change');
        //toggleできない
    });
 });
 
 