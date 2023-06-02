window.onload = function () {

    const form = document.querySelector("form");
    const cResult = document.getElementById("C#");
    const rubyResult = document.getElementById("Ruby");
    const rustResult = document.getElementById("Rust");
    const swiftResult = document.getElementById("Swift");
    const youngResult = document.getElementById("young");

    form.onsubmit = function (event) {
        event.preventDefault();

        cResult.setAttribute("class", "hidden");
        rubyResult.setAttribute("class", "hidden");
        rustResult.setAttribute("class", "hidden")
        swiftResult.setAttribute("class", "hidden");
        youngResult.setAttribute("class", "hidden");

        const age = parseInt(document.getElementById("answer1").value);
        const pets = parseInt(document.getElementById("answer2").value);

        if (age >= "25" && pets >= "2") {
            cResult.removeAttribute("class");
        } else if (age > "8" && age < "25") {
            if (pets >= "2") {
                rustResult.removeAttribute("class");
            } else if (pets < "2") {
                rubyResult.removeAttribute("class");
            }
        } else if (age <= "8") {
            youngResult.removeAttribute("class");
        } else {
            swiftResult.removeAttribute("class");
        }
        form.reset();
    };
};