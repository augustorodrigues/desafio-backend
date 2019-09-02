import ScheduleRule from "./ScheduleRule";
import AvailableHours from "./AvailableHours";
import DateUtil from "../utils/DateUtil";

class Interval {    
    start: string =  "";
    end: string = "";

    filterDates(startDate, endDate, schedules: Array<ScheduleRule>) {
        let availableHours: Array<AvailableHours> = [] ;
        let availableHour;
        let interval;
        let dateUtil = new DateUtil();

        startDate = new Date(startDate);
        endDate = new Date(endDate);
        startDate = startDate.getTime();
        endDate = endDate.getTime();

        schedules.map(schedule => {
            schedule.days.map(day => {
                day = new Date(day);
                let dateToCompare = day.getTime();

                //if (dayy >= startDate && dayy <= endDate) {
                if (dateUtil.compareBetweenDate(dateToCompare, startDate, endDate)) {
                    availableHour = new AvailableHours();
                    availableHour.day = dateUtil.formatDate(new Date(dateToCompare + 10800000));

                    schedule.intervals.map(i => {
                        interval = new Interval();
                        interval.start = i.start;
                        interval.end = i.end;

                        availableHour.intervals.push(interval);
                    });

                    availableHours.push(availableHour);
                }
            });
        });



        return availableHours;
    }
}

export default Interval;