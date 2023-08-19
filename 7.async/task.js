class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null; 
  }
  
  addClock(time, callback) {    
    if(!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if(this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
    } else {
      const result = {time, callback, canCall: true};
      this.alarmCollection.push(result)
    }
  }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(element => element.time !== time);      
    }

    getCurrentFormattedTime() {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());      
      return `${hours}:${minutes}`;
    }

    start() {
      if(this.intervalId !== null) {
        return;
      }
      this.intervalId = setTimeout(() => {
        this.alarmCollection.forEach(alarm => {
          if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
            alarm.canCall = false;
            alarm.callback();
          }        
        });
      }, 1000);
    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;      
    }    

    resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true)
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }

}