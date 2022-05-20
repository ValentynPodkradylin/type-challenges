import type { Equal, Expect } from "@type-challenges/utils";

type AddDigitMapping = {
  "0": [];
  "1": [0];
  "2": [0, 0];
  "3": [0, 0, 0];
  "4": [0, 0, 0, 0];
  "5": [0, 0, 0, 0, 0];
  "6": [0, 0, 0, 0, 0, 0];
  "7": [0, 0, 0, 0, 0, 0, 0];
  "8": [0, 0, 0, 0, 0, 0, 0, 0];
  "9": [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

type Digit = keyof AddDigitMapping;

type Multiply10<T extends readonly any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type Add<D1 extends readonly any[], D2 extends Digit> = [
  ...D1,
  ...AddDigitMapping[D2]
];

type ToNumber<
  S extends string,
  T extends readonly any[] = []
> = S extends `${infer Head}${infer Tail}`
  ? ToNumber<Tail, Add<Multiply10<T>, Head & Digit>>
  : T["length"];

type cases = [
  // ---
  Expect<Equal<AddDigitMapping["9"]["length"], 9>>,
  Expect<Equal<AddDigitMapping["0"]["length"], 0>>,
  // ---
  Expect<Equal<Multiply10<AddDigitMapping[7]>["length"], 70>>,
  Expect<Equal<Multiply10<AddDigitMapping[6]>["length"], 60>>,
  // ---
  Expect<Equal<ToNumber<"0">, 0>>,
  Expect<Equal<ToNumber<"5">, 5>>,
  Expect<Equal<ToNumber<"12">, 12>>,
  Expect<Equal<ToNumber<"27">, 27>>
];

export type { ToNumber };

/* 
    '125' -> ['1', '2', '5']
    ('1' * 10 + 2) * 10 + 5
*/
