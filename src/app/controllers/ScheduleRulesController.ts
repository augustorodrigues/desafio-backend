import ScheduleRule from '../models/ScheduleRule';
import databaseConnection from '../../database/DatabaseAccess';
import Interval from '../models/Interval';
import AvailableHours from '../models/AvailableHours';
import DateUtil from '../utils/DateUtil';

let schedules;

class ScheduleRuleController {

    findAll(req, res) {
        schedules = databaseConnection.openConnection();
        let dateUtil = new DateUtil();

        schedules = dateUtil.formatSchedulesDates(schedules);

        return res.json(schedules);
    }

    findFilterDates(req, res) {
        let startDate = req.body.startDate;
        let endDate = req.body.endDate;
        let interval = new Interval();
        let availableHours = Array<AvailableHours>();

        schedules = databaseConnection.openConnection();
        availableHours = interval.filterDates(startDate, endDate, schedules);

        return res.status(200).json({ availableHours });
    }

    /**
     * TODO: depends on the type of rule, days e weekdays must be empty.
     * type WEEKLY dont need days and weekdays
     * type DAILY must only have days values 
     * type SPECIFIC_DATE dont need weekly values
     */
    save(req, res) {
        let scheduleRule = new ScheduleRule();

        scheduleRule = scheduleRule.create(req.body);

        if (scheduleRule) {
            schedules = databaseConnection.openConnection();
            scheduleRule = scheduleRule.setId(scheduleRule, schedules);
            schedules.push(scheduleRule);
            databaseConnection.commitChanges(schedules);
            return res.json(scheduleRule);
        } else {
            return res.status(400).json({ error: 'All fields must to be set' });
        }
    }

    delete(req, res) {
        function checkEqual(s) {
            return s.id == id;
        }
        schedules = databaseConnection.openConnection();
        let id = parseInt(req.params.id);
        let element = schedules.findIndex(checkEqual);
        schedules.splice(element, 1);
        databaseConnection.commitChanges(schedules);
        return res.status(204).json();
    }
    
}

export default new ScheduleRuleController();