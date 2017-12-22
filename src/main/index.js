'use strict'

import { app, BrowserWindow, Menu } from 'electron'

const template = [
  {
    label: 'Filter',
    submenu: [
      {
        label: 'Hello',
        accelerator: 'Shift+CmdOrCtrl+H',
        click () {
          console.log('Oh, hi there!')
        }
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(template)

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
