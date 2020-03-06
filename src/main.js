const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', ()=>{
    console.log('ready')
    new BrowserWindow({
        height: 400,
        width: 400
    })
})