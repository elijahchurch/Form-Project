window.onload = function () {

    const form = document.querySelector("form");

    form.onsubmit = function (event) {
        event.preventDefault();

        const cResult = document.getElementById("C#");
        cResult.setAttribute("class", "hidden");
        const rubyResult = document.getElementById("Ruby");
        rubyResult.setAttribute("class", "hidden");
        const rustResult = document.getElementById("Rust");
        rustResult.setAttribute("class", "hidden")
        const swiftResult = document.getElementById("Swift");
        swiftResult.setAttribute("class", "hidden");

        const age = parseInt(document.getElementById("answer1").value);
        const pets = parseInt(document.getElementById("answer2").value);

        if (age >= "30" && pets >= "2") {
            cResult.removeAttribute("class");
        }
        else {
            swiftResult.removeAttribute("class");
        }


    };




};