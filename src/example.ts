function concat(arg1: string, arg2: string) {
  return arg1 + arg2
}

concat('Hello ', 'World')

interface tsObj {
  howIDoIt: string
  someArray: (string | number)[]
  withData?: tsObj[]
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
  reduce<U>(fn: (acc: U, el: T) => U, init: U): U
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray: MyArray<number> = [1, 3, 5]
