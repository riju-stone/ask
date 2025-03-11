import { globalShortcut } from "electron";
import { BrowserWindow } from "electron/main";

export function registerShortcuts(mainWindow: BrowserWindow) {
	globalShortcut.register("CommandOrControl+Shift+L", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX + 10, currentY);
	});

	globalShortcut.register("CommandOrControl+Shift+H", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX - 10, currentY);
	});

	globalShortcut.register("CommandOrControl+Shift+J", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX, currentY + 10);
	});

	globalShortcut.register("CommandOrControl+Shift+K", () => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX, currentY - 10);
	});

	globalShortcut.register("CommandOrControl+Shift+V", () => {
		mainWindow.hide();
	});

	globalShortcut.register("CommandOrControl+Shift+B", () => {
		mainWindow.show();
	});
}
