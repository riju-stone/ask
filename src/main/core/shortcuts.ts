import { globalShortcut } from "electron";
import { BrowserWindow } from "electron/main";

let MOVE_INTERVAL: NodeJS.Timeout | null = null;
let MOVE_TIMEOUT: NodeJS.Timeout | null = null;

function startMoving(dx: number, dy: number, mainWindow: BrowserWindow) {
	if (MOVE_INTERVAL) clearInterval(MOVE_INTERVAL);

	MOVE_INTERVAL = setInterval(() => {
		const [currentX, currentY] = mainWindow.getPosition();
		mainWindow.setPosition(currentX + dx, currentY + dy);
	}, 50);

	if (MOVE_TIMEOUT) clearTimeout(MOVE_TIMEOUT);
	MOVE_TIMEOUT = setTimeout(() => {
		if (MOVE_INTERVAL) clearInterval(MOVE_INTERVAL);
		MOVE_INTERVAL = null;
	}, 100);
}

export function registerShortcuts(mainWindow: BrowserWindow) {
	globalShortcut.register("CommandOrControl+Shift+L", () => {
		startMoving(10, 0, mainWindow);
	});

	globalShortcut.register("CommandOrControl+Shift+H", () => {
		// const [currentX, currentY] = mainWindow.getPosition();
		// mainWindow.setPosition(currentX - 10, currentY);
		startMoving(-10, 0, mainWindow);
	});

	globalShortcut.register("CommandOrControl+Shift+J", () => {
		// const [currentX, currentY] = mainWindow.getPosition();
		// mainWindow.setPosition(currentX, currentY + 10);
		startMoving(0, 10, mainWindow);
	});

	globalShortcut.register("CommandOrControl+Shift+K", () => {
		// const [currentX, currentY] = mainWindow.getPosition();
		// mainWindow.setPosition(currentX, currentY - 10);
		startMoving(0, -10, mainWindow);
	});

	globalShortcut.register("CommandOrControl+Shift+", () => {
		// const [currentX, currentY] = mainWindow.getPosition();
		// mainWindow.setPosition(currentX, currentY - 10);
		startMoving(0, -10, mainWindow);
	});
}
