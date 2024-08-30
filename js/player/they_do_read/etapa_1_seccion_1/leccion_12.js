
import { _1_3, $countDownBody } from "../../auxiliares/windowModal3_1.js";

//Variables
let $dataWrong = document.querySelector("[data-wrong]");
let $wrongSound = document.querySelector(".wrongSound");
let $correctSound = document.querySelector(".correctSound");
let $tableContainer = document.querySelector(".tableContainer");
let $starNumber = document.querySelector(".start");
let $progressBar = document.querySelector(".progress-bar");
let incorrectCounter = 0;
let $tableContainer_2 = document.querySelector(".tableContainer_2");
let $tableContainer_3 = document.querySelector(".tableContainer_3")
let $tresEjercicio = document.querySelector(".tresEjercicio")
let $letterSound = document.querySelector(".letterSound");
let $intentosNumber = document.querySelectorAll(".intentos > .number");
let $intento = document.querySelector(".intentos")
let $twoEjercicio = document.querySelector(".twoEjercicio");
let $paragrahMessenger = document.querySelector(".messengerInformation > p");

let $span = document.querySelectorAll(".tableContainer_2 > button");
let $span_2 = document.querySelectorAll(".tableContainer_3 > button");
//Contadores.
//Ejercicio numero uno 
let correctCounter = 0;
let ErrorCounter = 0;

const CountdownNext = document.querySelector(".countDownNext");


let randomNumber = 0;
let intentos = 3;
let count = 0;
let countTotal = 0;
let _1_3_text = document.querySelector(".text_1_3");
let $spanLetter = document.querySelectorAll(".tableContainer > button");
let $repeatDictation = document.querySelector(".repeatDictation");
let $intentoText = document.querySelector(".intentoText")
//nuevo
let $colButton = document.querySelectorAll(".colButton > button")

let $ceroIntentos = document.querySelector(".ceroIntentos")
let $endLeccion = document.querySelector(".endLeccion");
let $sonidoSiguiente = document.querySelector(".sonidoSiguiente")
document.addEventListener("mousemove", (e) => {
    if (e.target.matches(".colButton > button")) {
        try {
            $letterSound.play();
        } catch (error) {
            alert("error");
        }
    }
});


let $img = document.querySelector("figure > img");
let $theWord = document.querySelector(".theWord");
function countSyllables(title, correctNum) {
    //Variables del dom

    $theWord.innerHTML = `${title}`
    let contador = 0

    $colButton.forEach(e => {
        e.setAttribute("data-title", "")
    })

    for (let i = 0; i < 12; i++) {
        contador++;
        if (correctNum == contador) {
            $colButton[i].innerHTML = contador;
            $colButton[i].setAttribute("data-title", `${title}`)
            continue;
        }
        $colButton[i].innerHTML = `${contador}`;
    }
    console.log(correctNum)
}
countSyllables("La guitarra es un buen instrumento.", 12);


document.addEventListener("click", e => {

    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play()
    }

    if (e.target.matches(".colButton > button")) {
        if (e.target.getAttribute("data-title") == $theWord.textContent) {
            $wrongSound.pause();
            correctCounter++;
            $correctSound.play();

            $intentoText.innerHTML = "Intentos:"
            $intentosNumber[0].textContent = 3;
            $starNumber.innerHTML = `${1 + Number.parseInt($starNumber.textContent)}`;
            e.target.classList.add("hoverVerde")
            $colButton.forEach(e => {
                if (e.textContent.length > 0) {
                    e.disabled = true
                }
            })
            if (parseInt($progressBar.textContent) < 101) {
                $progressBar.innerHTML = `${parseInt($progressBar.textContent) + 2}%`;
                $progressBar.style.width = `${parseInt($progressBar.textContent) + 2}%`;
            }

            setTimeout(() => {
                e.target.classList.remove("hoverVerde");
                $colButton.forEach(e => {
                    if (e.textContent.length > 0) {
                        e.removeAttribute("disabled");
                        defineNextWords()
                    }
                })
            }, 2000);
        } else {
            $intentosNumber[0].textContent = parseInt($intentosNumber[0].textContent) - 1;
            ErrorCounter++;
            $wrongSound.play();
            e.target.classList.add("hoverRed");
            $colButton.forEach(el => {
                el.disabled = true
            })
            setTimeout(() => {
                e.target.classList.remove("hoverRed");
                $colButton.forEach(e => {
                    e.removeAttribute("disabled")
                })
            }, 2000);
            if ($intentosNumber[0].textContent == 1) {
                $intentoText.innerHTML = "Intento:"
            }
            if ($intentosNumber[0].textContent == 0) {
                $colButton.forEach(e => {
                    e.disabled = true;
                    e.classList.add("hoverRed");
                })
                $intento.classList.add("swing");
                $ceroIntentos.play()
                setTimeout(() => {
                    $colButton.forEach(e => {
                        e.classList.remove("hoverRed");
                        e.removeAttribute("disabled");
                        defineNextWords()
                    })
                    $intento.classList.remove("swing")
                }, 2000);
            }
        }
    }

})

