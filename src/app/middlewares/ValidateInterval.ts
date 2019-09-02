import databaseConnection from "../../database/databaseAccess"

export default (req, res, next) => {

    let schedules = databaseConnection.openConnection();

    schedules.map(s => {
        if (s.id === req.params.id) {
            
            //return next();
        }
        return next();
    });

    return res.send(400).json({error: 'Schedule rule not found'});

}