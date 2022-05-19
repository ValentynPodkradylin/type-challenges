# Мои попытки разобраться в Typescript(Advanced Topic)

## Advanced types

#### Проверка на string literal types

`type IsStringLiteral<S> = S extends string ? true : false`

`type result = IsStringLiteral<'123'> // true`

`type result = IsStringLiteral<string> // true`
