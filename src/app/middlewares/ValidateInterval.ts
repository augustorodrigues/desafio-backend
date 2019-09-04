import databaseConnection from "../../database/DatabaseAccess"

export default (req, res, next) => {

    let schedules = databaseConnection.openConnection();
    let days = req.body.days;
    let intervals = req.body.intervals;

    for (let d of days) {
        d = new Date(d);
        d = d.getTime();
        for (let s of schedules) {
            for (let e of s.days) {
                e = new Date(e);
                e = e.getTime();
                if (d === e) {
                    for (let i of intervals) {
                        for (let ss of s.intervals) {
                            if (ss.start === i.start && ss.end === i.end) {
                                return res.status(400).json({error: 'Interval already in use in this day'});
                            }
                        }
                    }
                }

            }
        }
    }

    return next();
}