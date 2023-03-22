let interval: NodeJS.Timer | null;
let countdownSeconds: number | null;
let minutesInput = document.getElementById('minutes') as HTMLInputElement;
let secondsInput = document.getElementById('seconds') as HTMLInputElement;
let isRunning = true;
let isDisabled = true;

function stopCountdown() {
    if (interval || interval === 0) {
        clearInterval(interval)
        interval = null;
    }
};

function countdownSettings() {
    if (isDisabled) {
        minutesInput.disabled = false;
        secondsInput.disabled = false;
        isDisabled = false;
    } else {
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        isDisabled = true;
    }
}

function changeButtonValue() {
    let button = document.getElementById('timer-toggle-button') as HTMLButtonElement;
    if (button === null) {
        return
    }
    if (isRunning) {
        button.textContent = 'STOP'
        isRunning = false;
    } else {
        button.textContent = 'START'
        isRunning = true;
    }
    minutesInput.disabled = true;
    secondsInput.disabled = true;
}

function formatTimerNumbers(minutes: number, seconds: number) {
    let minutesString = minutes !== undefined ? minutes.toString() : '00';
    let secondsString = seconds !== undefined ? seconds.toString() : '00';
    //let maxTimerSeconds = 5999;
    /*if (minutes > 60 || seconds > 2) {
        alert('Helyesen add meg az időt mm:ss')
        //clearInterval(interval)
    }*/
    if (minutes < 10) {
        minutesString = "0" + minutes;
    };
    if (seconds < 10) {
        secondsString = "0" + seconds;
    };
    /*if (countdownSeconds > maxTimerSeconds) {
        clearInterval(interval)
    };*/
    return `${minutesString}:${secondsString}`
}

const COUNTDOWN = () => {
    countdownSeconds = Number(minutesInput.value) * 60 + Number(secondsInput.value);
    if (interval || interval === 0) {
        stopCountdown()
        return
    }
    const INTERVAL = 1000;
    if (countdownSeconds === null) {
        return
    }
    interval = setInterval(() => {
        if (!countdownSeconds || countdownSeconds <= 0) {
            alert('lejárt az idő')
            stopCountdown()
            return
        }
        countdownSeconds = countdownSeconds - 1;
        let timerString = formatTimerNumbers(Math.floor(countdownSeconds / 60), countdownSeconds % 60);
        minutesInput.value = timerString.split(':')[0];
        secondsInput.value = timerString.split(':')[1];
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

module.exports = formatTimerNumbers;