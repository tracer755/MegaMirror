let notifwrapperid = "NotificationWrapper";
var wrapper = document.getElementById(notifwrapperid);
var notiftime = 5;
var notifactive = false;

var msgqueue = [];

function testnotif(){
    notificationAlert('test');
    notificationAlert('New pc part');
    notificationAlert('Joe Bidome');
    notificationAlert(`Homebrew wii's are cool`);
    notificationAlert('russia has now commited multiple warcrimes');
    notificationAlert('New Email');
}

function notificationAlert(msg){
    if(notifactive){
        msgqueue.push(msg);
        return;
    }
    notifactive = true;
    var wrapper = document.getElementById(notifwrapperid);

    wrapper.querySelector("#notifmsg").innerHTML = msg;

    notificationshow();
}


function notificationshow(){
    var wrapper = document.getElementById(notifwrapperid);
    wrapper.classList.add('notifboxdown');
    wrapper.classList.remove('notifboxup');

    setTimeout(() => { notificationhide(); }, (notiftime * 1000) + 1000);
}

function notificationhide(){
    var wrapper = document.getElementById(notifwrapperid);
    wrapper.classList.add('notifboxup');
    wrapper.classList.remove('notifboxdown');
    
    setTimeout(() => { wrapper.querySelector("#notifmsg").innerHTML = 'null'; notifactive = false; checkqueue();}, 2000);
}

function checkqueue(){
if(msgqueue.length != 0){
    var i = msgqueue.shift();
    notificationAlert(i);
}
}