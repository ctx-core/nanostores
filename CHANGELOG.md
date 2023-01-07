# @ctx-core/nanostores

## 2.2.9

### Patch Changes

- @ctx-core/object: ^22.9.0 -> ^22.9.1

## 2.2.8

### Patch Changes

- @ctx-core/object: ^22.8.2 -> ^22.9.0

## 2.2.7

### Patch Changes

- @ctx-core/object: ^22.8.0 -> ^22.8.2

## 2.2.6

### Patch Changes

- @ctx-core/object: ^22.6.0 -> ^22.7.0
- Updated dependencies
  - @ctx-core/object@22.8.0

## 2.2.5

### Patch Changes

- @ctx-core/object: ^22.5.0 -> ^22.6.0

## 2.2.4

### Patch Changes

- @ctx-core/object: ^22.4.1 -> ^22.5.0

## 2.2.3

### Patch Changes

- WritableAtom\_: explicitly extends ReadableAtom

## 2.2.2

### Patch Changes

- nanostores: ^0.7.0 -> ^0.7.1

## 2.2.1

### Patch Changes

- mix_refresh: fix: set argument type

## 2.2.0

### Minor Changes

- feat:

  computed**set*a*
  computed**set*o*
  computed*set_a*
  computed*set_o*

  fix: refresh_writable_atom_T

## 2.1.0

### Minor Changes

- feat:

  mix*refresh
  refresh_atom*
  writable_atom**\_mix
  ready**T
  refresh_atom_T
  refresh_mixin_T
  refresh_readable_atom_T
  refresh_T
  refresh_writable_atom_T

## 2.0.2

### Patch Changes

- nanostores: ^0.6.0 -> ^0.7.0

## 2.0.1

### Patch Changes

- @ctx-core/function: ^21.0.1 -> ^21.1.0

## 2.0.0

### Major Changes

- subscribe_wait: condition argument is required

## 1.5.0

### Minor Changes

- subscribe_wait: optional timeout argument

## 1.4.11

### Patch Changes

- tsx: ^3.8.2 -> ^3.9.0
- Updated dependencies
  - @ctx-core/function@21.0.1

## 1.4.10

### Patch Changes

- @ctx-core/function: 21.0.0

## 1.4.9

### Patch Changes

- Updated dependencies
  - @ctx-core/function@21.0.0

## 1.4.8

### Patch Changes

- type fixes
- export as instead of export type =

## 1.4.7

### Patch Changes

- nanostores: ^0.5.13 -> ^0.6.0

## 1.4.6

### Patch Changes

- nanostores: ^0.5.12 -> ^0.5.13

## 1.4.5

### Patch Changes

- @ctx-core/function: 20.10.0

## 1.4.4

### Patch Changes

- @ctx-core/function: 20.9.1

## 1.4.3

### Patch Changes

- @ctx-core: 20.9.0

## 1.4.2

### Patch Changes

- readable*fn*,computed*,cache*,split*atom*: fix: assign props onto the object

## 1.4.1

### Patch Changes

- .js + .d.ts instead of .ts

## 1.4.0

### Minor Changes

- feat: + _atom_ aliases atom,_computed_ aliases computed,readable*fn*,writable*fn*

## 1.3.0

### Minor Changes

- atom*,computed*,setter*computed*: getter/setter function api: similar to jQuery

## 1.2.0

### Minor Changes

- feat: underscore (\_) suffix: aliased by \$ suffix

      atom_ as atom$
      computed_ as computed$
      listen_change as listen$change
      listen_once as listen$once
      listen_prev as listen$prev
      neq_atom_ as neq_atom$
      neql_atom_ as neql_atom$
      ReadableAtom_ as ReadableAtom_
      setter_computed_ as setter_computed$
      split_atom_ as split_atom$
      WritableAtom_ as WritableAtom$

## 1.1.1

### Patch Changes

- listen_once: fix: - console.debug

## 1.1.0

### Minor Changes

- feat: + listen$change,listen$prev

## 1.0.19

### Patch Changes

- eslint: ^8.15.0 -> ^8.16.0

## 1.0.18

### Patch Changes

- eslint: ^8.14.0 -> ^8.15.0

## 1.0.17

### Patch Changes

- @ctx-core/function: 20.8.0

## 1.0.16

### Patch Changes

- @ctx-core/function: 20.7.1
- Updated dependencies
  - @ctx-core/function@20.7.2

