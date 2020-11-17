var d = new Date();
document.getElementById("date").innerHTML = d;

function time() {
    let date = new Date();
    date.setHours(20);
    date.setMinutes(0);
    let day = date.getDate();
    date.setSeconds(0)
    date.setMilliseconds(0); // set happy hour for the day
    let interval = date - Date.now(); //calculate ms between current time and happy hour time

    //case when happy hour is later than current date, on the same day

    if (interval > 0) {
        const hour = Math.floor(interval / 3600000);
        interval -= 3600000 * Math.floor(interval / 3600000);
        const minutes = Math.floor(interval / 60000)
        interval -= 60000 * Math.floor(interval / 60000);
        const seconds = Math.floor(interval / 1000);
        document.getElementById("sentence").innerHTML = ("Happy hour starts in " + hour + ":" + minutes + ":" + seconds);
    } else if (interval < -3600000) { //happy hour gone, time left until it starts tomorrow
        date.setDate(++day);
        console.log(date);
        interval = date - Date.now();
        const hour = Math.floor(interval / 3600000);
        interval -= 3600000 * Math.floor(interval / 3600000);
        const minutes = Math.floor(interval / 60000);
        interval -= 60000 * Math.floor(interval / 60000);
        const seconds = Math.floor(interval / 1000)
        document.getElementById("sentence").innerHTML = ("Happy hour starts in " + hour + ":" + minutes + ":" + seconds);
    } else { //happy hour started, but didn't finish yet
        date.setHours(21);
        interval = date - Date.now();
        const hour = Math.floor(interval / 3600000);
        interval -= 3600000 * Math.floor(interval / 3600000);
        const minutes = Math.floor(interval / 60000)
        interval -= 60000 * Math.floor(interval / 60000);
        const seconds = Math.floor(interval / 1000);
        document.getElementById("sentence").innerHTML = ("Happy hour finished in " + hour + ":" + minutes + ":" + seconds);
    }
}

function validateForm(){
    const name = document.forms["addProductm"]["ID"].value;
    const description = document.forms["addProduct"]["Description"].value;
    const type = document.forms["addProduct"]["answer"].value;
    const quality = document.forms["addProduct"]["quality"].value;
    const value = document.forms["addProduct"]["value"].value;


    if(name == ""){
        alert("Please enter product ID.");
        return false;
    }

    if(description == ""){
        alert("Please enter product description.");
        return false;
    }

    if( (answer != news) || (answer != used)){
        alert("Please enter type of product.");
        return false;
    
    }

    if(quality == "Y"){
        alert("Please enter product quality.");
        return false;
    }

    if(value == ""){
        alert("Please enter product value.");
        return false;
    }


}


