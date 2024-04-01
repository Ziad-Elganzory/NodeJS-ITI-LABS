const eventEmmitter = require("events");

var event = new eventEmmitter();

let uName = 'Ziad';

let pass = '1234';

event.on('login',(username,password)=>{
    username = 'ziad';
    password = '1234';
    if(username == uName && password == pass){
        console.log("Login Succeeded");
    }else {
        console.log("Login Failed!");
    }

});

event.emit('login');