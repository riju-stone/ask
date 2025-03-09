import { app, BrowserWindow } from "electron";
import path from "path";
import { getEnv } from "./utils.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  const env = getEnv();
  console.log(env);

  if (env == "dev") {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-ui/index.html"));
  }
});
