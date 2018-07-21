import fs from 'fs';
const fsPromises = fs.promises;

export default class {
  constructor(path, data = null) {
    this.path = path;
  }

  async read() {
    const data = await fsPromises.readFile(this.path, 'utf-8');
    return data;
  }
}
