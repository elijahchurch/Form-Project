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
        const youngResult = document.getElementById("young");
        youngResult.setAttribute("class", "hidden");

        const age = parseInt(document.getElementById("answer1").value);
        const pets = parseInt(document.getElementById("answer2").value);

        if (age >= "20" && pets >= "2") {
            cResult.removeAttribute("class");
        } else if (age >= "20" && pets === "1") {
            rubyResult.removeAttribute("class");
        } else if (age > "8" && age < "20") {
            rustResult.removeAttribute("class");
        }
        else if (age <= "8") {
            youngResult.removeAttribute("class");
        } else {
            swiftResult.removeAttribute("class");
        }
    };
};