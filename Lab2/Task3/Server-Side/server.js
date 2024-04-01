const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
var homeHTML = "";


//#region Reading Files
// HTML

var homeHTML = fs.readFile("../Client-Side/pages/home.html","utf-8",(err,data)=>{
    if(err){
        console.error("Error: "+err);
    }else{
        homeHTML = data;
    }
});
var profileHTML = fs.readFileSync("../Client-Side/pages/profile.html","utf-8");
//CSS
var Style = fs.readFileSync("../Client-Side/styles/style.css","utf-8");
//JS
var Script = fs.readFileSync("../Client-Side/scripts/script.js","utf-8");
var userScript = fs.readFileSync("../Client-Side/scripts/users.js","utf-8");
//json
var userJSON = fs.readFileSync("../Client-Side/json/clients.json");
//#endregion

http.createServer((req,res)=>{
    //#region GET
    if(req.method =="GET"){
        switch(req.url){
            case "/":
            case "/home.html":
            case "/pages/home.html":   
            case "/Client-Side/pages/home.html":
                res.setHeader("Content-Type","text/html");
                res.write(homeHTML);
            break;
            case "/style.css":
            case "/styles/style.css":
            case "/Client-Side/styles/style.css":
                res.setHeader("Content-Type","text/css");
                res.write(Style);
            break;
            case "/script.js":
            case "/scripts/script.js":
            case "/Client-Side/scripts/script.js":
                res.setHeader("Content-Type","text/javascript");
                res.write(Script);
            break;
            case "/users.js":
            case "/scripts/users.js":
            case "/Client-Side/scripts/users.js":
                res.setHeader("Content-Type","text/javascript");
                res.write(userScript);
            break;
            case "/clients.json":
            case "/json/clients.json":
            case "/Client-Side/json/clients.json":
                res.setHeader("Content-Type","application/json");
                res.write(userJSON);
            break;
            default:
                if(req.url.includes("profile.html")){
                    res.setHeader("Content-Type","text/html"); 
                    res.write(profileHTML);
                }else{
                    res.setHeader("Content-Type","text/html"); 
                    res.write("<h1>Invalid URL!</h1>");    
                }
            break;
        }
        res.end();
    }
    //#endregion 
    //#region POST
    else if(req.method == "POST"){

        let userData = '';
        req.on('data', (chunk) => {
            userData += chunk;
        });
    
        
        req.on('end',()=>{

            const formData = queryString.parse(userData);
    
            const { name, mobile, address, email } = formData;
    
            const newUser = {
                Name: name,
                Mobile: mobile,
                Address: address,
                Email: email
            };
    
            let data = [];
            try {
                const jsonData = fs.readFileSync('../Client-Side/json/clients.json');
                data = JSON.parse(jsonData);
            } catch (error) {
                console.error('Error reading JSON file:', error);
            }
            data.push(newUser);

            fs.writeFileSync('../Client-Side/json/clients.json', JSON.stringify(data, null, 2));
    
            console.log('Form data submitted successfully!');

            res.setHeader("Content-Type","text/html"); 
            let userHtml = profileHTML
                .replace("{userName}",name)
                .replace("{userMobile}",mobile)
                .replace("{userAddress}",address)
                .replace("{userEmail}",email);
            res.write(userHtml);
            res.end();
        });
    
        req.on('error',()=>{console.error("Error")});
        
        req.on('close',()=>{console.log("Closed")});

    } 
    //#endregion
    //#region PUT
    else if(req.method == "PUT"){

    }
    //#endregion
    //#region PATCH
    else if(req.method == "PATCH"){

    } 
    //#endregion
    //#region DELETE
    else if(req.method == "DELETE"){

    }
    //#endregion
    //#region Default
    else {
        req.end("Please Check Your Method [GET - POST - PUT - PATCH - DELETE]");
    }
    //#endregion
}).listen(7000,()=>{
    console.log("http://localhost:7000")
});