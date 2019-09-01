import ScheduleRule from '../models/ScheduleRule';
import fs from 'fs';
import databaseConnection from '../../database/DatabaseAccess';

let schedules;

class ScheduleRuleController {

    findAll(req, res) {
        schedules = databaseConnection.openConnection();
        console.log(schedules.length);
        return res.json(schedules);
    }

    findOne(req, res) {
        //rawData = fs.readFileSync(database);
        //schedules = JSON.parse(rawData.toString());

    }

    save(req, res) {
        let scheduleRule = new ScheduleRule();
        let id = 0;

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

    findFilterDates() {

    }

    delete() {

    }

    
}

export default new ScheduleRuleController();