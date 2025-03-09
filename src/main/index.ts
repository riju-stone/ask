import { app, BrowserWindow, globalShortcut } from "electron";
import path from "path";
import { getEnv } from "./utils.js";
import { registerShortcuts } from "./core/shortcuts.js";

function createWindow() {
	const env = getEnv();
	console.log(env);

	const mainWindow = new BrowserWindow({
		height: 600,
		width: 800,
		frame: false,
		transparent: env == "dev" ? false : true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
		alwaysOnTop: env == "dev" ? false : true,
		paintWhenInitiallyHidden: true,
		type: "toolbar",
	});

	mainWindow.setContentProtection(true);
	mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
	mainWindow.setAlwaysOnTop(true, "screen-saver", 1);

	registerShortcuts(mainWindow);

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
