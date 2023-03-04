document.addEventListener('DOMContentLoaded', () => {
    
});

let interval;
let countdownSeconds = 9;

function stopCountdown() {
    if (interval || interval ===0 ) {
        clearInterval(interval)
        interval = null;
    }
};

const COUNTDOWN = () => {
    if (interval || interval === 0) {
        stopCountdown()
        return
    }
    const INTERVAL = 1000;
    interval = setInterval(() => {
        if (countdownSeconds > 0) {
            countdownSeconds = countdownSeconds - 1;
            console.log(countdownSeconds)
            return
        }
        alert('lejárt az idő')
        stopCountdown()
    }, INTERVAL)
    document.getElementById('timer-toggle-button').textContent = 'STOP'
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
