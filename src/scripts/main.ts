const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const { exec } = require('child_process');

class App {
    constructor() {
        app.whenReady().then(() => {
            const win = this.init();
            win.maximize();
        });
    }

    init(): Electron.CrossProcessExports.BrowserWindow {
        const win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
                webSecurity: false,
            },
        });
        // win.loadURL('http://localhost:7000/');
        app.commandLine.appendSwitch('disable-web-security');
        if(app.isPackaged) {
            win.loadFile('./src/dist/index.html');
        } else {
            win.loadURL("http://localhost:7005");
        }

        return win;
    }
}

new App();
