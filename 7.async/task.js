class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) throw new Error('параметр id не передан');
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Звонок уже существует с данным id");
            return;
        } else {
            this.alarmCollection.push({ time, callback, id });
        }
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    }

    getCurrentFormattedTime() {
        const d = new Date();
        let currentTime = d.toLocaleTimeString().slice(0, 5);
        return currentTime;
    }

    start() {
        let checkClock = (alarmClock) => {
            if (alarmClock === this.getCurrentFormattedTime())
                return alarmClock.callback();
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarmClock => checkClock(alarmClock))
            }, 1000)
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            (this.timerId = null);
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach(alarmClock => console.log(id + "-" + time));
    }

    clearAlarms() {
        stop();
        return this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("14:00", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("14:01", () => { console.log("Давай, вставай уже"); phoneAlarm.removeClock(2) }, 2);
phoneAlarm.addClock("14:02", () => {
    console.log("Иди умывайся");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);