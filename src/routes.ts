import { Router } from 'express';
import ScheduleRuleController from './app/controllers/ScheduleRulesController';
import ValidateScheduleRule from './app/middlewares/ValidateScheduleRule';
import ValidadeScheduleExists from './app/middlewares/ValidadeScheduleRuleExists';
import ValidateInterval from './app/middlewares/ValidateInterval';
import ValidateDates from './app/middlewares/ValidadeDates'

const routes = Router();

/**
 * @api {get} /rules List all schedule rules
 * @apiGroup Schedule Rules
 * @apiSuccess {ScheduleRule[]} scheduleRule Schedule Rules list
 * @apiSuccess {number} tasks.id id
 * @apiSuccess {string} tasks.ruleType type [SPECIFIC_DATE, DAILY, WEEKLY]
 * @apiSuccess {String[]} tasks.weekdays weekdays
 * @apiSuccess {Interval[]} tasks.interval intervals
 * @apiSuccess {string} tasks.interval.start interval start
 * @apiSuccess {string} tasks.interval.end interval end
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "ruleType": "DAILY",
 *      "days": ["2019-08-20"],
 *      "weekdays": [
 *          "SEGUNDA-FEIRA",
 *          "QUARTA-FEIRA"
 *      ],
 *      "intervals": [
 *          {
 *              "start": "08:00",
 *              "end": "09:00"
 *          }
 *      ]       
 *   }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
routes.get('/rules', ScheduleRuleController.findAll);


/**
 * @api {post} /rules/availableHours List all schedule rules between the start and end dates
 * @apiGroup Schedule Rules 
 * @apiSuccess {string} startDate start date
 * @apiSuccess {string} endDate end date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *       "start": "08:00",
 *       "end": "09:00"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
routes.post('/rules/availableHours', ValidateDates, ScheduleRuleController.findFilterDates);


/**
 * @api {post} /rules Save one schedule rule
 * @apiGroup Schedule Rules
 * @paramExample {json} Input
 *    {
 *      "id": 1,
 *      "ruleType": "DAILY",
 *      "days": ["2019-08-20"],
 *      "weekdays": [
 *          "SEGUNDA-FEIRA",
 *          "QUARTA-FEIRA"
 *      ],
 *      "intervals": [
 *          {
 *              "start": "08:00",
 *              "end": "09:00"
 *          }
 *      ]       
 *   }
 * @apiSuccess {ScheduleRule[]} scheduleRule Schedule Rules list
 * @apiSuccess {number} tasks.id id
 * @apiSuccess {string} tasks.ruleType type [SPECIFIC_DATE, DAILY, WEEKLY]
 * @apiSuccess {String[]} tasks.weekdays weekdays
 * @apiSuccess {Interval[]} tasks.interval intervals
 * @apiSuccess {string} tasks.interval.start interval start
 * @apiSuccess {string} tasks.interval.end interval end
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "ruleType": "DAILY",
 *      "days": ["2019-08-20"],
 *      "weekdays": [
 *          "SEGUNDA-FEIRA",
 *          "QUARTA-FEIRA"
 *      ],
 *      "intervals": [
 *          {
 *              "start": "08:00",
 *              "end": "09:00"
 *          }
 *      ]       
 *   }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 *    [{
 *      "error": "Interval already in use in this day"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 400 Internal Server Error
 *    [{
 *      "error": "Rule type not found"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 400 Internal Server Error
 *    [{
 *      "error": "Day not found"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 400 Internal Server Error
 *    [{
 *      "error": "Weekday not found"
 *    }]
 ** @apiErrorExample {json} List error
 *    HTTP/1.1 400 Internal Server Error
 *    [{
 *      "error": "Interval not found"
 *    }] 
 */
routes.post('/rules', ValidateScheduleRule, ValidateInterval, ScheduleRuleController.save);

/**
 * @api {delete} /rules/:id Remove a schedule rule
 * @apiGroup Schedule Rules
 * @apiParam {id} id Schedule Rule id to delete
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 400 Not found
 *    [{ 
 *      "error": "Schedule rule not found" 
 *    }]
 */
routes.delete('/rules/:id', ValidadeScheduleExists, ScheduleRuleController.delete);

export default routes;