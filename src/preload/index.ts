import { contextBridge, ipcRenderer } from "electron";

const ipcAPI = {
    exampleFunc: (ping: boolean) => ipcRenderer.send("example-func", ping),
};

contextBridge.exposeInMainWorld("electronAPI", { ...ipcAPI });
