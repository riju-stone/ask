import { app, BrowserWindow, globalShortcut } from "electron";
import path from "path";
import { getEnv } from "./utils.js";
import { registerShortcuts } from "../core/shortcuts.js";
const env = getEnv();

function createWindow() {
    console.log(env);
    const mainWindow = new BrowserWindow({
        title: "Ask",
        height: 600,
        width: 800,
        frame: false,
        resizable: false,
        transparent: true,
        minimizable: false,
        maximizable: false,
        fullscreenable: false,
        hasShadow: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        alwaysOnTop: true,
        paintWhenInitiallyHidden: true,
        type: "toolbar",
    });

    mainWindow.setContentProtection(true);
    mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    mainWindow.setAlwaysOnTop(true, "screen-saver", 1);

    if (process.platform === "darwin") {
        mainWindow.setVibrancy(null);
    }

    registerShortcuts(mainWindow);
    console.log(env)
    if (env == "dev") {
        mainWindow.loadURL("http://localhost:5173");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-ui/index.html"));
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    globalShortcut.unregisterAll();
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
