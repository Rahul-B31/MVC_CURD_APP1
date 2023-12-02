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
// Creating async function that will execute the asynchornusly
async function* step()
{
     const downloaddata  = await download("www.google.com");
     console.log("The First Promise is return...");
     const fileName  =  await writeFile(downloaddata);
     console.log("The second promise is consumed...");
     const uplaodstatus  = await upload(fileName,"www.googleDrive.com");
     console.log("The third promise was return....")

}

let itr = step();
console.log("The starting.....")
const obj =  itr.next();
