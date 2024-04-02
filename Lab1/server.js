const http = require('http');
const fs = require('fs');

http.
    createServer((req,res)=>{ 

        if(req.url != '/favicon.ico'){
            res.setHeader("Content-Type",'text/html');
            const url = req.url;
            const data = url.split('/');
            let sum = 0;
            let sub = 0;
            let mult = 0;
            let div = 0;
            
            // Add
            if(data[1] == 'add'){
                sum = Number(data[2])
                for(let i = 3 ; i< data.length; i++){
                    sum+=Number(data[i]);
                }
                res.write(`<h1>Addition: ${sum}</h1>`);
                fs.writeFile('sum.txt', 'Sum: '+sum, (err) => {
                    if (err) {
                      console.error('An error occurred:', err);
                    }
                    console.log('Addition is stored in sum.txt file successfully.');
                  });
            }

            // Subtract
            if(data[1] == 'sub'){
                sub = Number(data[2]);
                for(let i = 3 ; i< data.length; i++){
                    sub-=Number(data[i]);
                }
                res.write(`<h1>Subtraction: ${sub}</h1>`);
                fs.writeFile('sub.txt', 'Subtraction: '+sub, (err) => {
                    if (err) {
                      console.error('An error occurred:', err);
                    }
                    console.log('Subtraction is stored in sub.txt file successfully.');
                  });
            }

            // Multiply
            if(data[1] == 'mult'){
                mult=Number(data[2])
                for(let i = 3 ; i< data.length; i++){
                    mult*=Number(data[i]);
                }
                res.write(`<h1>Multiplication: ${mult}</h1>`);
                fs.writeFile('mult.txt', 'Multiplication: '+mult, (err) => {
                    if (err) {
                      console.error('An error occurred:', err);
                    }
                    console.log('Multiplication is stored in mult.txt file successfully.');
                  });
            }

            // Divide
            if(data[1] == 'div'){
                div = Number(data[2]);
                for(let i = 3 ; i< data.length; i++){
                    div/=Number(data[i]);
                }
                res.write(`<h1>Division: ${div}</h1>`);
                fs.writeFile('div.txt', 'Division: '+div, (err) => {
                    if (err) {
                      console.error('An error occurred:', err);
                    }
                    console.log('Division is stored in div.txt file successfully.');
                  });
            }
        }
        res.end();
    })
    .listen(7000,()=>{
      console.log('http://localhost:7000');
    });