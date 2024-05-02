const { app, BrowserWindow,Tray,Menu } = require('electron');
require('./server/index');
let appIcon = null;
const createWindow = () => {
    const win = new BrowserWindow({
        show: false,
    });

    win.loadURL('http://localhost:9000');
};

app.whenReady().then(() => {
    createWindow();
    appIcon = new Tray('./icons/favicon.png');
    const contextMenu = Menu.buildFromTemplate([{
        label: 'Close',
        click: () => {
            app.quit();
        }
    }]);

    appIcon.setToolTip('Electron Node Demo in the tray.');
    appIcon.setContextMenu(contextMenu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});


app.on('window-all-closed', () => {
    if (appIcon) appIcon.destroy();
    if (process.platform !== 'darwin') app.quit();
});