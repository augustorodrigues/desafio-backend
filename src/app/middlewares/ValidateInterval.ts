import databaseConnection from "../../database/databaseAccess"

export default (req, res, next) => {

    let schedules = databaseConnection.openConnection();
    let days = req.body.days;
    let intervals = req.body.intervals;

    days.map(d => {
        d = new Date(d);
        d = d.getTime();
        schedules.map(s => {
            s.days.map(e => {
                e = new Date(e);
                e = e.getTime();
                if (d === e) {
                    intervals.map(i => {
                        s.intervals.map(ss => {
                            if (ss.start === i.start && ss.end === i.end) {
                                return res.status(400).json({error: 'Interval already in use in this day'});
                            }
                        });
                    });
                }
            });
        });
    });

    return next();
}