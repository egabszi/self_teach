document.addEventListener('DOMContentLoaded', () => {
    
});

let interval;
let countdownSeconds;
let minutesInput;
let secondsInput;
let clicked = true;
let disable = true;

function stopCountdown() {
    if (interval || interval ===0 ) {
        clearInterval(interval)
        interval = null;
    }
};

function countdownSettings() {
    if (disable) {
        document.getElementById('minutes').disabled = false;
        document.getElementById('seconds').disabled = false;
        disable = false;
    } else {
        document.getElementById('minutes').disabled = true;
        document.getElementById('seconds').disabled = true;
        disable = true;
    }
}

function changeButtonValue() {
    let button = document.getElementById('timer-toggle-button').value;
    if (clicked) {
        /*button.value ='STOP' */
        document.getElementById('timer-toggle-button').value = 'STOP';
        clicked = false;
    } else {
        /*button.value ='START' */
        document.getElementById('timer-toggle-button').value = 'START';
        clicked = true;
    }
    document.getElementById('minutes').disabled = true;
    document.getElementById('seconds').disabled = true;
}

function oneNumber() {
    if (minutesInput.value.length > 2 || secondsInput.value.lenght > 2) {
        alert('Helyesen add meg az időt mm:ss')
        clearInterval(interval)
    }
    if (minutesInput.value.length < 2) {
        minutesInput.value = "0" + minutesInput.value;
    };
    if (secondsInput.value.length < 2) {
        secondsInput.value = "0" + secondsInput.value;
    };
    if (countdownSeconds > 5999) {
        clearInterval(interval)
    };
}

const COUNTDOWN = () => {
    minutesInput = document.getElementById('minutes');
    secondsInput = document.getElementById('seconds');
    countdownSeconds = Number(minutesInput.value*60) + Number(secondsInput.value);
    if (interval || interval === 0) {
        stopCountdown()
        return
    }
    const INTERVAL = 1000;
    interval = setInterval(() => {
        if (countdownSeconds > 0) {
            countdownSeconds = countdownSeconds - 1;
            minutesInput.setAttribute('value', (Math.floor(Number(countdownSeconds/60))))
            secondsInput.setAttribute('value',countdownSeconds%60)
            minutesInput.value = Math.floor(Number(countdownSeconds/60));
            secondsInput.value = Number(countdownSeconds%60);
            oneNumber();
            console.log(countdownSeconds)
            console.log(secondsInput.value.length)
            return
        }
        alert('lejárt az idő')
        stopCountdown()
    }, INTERVAL)
};

/* TODO
- 1 start, stop gomb
- 1 beállítások gomb
  - input a perceknek
  - input a másodperceknek
  - fv. ezt a két inputot összevegyíti másodpercekké
  - változó aminek az értékét csökkentem
  - setInterval amivel csökkentem
*/
