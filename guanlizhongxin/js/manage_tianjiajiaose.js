$(function(){
    $("h3 input").click(function(){
        if($(this).is(":checked")){
            $(this).parent().parent().find("input").prop("checked",true)
        }else{
            $(this).parent().parent().find("input").prop("checked",false)
        }
    });
    $("li input").click(function(){
        $(this).parent().parent().find("input:checked").length==$(this).parent().parent().find("input").length?$(this).parent().parent().parent().find("h3 input").prop("checked",true):$(this).parent().parent().parent().find("h3 input").prop("checked",false);

    });
    $(".sub").click(function(){
        var str="";
        $("li input").each(function(i){
            if($("li input").eq(i).is(":checked")){
                str+=$("li input").eq(i).next().html();
            }
        })
        alert(str);
    })
});
