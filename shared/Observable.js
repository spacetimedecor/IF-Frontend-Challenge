export default class Observable {
  _value = null;
  observers = [];

  constructor(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  notify = () => {
    this.observers.forEach((observer) => {
      observer(this._value);
    });
  };

  subscribe = (func) => {
    this.observers.push(func);
    this.notify();
  };
}
