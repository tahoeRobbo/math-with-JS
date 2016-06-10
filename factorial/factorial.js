function calculate() {
    var f = 1;
    var x = parseInt($("#input1").val());

    if (x <= 0 || isNaN(x)) {
        $("#details").html("You must input a positive number");
    } else {
    x = parseInt(x);
    while(x > 1) {
        f *= x;
        x -= 1;
    }

    $("#details").html("The factorial of " + $("#input1").val() + " is: " + f.toString());
    }
}
