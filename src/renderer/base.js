


const ipcRenderer = require("electron").ipcRenderer;
// 读取文件
export let _readFile = ()=> {
    return new Promise((resolve, reject) => {
        ipcRenderer.send("readFile", JSON.stringify("data"));
        ipcRenderer.on("readFile", function(event, arg) {
            if (arg) {
                resolve(JSON.parse(arg));
            }
        });
        // 这里的会传递回给主进程
    });
}

// 写入文件
export let _writeFile = (data)=> {
    return new Promise((resolve,reject)=>{
         ipcRenderer.send("writeFile", JSON.stringify("data"));
         resolve("写入成功");
    })
   
}



