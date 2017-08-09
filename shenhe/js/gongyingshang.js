$(function (){
	$("ul.tabs li").click(function() {
	$("ul.tabs li").removeClass("active");
    $(this).addClass("active"); 
    $(".tab_content").hide(); 
  	var activeTab = $(this).find("a").attr("href");
	$(activeTab).fadeIn();
    return false;
	});
})
