import { Equal, Expect } from "@type-challenges/utils";
import { type } from "os";

type FilterElement<Element, Filter> = [Element] extends [Filter]
  ? []
  : [Element];

type FilterOut<Tuple, Filter> = Tuple extends [infer Head, ...infer Tail]
  ? [...FilterElement<Head, Filter>, ...FilterOut<Tail, Filter>]
  : [];

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<["a", never], never>, ["a"]>>,
  Expect<Equal<FilterOut<[1, never, "a"], never>, [1, "a"]>>,
  Expect<
    Equal<
      FilterOut<
        [never, 1, "a", undefined, false, null],
        never | null | undefined
      >,
      [1, "a", false]
    >
  >,
  Expect<
    Equal<
      FilterOut<[number | null | undefined, never], never | null | undefined>,
      [number | null | undefined]
    >
  >
];

export type { FilterOut };

type A = never extends never ? true : false;
