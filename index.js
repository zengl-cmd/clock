setInterval(() => {
    let timeCompleate = new Date();
    let hour = timeCompleate.getHours();
    let min = timeCompleate.getMinutes();
    let sec = timeCompleate.getSeconds();
    let amPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    let time = `${hour}:${min}:${sec} ${amPm}`;
    let day = timeCompleate.getDate();
    let month = timeCompleate.getMonth() + 1;
    let year = timeCompleate.getFullYear();
    document.getElementById('date').innerHTML = `${month}/${day}/${year}`;
    document.getElementById('time').innerHTML = `${time}`;
}, 1)