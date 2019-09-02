import { Router } from 'express';
import ScheduleRule from './app/models/ScheduleRule';
import ScheduleRuleController from './app/controllers/ScheduleRulesController';
import ValidateScheduleRule from './app/middlewares/ValidateScheduleRule';
import ValidadeScheduleExists from './app/middlewares/ValidadeScheduleRuleExists';
import ValidateInterval from './app/middlewares/ValidateInterval';
import ValidateDates from './app/middlewares/ValidadeDates'

const routes = Router();

routes.get('/rules', ScheduleRuleController.findAll);

routes.post('/rules/availableHours', ValidateDates, ScheduleRuleController.findFilterDates);

routes.post('/rules', ValidateScheduleRule, ValidateInterval, ScheduleRuleController.save);

routes.delete('/rules/:id', ValidadeScheduleExists, ScheduleRuleController.delete);

export default routes;