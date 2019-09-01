import ScheduleRuleTypesEnum from "../enums/ScheduleRuleTypesEnum";
import Intervals from "./Intervals";

class ScheduleRule {
    id: number = null;
    ruleType: string = "";
    days: Array<Date> = [];
    weekdays: Array<string> = [];
    intervals: Array<Intervals> = [];

    verify(scheduleRule) : boolean {
        let res = true;
        if(!scheduleRule.ruleType) {
            res = false;
        }
        if(!scheduleRule.days) {
            res = false;
        }
        if(!scheduleRule.weekdays) {
            res = false;
        }
        if(!scheduleRule.intervals) {
            res = false;
        }
        return res;
    }

    create(data): ScheduleRule {
        
        if (this.verify(data)) {
            let scheduleRule = new ScheduleRule();
            
            scheduleRule.ruleType = data.ruleType;
            scheduleRule.weekdays = data.weekdays;
            scheduleRule.intervals = data.intervals;
            data.days.map(d =>  {
                scheduleRule.days.push(new Date(d));
            });
    
            return scheduleRule;
        } else {
            return;
        }
    }

    setId(scheduleRule: ScheduleRule, schedules: Array<ScheduleRule>) {
        let id = 0;
        schedules.map(s => {
            if (s.id > id) {
                id = s.id;
            }
        });
        scheduleRule.id = id + 1;
        return scheduleRule;
    }
}

export default ScheduleRule;