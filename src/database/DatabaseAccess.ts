import fs from 'fs';

const database = './database.json';

let rawData;

class DatabaseAccess {

    openConnection() {
        rawData = fs.readFileSync(database);
        return JSON.parse(rawData.toString());
    }

    commitChanges(schedules) {
        rawData = JSON.stringify(schedules, null, 4);
        fs.writeFile(database, rawData, finished);

        function finished(err) {
            return schedules;
        }
    }
    
}

export default new DatabaseAccess();