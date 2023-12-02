const { compile } = require("ejs");

function download(url)
{
      return new Promise(function exec(resolve,reject){
        setTimeout(function down(){

          console.log("stateting the downloding.....with url",url);
          let content = "akbjshcdgugchjdb";
          resolve(content);
        },2000)
        

      });

}
function writeFile(content)
{
      return new Promise(function exec(resolve,reject){
      setTimeout(function down(){

          console.log("stateting the writing data in");
          let FileNname = "file.txt";
          resolve(FileNname);
        },2000);
        

      });

}
function upload(fileName,url)
{
      return new Promise(function exec(resolve,reject){
      setTimeout(function down(){

          console.log("stateting uploading the file data in url",url);
          let msg = "Success";
          resolve(msg);
        },2000);
        

      });

}
function promiseTobeResolve(value){
   let furture = itr.next(value);
   if(furture.done) return;
    furture.value.then(promiseTobeResolve);

}

function* step()
{
     const downloaddata  = yield download("www.google.com");
     console.log("The First Promise is return...");
     const fileName  =  yield writeFile(downloaddata);
     console.log("The second promise is consumed...");
     const uplaodstatus  = yield upload(fileName,"www.googleDrive.com");
     console.log("The third promise was return....")

}

let itr = step();
console.log("The starting.....")
const obj =  itr.next();
obj.value.then(promiseTobeResolve);