function defineNextWords() {
    $intentoText.innerHTML = "Intentos:"
    $intentosNumber[0].textContent = 3;
    switch ($tableContainer.getAttribute("data-next")) {
        case "0":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Una abogada extraordinaria.", 12);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "1":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("La magia de las palabras.", 8);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "2":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("La hada de las pesas.", 7);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "3":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("La reina de los anillos.", 8);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "4":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Lluvia repentina.", 6);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "5":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Corredora encantadora.", 9);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "6":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Un buen aprendizaje.", 7)
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;

        case "7":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Una sonrisa brillante.", 8)
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "8":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Proceso de pensamiento creativo.", 12)
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "9":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Buenas ideas y sentimientos.", 10)
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "10":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("El progreso ha sido constante.", 10)
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "11":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Pensamiento divergente.", 8);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "12":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("La tortuga es un animal muy lento.", 12);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "13":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("El rey leon.", 4);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "14":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Pensar fuera de la caja.", 8);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "15":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Creativo e innovación.", 9);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "16":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("La guitarra es un buen instrumento.", 12);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "17":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Perro.", 2);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "18":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Propuesta.", 4);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "19":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Tecnología.", 5);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "20":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Asistente virtual.", 6);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break;
        case "21":
            randomNumber = Math.floor(Math.random() * 21);
            countSyllables("Tambor.", 2);
            $tableContainer.setAttribute(
                "data-next",
                `${randomNumber}`
            );
            break
        default:
            break;
    }
}


//El inicio de todo 
setTimeout(() => {
    let $main = document.querySelector("main");
    $main.removeChild($main.children[10]);
    setTimeout(async () => {
        $countDownBody.removeAttribute("style");
        _1_3();
        let texto = `Indica el número de sílabas que tiene el verso.`;
        const hablar = (texto) =>
            speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);
        setTimeout(() => {
            temporizador()
        }, 2500);
        setTimeout(() => {
            let $messengerInformation = document.querySelector(
                ".messengerInformation"
            );
            $messengerInformation.removeAttribute("style");
            $messengerInformation.classList.add("AnimationMessengerInformation");
        }, 4000);
    }, 0);
}, 1500);


async function temporizador() {
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        if (countForNext < 10) {
            CountdownNext.textContent = `1:0${countForNext}`;
        }
        if (countForNext > 10) {
            CountdownNext.textContent = `1:${countForNext}`;
        }
        if (countForNext === 0) {
            clearInterval(countdown);
            temporizadorSegundaParte()
        }
    }, 1000);
}
function temporizadorSegundaParte() {
    const CountdownNext = document.querySelector(".countDownNext");
    let $segMin = document.querySelector(".seg-min")
    let countForNext = 60;
    let countdown = setInterval(() => {
        countForNext--;
        CountdownNext.textContent = `${countForNext}`;
        if (countForNext === 0) {
            clearInterval(countdown);
            End_Game();
            $endLeccion.play()
        }
    }, 1000);
}

function End_Game() {
    let $progressBar = document.querySelector(".progress-bar");
    $progressBar.innerHTML = "100%";
    $progressBar.style.width = "100%";
    let $containerResults = document.querySelector(".containerResults");
    let $totalStar = document.querySelector(".totalStar");
    let $motivationalMessage = document.querySelector(".motivationalMessage");
    let $percentage = document.querySelector(".percentage");
    let $correctFailed = document.querySelector(".correctFailed");
    $totalStar.innerHTML = $starNumber.textContent;
    if (ErrorCounter == 0) {
        $percentage.innerHTML = "100%";
        $motivationalMessage.innerHTML = "¡Lo hiciste increíble!";
    }
    if (ErrorCounter > 0 && ErrorCounter < 5) {
        $percentage.innerHTML = "75%";
        $motivationalMessage.innerHTML = "¡Oh, Bastante bien!";
    }

    if (ErrorCounter > 5 && ErrorCounter < 15) {
        $percentage.innerHTML = "50%";
        $motivationalMessage.innerHTML = "¡Lo hiciste bien!";
    }
    if (ErrorCounter > 15 && ErrorCounter < 20) {
        $percentage.innerHTML = "30%";
        $motivationalMessage.innerHTML = "No está mal, hay que mejorar.";
    }
    if (ErrorCounter > 20) {
        $percentage.innerHTML = "20%";
        $motivationalMessage.style.display = "none";
    }
    console.info(incorrectCounter);
    $containerResults.removeAttribute("style");
    document.querySelector(".containerResults  > div").classList.add("animationBounce");
    //failed
    if (ErrorCounter == 0) {
        $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y no has cometido ningún error.`;
    } else if (ErrorCounter == 1) {
        $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado solo una vez.`;
    } else {
        $correctFailed.innerHTML = `Has acertado ${correctCounter} veces y has fallado ${ErrorCounter} veces.`;
    }
}