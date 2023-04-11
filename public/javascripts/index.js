function showPassword(){
    var x = $("#password")[0];
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkLogin(){
    var username = $("#username").val();
    var password = $("#password").val();
    if(username == "" || password == ""){
        $("#errormsg").text("Please enter a valid username and password");
        return false;
    }
    return true;
}

function darkMode(){
    if ($("body").hasClass("body-dark")) {
        $("body").addClass("body-light")
        .removeClass("body-dark");
        $("#dark-mode").addClass("fa-moon")
        .removeClass("fa-sun")
        .parent().addClass("btn-light")
        .removeClass("btn-dark");
        $("#form-wrapper").addClass("bg-light")
        .addClass("text-dark")
        .removeClass("bg-dark")
        .removeClass("text-light")
        .removeClass("border-dark")
        .addClass("border-light");
        $("#title").addClass("border-light")
        .removeClass("border-dark");
    }
    else {
        $("body").addClass("body-dark")
        .removeClass("body-light");
        $("#dark-mode").addClass("fa-sun")
        .removeClass("fa-moon")
        .parent().addClass("btn-dark")
        .removeClass("btn-light");
        $("#form-wrapper").addClass("bg-dark")
        .addClass("text-light")
        .removeClass("bg-light")
        .removeClass("text-dark")
        .removeClass("border-light")
        .addClass("border-dark");
        $("#title").addClass("border-dark")
        .removeClass("border-light");
    }

}

function textCheck(z){
    var selector = "#" + z;
    if($(selector).prop('checked') == true){
        $(selector).prop('checked', false);
    }
    else{
        $(selector).prop('checked', true);
    }
}

function login(){
    if(checkLogin()){
    $("#login-form").hide();
    $("#criteria-form").show();
}
}

function addQuestions(){
    $.getJSON("../data/further-question.json", function(json){
        json.forEach(line => {
            console.log(line.id);
            if($("#" + line.id).prop("checked")==true){
                $("#complexity-Xbox-questions").append("<h3>" + line.name + "</h3>");
            line.questions.forEach(question => {
                console.log(question.id + " " + question.question)
                $("#complexity-Xbox-questions").append("<label for='" + question.id + "'>" + question.question + "</label><br>"
                    + "<input type='radio' id='rate-1' name='rate' value='1'>"
                    + "<label for='rate-1'>1</label>"
                    
                    + "<input type='radio' id='rate-2' name='rate' value='2'>"
                    + "<label for='rate-2'>2</label>"
                    
                    + "<input type='radio' id='rate-3' name='rate' value='3'>"
                    + "<label for='rate-3'>3</label>"
                    
                    +"<input type='radio' id='rate-4' name='rate' value='4'>"
                    +"<label for='rate-4'>4</label>"
                    
                    +"<input type='radio' id='rate-5' name='rate' value='5'>"
                    +"<label for='rate-5'>5</label>"
                    
                    +"<input type='radio' id='rate-6' name='rate' value='6'>"
                    +"<label for='rate-6'>6</label>"
                    
                    +"<input type='radio' id='rate-7' name='rate' value='7'>"
                    +"<label for='rate-7' class='mb-2' >7</label><br>");
            });
            }
            else(
                console.log(line.id + "is not checked")
            )
    });
    });
}

function criteriaSubmit(){
    $("#individual-form").show();
    addQuestions();
    $("#criteria-form").hide();
}

$(document).ready(function(){
    document.getElementById("login-btn").addEventListener("click", function(event) {
        event.preventDefault();
        login();
    });

    document.getElementById("criteria-submit-btn").addEventListener("click", function(event) {
        event.preventDefault();
        criteriaSubmit();
    });
});