window.onload = function() {

    var btnValuesArr = [];
    var removeLast = btnValuesArr.pop();

    // manage rating buttons and save the result based on which button is pressed
        var btnlist = document.querySelectorAll("button");
        btnlist.forEach(function(i){
            i.addEventListener("click", function(e){
                e.target.style.backgroundColor = "#959eac";
                if (btnValuesArr.length > 1) {
                    removeLast; // make separate functions for push and color change?
                } else {
                    btnValuesArr.push(e.target.value);
                }
            })
            console.log(btnValuesArr);
        })
    // change the page and "selected" text based on which button is pressed
    var text = document.getElementById("selected");
    var btnValue = document.getElementById("btn1");
    var submitBtn = document.getElementById("submit");
    submitBtn.onclick = function() {
        location.href = "thankyou.html";
        
    }
}
