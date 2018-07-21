import Node from './Node';

export default class extends Node {
  render() {
    return `<${this.name}>${this.body}</${this.name}`;
  }
}