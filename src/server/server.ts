import express = require('express');
import path = require('path');
require('./config/config');

export default class Server {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  static init(port: number) {
    return new Server(port);
  }

  private publicFolder() {
    const publicPath = path.resolve(__dirname, '../public');
    this.app.use(express.static(publicPath));
  }

  start(callback: Function) {
    this.app.listen(this.port, callback());
    this.publicFolder();
  }
}
