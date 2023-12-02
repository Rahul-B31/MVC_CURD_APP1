// Download the content from the url

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


// 1

download("www.google.com")
.then(function processDownload(value){

    console.log("The Download Content is ",value);
    return writeFile(value)
})
.then(function processFile(value){

    console.log("The Content in the is write successfully",value);
    return upload(value,"xyz.com");
    

})
.then( function uploadProcess(value){
    console.log("The uplaod status of the file is ",value)

})