[typed-stack](../README.md) / [Exports](../modules.md) / IStack

# Interface: IStack<T\>

Represents a Stack.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ISearchable`](ISearchable.md)<`T`\>

  ↳ **`IStack`**

## Implemented by

- [`Stack`](../classes/Stack.md)

## Table of contents

### Accessors

- [count](IStack.md#count)

### Methods

- [all](IStack.md#all)
- [any](IStack.md#any)
- [clear](IStack.md#clear)
- [clone](IStack.md#clone)
- [contains](IStack.md#contains)
- [extend](IStack.md#extend)
- [find](IStack.md#find)
- [findLast](IStack.md#findlast)
- [forEach](IStack.md#foreach)
- [isEmpty](IStack.md#isempty)
- [moveDown](IStack.md#movedown)
- [moveUp](IStack.md#moveup)
- [peek](IStack.md#peek)
- [pop](IStack.md#pop)
- [push](IStack.md#push)
- [rotate](IStack.md#rotate)
- [search](IStack.md#search)
- [shuffle](IStack.md#shuffle)
- [swap](IStack.md#swap)
- [toArray](IStack.md#toarray)

## Accessors

### count

• `get` **count**(): `number`

Gets the number of elements contained in the Stack.

#### Returns

`number`

#### Defined in

[types/interfaces.ts:25](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L25)

## Methods

### all

▸ **all**(): `boolean`

Determines if all the elements in the Stack are truthy values.

#### Returns

`boolean`

#### Defined in

[types/interfaces.ts:30](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L30)

___

### any

▸ **any**(): `boolean`

Determines if at least 1 of the elements in the Stack is a truthy value.

#### Returns

`boolean`

#### Defined in

[types/interfaces.ts:35](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L35)

___

### clear

▸ **clear**(): `void`

Removes all elements from the Stack.

#### Returns

`void`

#### Defined in

[types/interfaces.ts:40](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L40)

___

### clone

▸ **clone**(): [`IStack`](IStack.md)<`T`\>

Creates a clone of the Stack.

#### Returns

[`IStack`](IStack.md)<`T`\>

#### Defined in

[types/interfaces.ts:45](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L45)

___

### contains

▸ **contains**(`element`): `boolean`

Determines whether an element is in the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to locate in the Stack. |

#### Returns

`boolean`

#### Defined in

[types/interfaces.ts:51](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L51)

___

### extend

▸ **extend**(`iterable`): `void`

Adds items from an iterable to the top of the Stack.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> |

#### Returns

`void`

#### Defined in

[types/interfaces.ts:56](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L56)

___

### find

▸ **find**(`predicateFn`): `undefined` \| `T`

Returns the first element in the Stack where the predicate is `true`, and `undefined` otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicateFn` | (`element`: `T`) => `boolean` |

#### Returns

`undefined` \| `T`

#### Defined in

[types/interfaces.ts:61](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L61)

___

### findLast

▸ **findLast**(`predicateFn`): `undefined` \| `T`

Returns the last element in the Stack that satisfies the specified condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicateFn` | (`element`: `T`) => `boolean` |

#### Returns

`undefined` \| `T`

#### Defined in

[types/interfaces.ts:66](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L66)

___

### forEach

▸ **forEach**(`callbackFn`): `void`

Calls the specified callback function on each element in the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`element`: `T`, `index`: `number`) => `void` | A function that accepts up to two arguments. `forEach` calls the callbackfn function one time for each element in the Stack. |

#### Returns

`void`

#### Defined in

[types/interfaces.ts:73](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L73)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Determines whether the Stack is empty.

#### Returns

`boolean`

#### Defined in

[types/interfaces.ts:78](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L78)

___

### moveDown

▸ **moveDown**(): `void`

Moves the elements 1 position down.

**`Description`**

Lets say our stack looks like this:
[1]
[2]
[3]
[4]
------
After moving down it looks like this:
[4]
[1]
[2]
[3]

#### Returns

`void`

#### Defined in

[types/interfaces.ts:96](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L96)

___

### moveUp

▸ **moveUp**(): `void`

Moves the elements 1 position up.

**`Description`**

Lets say our stack looks like this:
[1]
[2]
[3]
[4]
------
After moving up it looks like this:
[2]
[3]
[4]
[1]

#### Returns

`void`

#### Defined in

[types/interfaces.ts:114](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L114)

___

### peek

▸ **peek**(): `undefined` \| `T`

Returns the element at the top of the Stack without removing it.

#### Returns

`undefined` \| `T`

#### Defined in

[types/interfaces.ts:119](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L119)

___

### pop

▸ **pop**(`amount?`): `undefined` \| `T` \| `T`[]

Removes and returns the element at the top of the Stack.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `number` |

#### Returns

`undefined` \| `T` \| `T`[]

#### Defined in

[types/interfaces.ts:124](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L124)

___

### push

▸ **push**(`...elements`): `void`

Pushes one or more elements at the top of the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...elements` | `T`[] | The elements to push onto the Stack. |

#### Returns

`void`

#### Defined in

[types/interfaces.ts:130](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L130)

___

### rotate

▸ **rotate**(): `void`

Rotates the stack.

**`Description`**

Lets say our stack looks like this:
[1]
[2]
[3]
[4]
------
After rotating it will look like this:
[4]
[3]
[2]
[1]

#### Returns

`void`

#### Defined in

[types/interfaces.ts:148](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L148)

___

### search

▸ **search**(`searchFn`): `T`[]

Calls a specified function with every item of the structure.
- To match an item - return `true`
- To not match an item - return `false`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchFn` | [`SearchFn`](../modules.md#searchfn)<`T`\> | Search function that is called with every item in the structure. |

#### Returns

`T`[]

All matched items of the structure.

#### Inherited from

[ISearchable](ISearchable.md).[search](ISearchable.md#search)

#### Defined in

[types/interfaces.ts:15](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L15)

___

### shuffle

▸ **shuffle**(): `void`

Shuffles the items in the stack randomly

#### Returns

`void`

#### Defined in

[types/interfaces.ts:153](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L153)

___

### swap

▸ **swap**(): `void`

Swaps the two elements on top of the stack.

**`Description`**

Lets say our stack looks like this:
[1]
[2]
[3]
[4]
------
After swapping it will look like this:
[2]
[1]
[3]
[4]

#### Returns

`void`

#### Defined in

[types/interfaces.ts:171](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L171)

___

### toArray

▸ **toArray**(): `T`[]

Returns a new array containing the elements of the Stack.

#### Returns

`T`[]

#### Defined in

[types/interfaces.ts:176](https://github.com/chrisitopherus/typed-stack/blob/befeade/src/types/interfaces.ts#L176)
