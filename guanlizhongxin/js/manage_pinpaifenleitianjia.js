function doChange(file){
    var upload_file = $.trim($("#upload_file").val());    //获取上传文件
    $('#photoCover').val(upload_file);     //赋值给自定义input框
}