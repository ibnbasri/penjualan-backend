/* eslint-disable import/prefer-default-export */
export class Identifier<T> {
  constructor(private value: T) {
    this.value = value;
  }

  equals(id?: Identifier<T>): Boolean {
    if (id === null || id === undefined) return false;
    if (!(id instanceof this.constructor)) return false;
    return id.toValue() === this.value;
  }

  toString() {
    return String(this.value);
  }

  toValue(): T {
    return this.value;
  }
}
