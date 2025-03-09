import { contextBridge, ipcRenderer } from "electron";

const api = {
  exampleFunc: (ping: boolean) => ipcRenderer.send("example-func", ping),
};

contextBridge.exposeInMainWorld("electronAPI", { ...api });
