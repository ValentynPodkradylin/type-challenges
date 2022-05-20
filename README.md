# Мои попытки разобраться в Typescript(Advanced Topic)

## Advanced types

#### Проверка на string literal types

`type IsStringLiteral<S> = S extends string ? true : false`

`type s1 = IsStringLiteral<'123'> // true`

`type s2 = IsStringLiteral<string> // true`

Но так как `string` является строкой, а не строковым литералом то нам приходить добавлять проверку именно на строковый литерал

`type IsStringLiteral<S> = S extends string ? string extends S ? false: true : false`

`type s1 = IsStringLiteral<'123'> // true`

`type s2 = IsStringLiteral<string> // false`

> `type IsNumber<S> = S extends number ? number extends S ? false: true : false`

#### Пункт выше являеться одним из примеров _Проверки равенства типов_

`type Equals<T, U> = [T] extends [U] ? [U] extends [T] : true : false`

`Equals<never, never> //true`

#### Conditional types [docs](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

`T extends number`

### Spread

Спредить нужно массив, ну как в js

`type Spread<T> = [...[T]]`

### Recursive Conditional Types [Crazy, Powerful TypeScript 4.1 Features](https://instil.co/blog/crazy-powerful-typescript-41/#:~:text=Recursive%20Conditional%20Types%20are%20exactly,Conditional%20Types%20that%20reference%20themselves.&text=Let's%20break%20down%20what's%20happening%20in%20this%20example.&text=We%20can%20think%20of%20this,the%20parameters%20of%20the%20function.)

`type BuildTuple<Current extends [...T[]], T, Count extends number> = Current["length"] extends Count ? Current : BuildTuple<[T, ...Current], T, Count>`

`type Tuple<T, Count extends number> = BuildTuple<[], T, Count>`

`type StringQuintuple = Tuple<string, 5> // [string, string, string, string, string]`

### Distributed conditional types [stackoverflow describe](https://stackoverflow.com/questions/55382306/typescript-distributive-conditional-types)

_Помогают итерироваться по елементам юнион типа_

`type UnionIteration<T> = T extends unknown ? [T] : never`

`UnionIteration<never> //never`

`UnionIteration<1> // [1]`

`UnionIteration<1 | 2> // [1] | [2]`

### Key remapping in Mapped Types (as)

`type GetOption<T> = [K in typeof T as {} extends Pick<T, K> ? K : never] : T[K]`
