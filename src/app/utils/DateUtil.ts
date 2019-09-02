class DateUtil {
    
    formatDate(day: Date) {
        day = new Date(day);
        let monthDay = day.getDate();
        let month = day.getMonth() + 1;
        let year = day.getFullYear();

        let stringDate = monthDay + "-" +  (month < 10 ? "0" + month : month)  + "-" + year;

        return stringDate;
    }

    compareBetweenDate(dateToCompare: number, startDate: number, endDate: number): boolean  {
        if (dateToCompare >= startDate && dateToCompare <= endDate) {
            return true;
        }

        return false;
    }

    formatSchedulesDates(schedules) {
        let day;
        schedules.map(s => {
            for (let i = 0; i < s.days.length; i++) {
                day = new Date(s.days[i])
                s.days[i] =  this.formatDate(day.getTime() + 10800000);
            }
        });
        return schedules;
    }

}

export default DateUtil;