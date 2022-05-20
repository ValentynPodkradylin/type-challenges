import { Expect, Equal } from "@type-challenges/utils";

type GetOption<T> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type cases = [
  Expect<
    Equal<GetOption<{ foo: number; bar?: undefined }>, { bar?: undefined }>
  >
];

export {};
