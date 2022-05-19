# Мои попытки разобраться в Typescript(Advanced Topic)

## Advanced types

#### Проверка на string literal types

`typescript type IsStringLiteral<S> = S extends string ? true : false`

`javascript type result = IsStringLiteral<'123'> // true`
`type result = IsStringLiteral<string> // true`
