const keyMatrix = [
    [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "Backspace"],
        [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 187, 8]
    ],
    [
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
        [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221]
    ],
    [
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"],
        [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, "Enter"]
    ],
    [
        ["Shift", "z", "x", "c", "v", "b", "n", "m", "/", "Shift"],
        ["ShiftLeft", 90, 88, 67, 86, 66, 78, 77, 191, "ShiftRight"],
    ],
    [
        ["Ctrl", 'Windows', "Alt", "Space", "Alt", "ContextMenu", "Ctrl", ".", "Enter"],
        ["ControlLeft", 91, "AltLeft", 32, "AltRight", 93, "ControlRight", 110, "NumpadEnter"]
    ]

];

// Верстка, ассоциативный массив не применял так как цикл for in не по порядку присваивает название кнопкам
let keyboard = document.querySelector('#keyboard');
let elem11;
window.onload = () => {
    for (let i = 0; i < keyMatrix.length; i++) {
        let line = document.createElement('div');
        line.classList.add('line');
        for (let j = 0; j < keyMatrix[i].length; j++) {
            for (let k = 0; k < keyMatrix[i][j].length; k++) {
                if (j % 2 == 0) {
                    let btn = document.createElement('div');
                    btn.innerHTML = keyMatrix[i][j][k];
                    btn.classList.add('key');
                    line.appendChild(btn);
                    btn.setAttribute('data-key', keyMatrix[i][j + 1][k])
                }
            }
        }
        keyboard.appendChild(line);
    }
    
    elem11 = document.querySelectorAll('.key');
    for (let i = 0; i < elem11.length; i++) {
        if (elem11[i].getAttribute("data-key") == 8) {
            elem11[i].classList.add('backspace', 'low');
        } else if (elem11[i].getAttribute('data-key') == 20) {
            elem11[i].classList.add('capslock', 'low');
        } else if (elem11[i].getAttribute('data-key') == "Enter") {
            elem11[i].classList.add('enter', 'low');
        } else if (elem11[i].getAttribute('data-key') == "NumpadEnter") {
            elem11[i].classList.add('enterN', 'low');
        } else if (elem11[i].getAttribute('data-key') == 9) {
            elem11[i].classList.add('tab', 'low');
        } else if (elem11[i].getAttribute('data-key') == "ShiftLeft") {
            elem11[i].classList.add('shiftL', 'low');
        } else if (elem11[i].getAttribute('data-key') == "ShiftRight") {
            elem11[i].classList.add('shiftR', 'low');
        } else if (elem11[i].getAttribute('data-key') == "ControlLeft") {
            elem11[i].classList.add('ctrlL', 'low');
        } else if (elem11[i].getAttribute('data-key') == "ControlRight") {
            elem11[i].classList.add('ctrlR', 'low');
        } else if (elem11[i].getAttribute('data-key') == "AltLeft") {
            elem11[i].classList.add('altL', 'low');
        } else if (elem11[i].getAttribute('data-key') == "AltRight") {
            elem11[i].classList.add('altR', 'low');
        } else if (elem11[i].getAttribute('data-key') == 32) {
            elem11[i].classList.add('space', 'low');
        }else if (elem11[i].getAttribute('data-key') == 93) {
            elem11[i].classList.add('ContextMenu', 'low');
        }else if (elem11[i].getAttribute('data-key') == 91) {
            elem11[i].classList.add('Windows', 'low');
        }
    }
    // переводим буквы на кнопках в вверхний регистр
    for (let i = 0; i < elem11.length; i++){
        let check = elem11[i].classList.contains('low');
        if(check == false){
            let str = elem11[i].innerHTML.toUpperCase();
             elem11[i].innerHTML = str;
        }
    }
    return elem11;
}
function t11() {
    for (let i = 0; i < elem11.length; i++) {
        elem11[i].classList.remove('active');
        if (event.keyCode == elem11[i].getAttribute('data-key') || event.code == elem11[i].getAttribute('data-key')) {
            elem11[i].classList.add('active');
        }
    }
   }
// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;