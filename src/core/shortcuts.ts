import { globalShortcut } from "electron";
import { BrowserWindow } from "electron/main";

export function registerShortcuts(mainWindow: BrowserWindow) {
	globalShortcut.register("CommandOrControl+Shift+Right", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX + 10, currentY);
	});

	globalShortcut.register("CommandOrControl+Shift+Left", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX - 10, currentY);
	});

	globalShortcut.register("CommandOrControl+Shift+Down", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX, currentY + 10);
	});

	globalShortcut.register("CommandOrControl+Shift+Up", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX, currentY - 10);
	});

	globalShortcut.register("CommandOrControl+Shift+H", () => {
		mainWindow.hide();
	});

	globalShortcut.register("CommandOrControl+Shift+S", () => {
		mainWindow.show();
	});
}
