export default (req, res, next) => {
    let startDate = new Date(req.body.startDate);
    let endDate = new Date(req.body.endDate);

    if (startDate.getTime() > endDate.getTime()) {
        return res.status(400).json({ error: "Start date greater then end date"})
    }

    return next();
}