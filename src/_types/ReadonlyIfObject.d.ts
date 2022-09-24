export type ReadonlyIfObject<Value> = Value extends undefined
  ? Value
  : Value extends (...args: any) => any
  ? Value
  : Value extends object
  ? Readonly<Value>
  : Value
