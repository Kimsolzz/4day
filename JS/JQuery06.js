/**
 * Created by rlath on 2016-11-17.
 */

function myFunc(){
    $("ul > li").addClass("mystyle")
}

function instyle(){
    //현재 선택된 Li에 대해서 style을 적용해 주면됨
    $(this).addClass("instyle");
    $(this).removeClass("outstyle");
}

function outstyle(){
    $(this).addClass("outstyle");
    $(this).removeClass("instyle");

}


function  myFunc1() {
    $("[type = text]").removeAttr("disabled");
}


function  myFunc2() {
    $("[type = text]").attr("disabled", "disabled");
}