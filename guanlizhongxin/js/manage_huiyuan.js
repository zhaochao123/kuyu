/**
 * 解决IE下不支持placeholder属性
 * author : MR chen  370489175@qq.com
 * Date: 16-01-19
 * 可以根据自己的需要去扩展
 * ps:写的很简单  根据自己的需求来  不喜勿喷
 */
(function($){
    $.fn.placeholder = function(options){
        var opts = $.extend({}, $.fn.placeholder.defaults, options);
        var isIE = document.all ? true : false;
        return this.each(function(){
            var _this = this,
                placeholderValue =_this.getAttribute("placeholder"); //缓存默认的placeholder值
            if(isIE){
                _this.setAttribute("value",placeholderValue);
                _this.onfocus = function(){
                    $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                };
                _this.onblur = function(){
                    $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                };
            }
        });
    };
})(jQuery);
$("input").placeholder();


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