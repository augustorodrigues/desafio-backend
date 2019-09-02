import ScheduleRule from '../models/ScheduleRule';
import fs from 'fs';
import databaseConnection from '../../database/DatabaseAccess';
import Interval from '../models/Interval';
import AvailableHours from '../models/AvailableHours';

let schedules;

class ScheduleRuleController {

    findAll(req, res) {
        schedules = databaseConnection.openConnection();
        return res.json(schedules);
    }

    findOne(req, res) {
        //rawData = fs.readFileSync(database);
        //schedules = JSON.parse(rawData.toString());

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

    save(req, res) {
        let scheduleRule = new ScheduleRule();

        scheduleRule = scheduleRule.create(req.body);

        if (scheduleRule) {
            schedules = databaseConnection.openConnection();
            scheduleRule = scheduleRule.setId(scheduleRule, schedules);
            schedules.push(scheduleRule);
            databaseConnection.commitChanges(schedules);
            return res.json(schedules);
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
        return res.status(200).json();
    }
    
}

export default new ScheduleRuleController();