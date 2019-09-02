import databaseConnection from '../../database/DatabaseAccess';

export default (req, res, next) => {

    let schedules = databaseConnection.openConnection();
    let id = parseInt(req.params.id);

    for (let s of schedules) {
        if (s.id == id) {
            return next();
        }
    }

    return res.status(400).json({ error: 'Schedule rule not found' });
}