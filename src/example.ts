function concat(arg1: string, arg2: string) {
  return arg1 + arg2
}

concat('Hello ', 'World')

interface tsObj {
  howIDoIt: string
  someArray: any
  withData: object
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myHomeTask: tsObj = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [
    {
      howIDoIt: 'I Do It Wel',
      someArray: ['string one', 23],
    },
  ],
}

interface MyArray<T> {
  [N: number]: T
  reduce(fn: (result: T, el: T) => T): T[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray: MyArray<number> = [1, 3, 5]

// TS2322: Type 'number[]' is not assignable to type 'MyArray<any>'.
// The types returned by 'reduce(...)' are incompatible between these types.
// Type 'number' is not assignable to type 'any[]'.
