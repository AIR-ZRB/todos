import { app, BrowserWindow, Menu, ipcMain } from 'electron'


const fs = require("fs");
const path = require("path");

// ipcMain.on('asynchronous-message', function(event, arg) {
//   console.log(arg);
//   // 这里是传给渲染进程的数据
//   fs.readFile(path.join(__dirname,"../renderer/data/data.json"),"utf8",(err,data)=>{
//     event.sender.send('asynchronous-reply', data);
//   })
// });



ipcMain.on('readFile', function (event, arg) {
  console.log(arg);
  // 这里是传给渲染进程的数据
  fs.readFile(path.join(__dirname, "../renderer/data/data.json"), "utf8", (err, data) => {
    event.sender.send('readFile', data);
  })
});




/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */

  Menu.setApplicationMenu(null)   // 去除菜单栏
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1500,
    transparent: true
    // frame: false     // 去除标题栏

  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null;
  
  })




}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
