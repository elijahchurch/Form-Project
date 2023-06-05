window.onload = function () {

    const form = document.querySelector("form");
    const cResult = document.getElementById("C#");
    const rubyResult = document.getElementById("Ruby");
    const rustResult = document.getElementById("Rust");
    const swiftResult = document.getElementById("Swift");
    const youngResult = document.getElementById("young");
    const nuggetsResult = document.getElementById("nba1");
    const heatResult = document.getElementById("nba2");
    const pythonResult = document.getElementById("Python");

    form.onsubmit = function (event) {
        event.preventDefault();

        cResult.setAttribute("class", "hidden");
        rubyResult.setAttribute("class", "hidden");
        rustResult.setAttribute("class", "hidden")
        swiftResult.setAttribute("class", "hidden");
        youngResult.setAttribute("class", "hidden");
        nuggetsResult.setAttribute("class", "hidden");
        heatResult.setAttribute("class", "hidden");
        pythonResult.setAttribute("class", "hidden");

        const age = parseInt(document.getElementById("answer1").value);
        const pets = parseInt(document.getElementById("answer2").value);
        const basketball = document.getElementById("answer5").value;
        const animal = document.getElementById("answer3").value;

        if (age >= "30" && pets >= "2") {
            if (animal === "racoon" || animal === "elephant") {
                cResult.removeAttribute("class");
            } else if (animal === "snake" || animal === "manatee") {
                pythonResult.removeAttribute("class");
            }
        } else if (age > "8" && age < "30") {
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

        if (basketball === "nuggets") {
            nuggetsResult.removeAttribute("class");
        } else if (basketball === "heat") {
            heatResult.removeAttribute("class");
        }
        form.reset();
    };
};