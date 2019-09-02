import request from 'supertest';
import app from '../src/app';
import databaseConnection from '../src/database/DatabaseAccess'
import DateUtil from '../src/app/utils/DateUtil';

describe('ScheduleRulesController', () => {
    
    it('should be able to get all schedule rules', async () => {
        let dateUtil = new DateUtil();
        let schedules = databaseConnection.openConnection();
        schedules = dateUtil.formatSchedulesDates(schedules);
        const response = await request(app)
            .get('/rules')
            .send();

        expect(response.body).toStrictEqual(schedules);
        expect(response.status).toEqual(200);
    });

    it('should be able to save one new schedule rules', async () => {
        const response = await request(app)
            .post('/rules')
            .send({
                ruleType: "DAILY",
                days: ["2019-08-20"],
                weekdays: [
                    "SEGUNDA-FEIRA",
                    "QUARTA-FEIRA"
                ],
                intervals: [
                    {
                        "start": "10:00",
                        "end": "11:00"
                    }
                ]
            });
        expect(response.body).toHaveProperty('id');
        expect(response.status).toEqual(200);
    });

    it('should be able to get all schedule rules between two dates', async () => {
        const response = await request(app)
            .post('/rules/availableHours')
            .send({
                startDate: "2019-08-25",
                endDate: "2019-08-31"
            });
        expect(response.status).toEqual(200);
    });

    it('should be able to delete one schedule rules', async () => {
        
        const response = await request(app)
            .delete('/rules/1')
            .send();

        expect(response.status).toEqual(200);
    });
});