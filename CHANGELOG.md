# @ctx-core/nanostores

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

- - SetterComputedAtom\\\\\\\$: setter_computed\\\\\\\$\\\\\\\\_T returns SetterComputedAtom\$

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