## 1.0.15

### Patch Changes

- @ctx-core/array: 26.2.0

## 1.0.14

### Patch Changes

- eslint: ^8.13.0 -> ^8.14.0

## 1.0.13

### Patch Changes

- update dependencies

## 1.0.12

### Patch Changes

- fix: @ctx-core/\* dependencies

## 1.0.11

### Patch Changes

- package.json: exports: update
- Updated dependencies
  - @ctx-core/function@20.6.1

## 1.0.10

### Patch Changes

- neq_atom$,neql_atom$: fix: circular dependency

## 1.0.9

### Patch Changes

- eslint: ^8.12.0 -> ^8.13.0

## 1.0.8

### Patch Changes

- setter_computed\$: fix: not calling set should not notify observers

## 1.0.7

### Patch Changes

- setter_computed\$: optimization: store_val_a[0] instead of store.get()

## 1.0.6

### Patch Changes

- setter_computed$: return_payload$ atom takes a val instead of { store_val_a, val }

## 1.0.5

### Patch Changes

- setter_computed\$: memoizing \_store_val_a instead of calling store_a.map(store=>store.get())

## 1.0.4

### Patch Changes

- 27dd54819: nanostores: ^0.5.11 -> ^0.5.12

## 1.0.3

### Patch Changes

- @ctx-core/nanostores: setter_computed\$: stale set calls are ignored

## 1.0.2

### Patch Changes

- fix: https://github.com/nanostores/nanostores/issues/101 via https://github.com/nanostores/nanostores/pull/102

## 1.0.1

### Patch Changes

- setter_computed\$: reverted stale set calls are ignored

## 1.0.0

### Major Changes

- BREAKING CHANGE: setter_computed\$: stale set calls are ignored

## 0.7.5

### Patch Changes

- update dependencies

## 0.7.4

### Patch Changes

- setter_computed$: fix: listen to changes not from computed$ (deps prop): + collectWritable

## 0.7.3

### Patch Changes

- typescript: ^4.6.0-dev.20220120 -> ^4.6.2

## 0.7.2

### Patch Changes

- eslint: ^8.9.0 -> ^8.10.0

## 0.7.1

### Patch Changes

- eslint: ^8.8.0 -> ^8.9.0

## 0.7.0

### Minor Changes

- decorate_neq_atom$,decorate_neql_atom$: returns onSet()

## 0.6.0

### Minor Changes

- feat: + neq_atom$,neql_atom$

## 0.5.4

### Patch Changes

- update dependencies

## 0.5.3

### Patch Changes

- nanostores: ^0.5.9 -> ^0.5.10

## 0.5.2

### Patch Changes

- update dependencies

## 0.5.1

### Patch Changes

- fix: ReadableAtom$: readonly $

## 0.5.0

### Minor Changes

- setter_computed\$\_T: feat: OriginStores generic: default type: allows one generic argument

## 0.4.2

### Patch Changes

- fix: subscribe_wait_timeout: condition_fn & timeout arguments are required

## 0.4.1

### Patch Changes

- fix: dependencies: + @ctx-core/function

## 0.4.0

### Minor Changes

- - SetterComputedAtom\\\\$: setter_computed\\\$\\\\\_T returns SetterComputedAtom\$

### Patch Changes

- fix: setter_computed\$: issues with calling fn handler when dependencies update

## 0.3.8

### Patch Changes

- setter_computed\$: internal: refering to set using closure scope

## 0.3.7

### Patch Changes

- fix: setter_computed\$: single atom dependency

## 0.3.6

### Patch Changes

- fix: setter_computed\$: atom (non-array) stores argument

## 0.3.5

### Patch Changes

- update dependencies

## 0.3.4

### Patch Changes

- sideEffects = false

## 0.3.3

### Patch Changes

- uvu: ^0.5.2 -> ^0.5.3

## 0.3.2

### Patch Changes

- version bump

## 0.3.1

### Patch Changes

- .js + .d.ts instead of .ts

## 0.3.0

### Minor Changes

- - nanostores types

## 0.2.0

### Minor Changes

- - subscribe_wait,subscribe_wait_timeout

## 0.1.1

### Patch Changes

- fix: interface ReadableAtom\$<Value> extends ReadableAtom<Value

  fix: interface WritableAtom$<Value> extends ReadableAtom$<Value>,WritableAtom<Value>

## 0.1.0

### Minor Changes

- - atom$,computed$
