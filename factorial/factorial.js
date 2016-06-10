function calculate() {
    var f = 1;
    var x = $("#input1").val();

    while(x > 1) {
        f *= x;
        x -= 1;
    }

    $("#details").html("The factorial of " + $("#input1").val() + " is: " + f.toString());
}
