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

}

export default DateUtil;