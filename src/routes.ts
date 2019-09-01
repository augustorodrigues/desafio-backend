import { Router } from 'express';
import ScheduleRule from './app/models/ScheduleRule';
import ScheduleRuleController from './app/controllers/ScheduleRulesController';
import validateScheduleRule from './app/middlewares/ValidateScheduleRule';
import validadeScheduleExists from './app/middlewares/ValidadeScheduleRuleExists';

const routes = Router();
const database = 'C:/cubos/desafio-backend/src/database/database.json';

// findAll
routes.get('/rules', ScheduleRuleController.findAll);

// filterDates
routes.get('rules/:startDate/:endDate', ScheduleRuleController.findFilterDates);

// save
routes.post('/rules', validateScheduleRule, ScheduleRuleController.save);

// delete
routes.delete('/rules/:id', validadeScheduleExists, ScheduleRuleController.delete);

export default routes;