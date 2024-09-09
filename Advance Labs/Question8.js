/*The following DigitalClock class uses an interval to print the time every second once
started, until stopped.*/


class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
        let date = new Date();
        
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}


class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix); 
        this.precision = precision; 
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}


const myPrecisionClock = new PrecisionClock('Precision clock:', 500); 
myPrecisionClock.start();


setTimeout(() => myPrecisionClock.stop(), 5000);
