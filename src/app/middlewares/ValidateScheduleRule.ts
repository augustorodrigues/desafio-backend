export default (req, res, next) => {
    if(!req.body.ruleType) {
        return res.status(400).json({ error: 'Rule type not found' });
    }
    if(!req.body.days) {
        return res.status(400).json({ error: 'Day not found' });
    }
    if(!req.body.weekdays) {
        return res.status(400).json({ error: 'Weekday not found' });
    }
    if(!req.body.intervals) {
        return res.status(400).json({ error: 'Interval not found' });
    }
    return next();
}