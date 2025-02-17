



$(document).ready(() => {
    $("#btnLogin").click(() => {
        let email = $("#email").val().trim();
        let pass = $("#password").val().trim();

        if (validate(email, pass)) {
            $("#message").html("Welcome").css("color", "green");
        } else {
            $("#message").html("Invalid credentials").css("color", "red");
        }
    });
});



