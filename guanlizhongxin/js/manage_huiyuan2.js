$(function(){
    $("#ECalendar_case3").ECalendar({
        type:"time",
        offset:[0,2]
    });
    $("#ECalendar_case4").ECalendar({
        type:"time",
        offset:[0,2]
    });


    $("input[name=pwd2]").blur(function () {
        if ($('input[name=pwd1]').val() != $('input[name=pwd2]').val()) {
            // alert('密码与确认密码不一致！');
            $('input[name=pwd1]').val("");
            $('input[name=pwd2]').val("");
            $('.mima').text("密码与确认密码不一致!").css("color", "red");
        }
    });
    $("input[name=phone_or_email]").blur(function () {
        var myReg0 = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        var myReg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (myReg0.test($("input[name=phone_or_email]").val()) || myReg1.test($("input[name=phone_or_email]").val())) {
            $('.phone_or_email').text("输入正确!").css("color", "green");
        } else {
            $('.phone_or_email').text("*请输入有效号码!").css("color", "red");
            $("input[name=phone_or_email]").val("");
            // alert("*请输入有效号码!")
        }
    });
})