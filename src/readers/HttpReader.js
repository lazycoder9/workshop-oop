import axios from '../lib/axios';

export default class {
  constructor(url, data = null) {
    this.url = url;
  }

  async read() {
    const data = await axios.get(this.url);
    return data.data;
  }
}