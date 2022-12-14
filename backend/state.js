export const STATE = {
  _total: "0",
  _memoryTotal: "0",
  _overwrite: false,
  _postOperation: false,
  _valueOne: "0",
  _valueTwo: "0",
  _operation: null,
  _lastKey: null,
  // _lastKeyAnOperator: false, // Tracks if the last key pressed was an operator
  // _lastKeyEquals: false,
  _lastStoredValue: '0',
  _isPowered: true,
  _error: false,

  set total(val) {
    this._total = val.toString();
  },

  get total() {
    return this._total;
  },

  set memoryTotal(val) {
    this._setMemoryTotal = val.toString();
  },

  get memoryTotal() {
    return this._memoryTotal;
  },

  set overwrite(val) {
    this._overwrite = val;
  },

  get overwrite() {
    return this._overwrite;
  },

  set postOperation(val) {
    this._postOperation = val;
  },

  get postOperation() {
    return this._postOperation
  },

  set valueOne(val) {
    this._valueOne = val.toString();
  },

  get valueOne() {
    return this._valueOne;
  },

  set valueTwo(val) {
    this._valueTwo = val.toString();
  },

  get valueTwo() {
    return this._valueTwo;
  },

  set operation(val) {
    this._operation = val;
  },

  get operation() {
    return this._operation;
  },

  set lastKey(val) {
    this._lastKey = val;
  },

  get lastKey() {
    return this._lastKey;
  },

  set isPowered(val) {
    this._isPowered = val;
  },

  get isPowered() {
    return this._isPowered;
  },
}
