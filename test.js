const fetch = require("node-fetch");
var fs = require("fs");
fs.readFile("links.txt","utf-8",(err,dataLink)=>{
    console.log(dataLink);
    arrayLink = dataLink.split(",");
    console.log(arrayLink);
    arrayLink.forEach(value => {    
        fetch("https://" + value).then((resp) => resp.text()).then(function(data1) {
            fs.writeFile("./Data/" + value.split(".")[0] + ".html", data1,function (err) {
                if (err) throw err;
                console.log("The file was succesfully saved!");
            }); 
        });
    });
});


