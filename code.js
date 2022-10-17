window.onload = function() {
    var submitBtn = document.getElementById("submit");
    // manage rating buttons and save the result based on which button is pressed
        var buttonlist = document.querySelectorAll("button");
        buttonlist.forEach(function(i){
            i.addEventListener("click", function(e){
                console.log((e.target.innerHTML));
            })
        })
    // change the "selected" text based on which button is pressed
    function handleSubmitBtn() {
        submitBtn.onclick = function() {
            var selectedRating = rating.value;
        };
    };
};