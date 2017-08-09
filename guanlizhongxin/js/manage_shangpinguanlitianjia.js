function doChange(file){
    var upload_file = $.trim($("#upload_file").val());    //获取上传文件
    $('#photoCover').html(upload_file);     //赋值给自定义input框
};
KindEditor.ready(function(K) {
//        window.editor = K.create('#editor_id');
    K.create('#editor_id',{width:"800px",height:"500px"});
});
