import app from './app';

const port = 3000;

app.listen(port, err =>{
    if(err) {
        return console.error(err);
    }
    return console.log(`server running on port ${port}`);
});