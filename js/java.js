$(document).ready(function(){
    $("#btn").on('click',function(){
        var user = $("#user").val();
        var pass = $("#pass").val();
        var email = $("#email").val();
        Vannuth(user,pass,email);
    });

});
function setSuccess(success,label) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
    $('#' + label).addClass('text-success').removeClass('text-danger');
}
function setError(error,label){
    $('#' + error).addClass('border-danger').removeClass('border-success');
    $('#' + label).addClass('text-danger').removeClass('text-success');
}
function isUser(user) {
    user == "" ? setError('user','u-label'): setSuccess('user','u-label');
}
function isPass(pass) {
    pass == "" ? setError('pass','p-label'): setSuccess('pass','p-label');
}
function isEmail(email) {
    email == "" ? setError('email','e-label'): setSuccess('email','e-label');
}
function Vannuth(user,pass,email){
    isUser(user);
    isPass(pass);
    isEmail(email);
}