// The main method for calculating BMR is the Harris-Benedict equation :
// TMB Woman = 655 + (9,6 * P) + (1,8 * A) – (4,7 * I)
// TMB Men = 66 + (13,7 * P) + (5 * A) – (6,8 * I)

let woman = document.getElementById("woman");
let men = document.getElementById("men");
let inputoption1 = document.getElementsByTagName("option")[0];
let inputoption2 = document.getElementsByTagName("option")[1];
let inputoption3 = document.getElementsByTagName("option")[2];
let inputoption4 = document.getElementsByTagName("option")[3];
let inputoption5 = document.getElementsByTagName("option")[4];

let functionwoman = () => {
    woman = true;
    men = false;
}

let functionmen = () => {
    woman = false;
    men = true;
}

let calculate = () => {

    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (age != '' && weight != '' && height != '') {

        document.getElementById("afterCalculate").style.display = "block";

        let imcCalc = weight / Math.pow(height / 100, 2);
        let IMC = imcCalc.toFixed(2)

        if (woman == true) {

            var preTMB = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            var TMB;

            if (inputoption1.selected) {
                TMB = Math.ceil(preTMB * inputoption1.value);
            }
            else if (inputoption2.selected) {
                TMB = Math.ceil(preTMB * inputoption2.value);
            }
            else if (inputoption3.selected) {
                TMB = Math.ceil(preTMB * inputoption3.value);
            }
            else if (inputoption4.selected) {
                TMB = Math.ceil(preTMB * inputoption4.value);
            }
            else if (inputoption5.selected) {
                TMB = Math.ceil(preTMB * inputoption5.value);
            }

        }

        else if (men == true) {

            var preTMB = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);

            if (inputoption1.selected) {
                TMB = Math.ceil(preTMB * inputoption1.value);
            }
            else if (inputoption2.selected) {
                TMB = Math.ceil(preTMB * inputoption2.value);
            }
            else if (inputoption3.selected) {
                TMB = Math.ceil(preTMB * inputoption3.value);
            }
            else if (inputoption4.selected) {
                TMB = Math.ceil(preTMB * inputoption4.value);
            }
            else if (inputoption5.selected) {
                TMB = Math.ceil(preTMB * inputoption5.value);
            }

        }

        else {
            TMB = "Inválido"
        }

        var tmbWeek = Math.ceil(TMB * 7);

        // Low carb diet =    30% protein / 50% fat / 20% carb
        // Medium carb diet = 25% protein / 40% fat / 35% carb
        // High carb diet =   20% protein / 30% fat / 50% carb
        // 1g of protein = 4kcal / 1g of fat = 9kcal / 1g of carb = 4kcal

        document.getElementsByTagName("span")[0].innerHTML = TMB;
        document.getElementsByTagName("span")[1].innerHTML = tmbWeek;
        document.getElementsByTagName("span")[2].innerHTML = IMC;

        if (IMC < 18.5) {
            document.getElementsByTagName("li")[0].style.color = "black";
            document.getElementsByTagName("li")[1].style.color = "white";
            document.getElementsByTagName("li")[2].style.color = "white";
            document.getElementsByTagName("li")[3].style.color = "white";
        }

        else if (IMC >= 18.5 && IMC < 25) {
            document.getElementsByTagName("li")[0].style.color = "white";
            document.getElementsByTagName("li")[1].style.color = "black";
            document.getElementsByTagName("li")[2].style.color = "white";
            document.getElementsByTagName("li")[3].style.color = "white";
        }

        else if (IMC >= 25 && IMC < 30) {
            document.getElementsByTagName("li")[0].style.color = "white";
            document.getElementsByTagName("li")[1].style.color = "white";
            document.getElementsByTagName("li")[2].style.color = "black";
            document.getElementsByTagName("li")[3].style.color = "white";
        }

        else if (IMC >= 30) {
            document.getElementsByTagName("li")[0].style.color = "white";
            document.getElementsByTagName("li")[1].style.color = "white";
            document.getElementsByTagName("li")[2].style.color = "white";
            document.getElementsByTagName("li")[3].style.color = "black";
        }

        calculateDiet(TMB);

    }

    else {
        alert("Preencha corretamente os campos !");
    }

}

let calculateDiet = (TMB) => {

    document.getElementById("target").innerHTML = TMB + " Kcal";

    var proteinNeededLowCarbDiet = Math.ceil(((TMB * 30) / 100) / 4);
    var fatNeededLowCarbDiet = Math.ceil(((TMB * 50) / 100) / 9);
    var carbNeededLowCarbDiet = Math.ceil(((TMB * 20) / 100) / 4);

    var proteinNeededMediumCarbDiet = Math.ceil(((TMB * 25) / 100) / 4);
    var fatNeededMediumCarbDiet = Math.ceil(((TMB * 40) / 100) / 9);
    var carbNeededMediumCarbDiet = Math.ceil(((TMB * 35) / 100) / 4);

    var proteinNeededHighCarbDiet = Math.ceil(((TMB * 20) / 100) / 4);
    var fatNeededHighCarbDiet = Math.ceil(((TMB * 30) / 100) / 9);
    var carbNeededHighCarbDiet = Math.ceil(((TMB * 50) / 100) / 4);

    document.getElementById("macroProtein1").innerHTML = proteinNeededLowCarbDiet + "g <br> proteina";
    document.getElementById("macroProtein2").innerHTML = proteinNeededMediumCarbDiet + "g <br> proteina";
    document.getElementById("macroProtein3").innerHTML = proteinNeededHighCarbDiet + "g <br> proteina";

    document.getElementById("macroFat1").innerHTML = fatNeededLowCarbDiet + "g <br> gordura";
    document.getElementById("macroFat2").innerHTML = fatNeededMediumCarbDiet + "g <br> gordura";
    document.getElementById("macroFat3").innerHTML = fatNeededHighCarbDiet + "g <br> gordura";

    document.getElementById("macroCarb1").innerHTML = carbNeededLowCarbDiet + "g <br> carboidrato";
    document.getElementById("macroCarb2").innerHTML = carbNeededMediumCarbDiet + "g <br> carboidrato";
    document.getElementById("macroCarb3").innerHTML = carbNeededHighCarbDiet + "g <br> carboidrato";

}

let dietCutting = () => {

    let tmbCutting = document.getElementsByTagName("span")[0].innerHTML;
    tmbCutting = parseInt(tmbCutting) - parseInt(tmbCutting / 5);
    calculateDiet(tmbCutting);

    document.getElementById("macroTitle1").style.color = "black";
    document.getElementById("macroTitle2").style.color = "white";
    document.getElementById("macroTitle3").style.color = "white";

}

let dietMaintenance = () => {

    let tmbMaintenance = document.getElementsByTagName("span")[0].innerHTML;
    calculateDiet(tmbMaintenance);

    document.getElementById("macroTitle1").style.color = "white";
    document.getElementById("macroTitle2").style.color = "black";
    document.getElementById("macroTitle3").style.color = "white";

}

let dietBulking = () => {

    let tmbBulking = document.getElementsByTagName("span")[0].innerHTML;
    tmbBulking = parseInt(tmbBulking) + parseInt(tmbBulking / 5);
    calculateDiet(tmbBulking);

    document.getElementById("macroTitle1").style.color = "white";
    document.getElementById("macroTitle2").style.color = "white";
    document.getElementById("macroTitle3").style.color = "black";

}