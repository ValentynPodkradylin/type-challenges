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
