//    全选按钮
$(".all").click(function(){
    if($(this).is(":checked")){
        $(".product").prop("checked",true);
        $(".all").prop("checked",true)
    }else{
        $(".product").prop("checked",false);
        $(".all").prop("checked",false)
    }
})
$(".product").click(function(){
    $(".product:checked").length==$(".product").length?$(".all").prop("checked",true):$(".all").prop("checked",false)

})