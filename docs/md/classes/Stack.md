[typed-stack](../README.md) / [Exports](../modules.md) / Stack

# Class: Stack<T\>

Represents a Stack.

The `clone()` method internally calls the [deepSimpleClone](../modules.md#deepsimpleclone) function, which can clone object literals, primitives and arrays.
If you wish to use another clone function checkout [InjectableStack](InjectableStack.md).

**`Description`**

A stack is a linear data structure that follows the "last in, first out" (LIFO) principle.

This means that the last item that was added to the stack is the first one to be removed.

A good analogy for a stack is a stack of plates, where you can only add or remove the top plate.

**`Example`**

```
const stack = new Stack<number>();
stack.push(1,2,3,4,5);
stack.clone(); // [5,4,3,2,1]
stack.pop(); // 5
stack.contains(5); // false
stack.count // 4
stack.peek() // 4
stack.clear()
stack.count // 0
```

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Stack`**

  ↳ [`InjectableStack`](InjectableStack.md)

## Implements

- [`IStack`](../interfaces/IStack.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Stack.md#constructor)

### Properties

- [\_elements](Stack.md#_elements)

### Accessors

- [count](Stack.md#count)

### Methods

- [all](Stack.md#all)
- [any](Stack.md#any)
- [clear](Stack.md#clear)
- [clone](Stack.md#clone)
- [contains](Stack.md#contains)
- [extend](Stack.md#extend)
- [find](Stack.md#find)
- [findLast](Stack.md#findlast)
- [forEach](Stack.md#foreach)
- [isEmpty](Stack.md#isempty)
- [moveDown](Stack.md#movedown)
- [moveUp](Stack.md#moveup)
- [peek](Stack.md#peek)
- [pop](Stack.md#pop)
- [push](Stack.md#push)
- [rotate](Stack.md#rotate)
- [search](Stack.md#search)
- [shuffle](Stack.md#shuffle)
- [swap](Stack.md#swap)
- [toArray](Stack.md#toarray)

## Constructors

### constructor

• **new Stack**<`T`\>(`array?`)

Initializes a new instance of the [Stack](Stack.md) class that contains elements copied from the optional specified list.

**`Example`**

```
const stack = new Stack<number>();
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array?` | `T`[] | List of elements to be pushed on the stack. |

#### Defined in

[stack/stack.ts:50](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L50)

## Properties

### \_elements

• `Protected` **\_elements**: `T`[] = `[]`

Represents the elements on the Stack.

#### Defined in

[stack/stack.ts:38](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L38)

## Accessors

### count

• `get` **count**(): `number`

Gets the number of elements contained in the Stack.

#### Returns

`number`

#### Implementation of

IStack.count

#### Defined in

[stack/stack.ts:58](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L58)

## Methods

### all

▸ **all**(): `boolean`

Determines if all the elements in the Stack are truthy values.

#### Returns

`boolean`

`true`, if all elements in the Stack are truthy; otherwise, `false`.

#### Implementation of

[IStack](../interfaces/IStack.md).[all](../interfaces/IStack.md#all)

#### Defined in

[stack/stack.ts:67](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L67)

___

### any

▸ **any**(): `boolean`

Determines if at least 1 of the elements in the Stack is a truthy value.

#### Returns

`boolean`

`true`, if at least 1 elements is truthy; otherwise, `false`.

#### Implementation of

[IStack](../interfaces/IStack.md).[any](../interfaces/IStack.md#any)

#### Defined in

[stack/stack.ts:81](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L81)

___

### clear

▸ **clear**(): `void`

Removes all elements from the Stack.

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[clear](../interfaces/IStack.md#clear)

#### Defined in

[stack/stack.ts:94](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L94)

___

### clone

▸ **clone**(): [`Stack`](Stack.md)<`T`\>

Creates a clone of the Stack.

#### Returns

[`Stack`](Stack.md)<`T`\>

A new Stack with the cloned elements.

#### Implementation of

[IStack](../interfaces/IStack.md).[clone](../interfaces/IStack.md#clone)

#### Defined in

[stack/stack.ts:103](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L103)

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

`true`, if element is found in the Stack; otherwise, `false`.

#### Implementation of

[IStack](../interfaces/IStack.md).[contains](../interfaces/IStack.md#contains)

#### Defined in

[stack/stack.ts:113](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L113)

___

### extend

▸ **extend**(`iterable`): `void`

Adds items from an iterable to the top of the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> | An iterable from which the items should be pushed on top of the Stack. |

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[extend](../interfaces/IStack.md#extend)

#### Defined in

[stack/stack.ts:122](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L122)

___

### find

▸ **find**(`predicateFn`): `undefined` \| `T`

Returns the first element in the Stack where the predicate is `true`, and `undefined` otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicateFn` | (`element`: `T`, `index`: `number`) => `boolean` | `find` calls the `predicateFn` once for each element of the Stack until it finds one where the `predicateFn` returns true. Otherwise, find returns undefined. |

#### Returns

`undefined` \| `T`

The found element of the Stack or `undefined`.

#### Implementation of

[IStack](../interfaces/IStack.md).[find](../interfaces/IStack.md#find)

#### Defined in

[stack/stack.ts:132](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L132)

___

### findLast

▸ **findLast**(`predicateFn`): `any`

Returns the last element in the Stack where the predicate is `true`, and `undefined` otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicateFn` | (`element`: `T`, `index`: `number`) => `boolean` | `find` calls the `predicateFn` once for each element of the Stack. |

#### Returns

`any`

The found element of the Stack or `undefined`.

#### Implementation of

[IStack](../interfaces/IStack.md).[findLast](../interfaces/IStack.md#findlast)

#### Defined in

[stack/stack.ts:148](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L148)

___

### forEach

▸ **forEach**(`callbackFn`): `void`

Calls the specified calbback for each element in the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`element`: `T`, `index`: `number`) => `void` | A function that accepts up to two arguments. `forEach` calls the `callbackFn` one time for each element in the Stack. |

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[forEach](../interfaces/IStack.md#foreach)

#### Defined in

[stack/stack.ts:164](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L164)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Determines whether the Stack is empty.

#### Returns

`boolean`

`true`, if the Stack is empty; otherwise, `false`.

#### Implementation of

[IStack](../interfaces/IStack.md).[isEmpty](../interfaces/IStack.md#isempty)

#### Defined in

[stack/stack.ts:174](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L174)

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

#### Implementation of

[IStack](../interfaces/IStack.md).[moveDown](../interfaces/IStack.md#movedown)

#### Defined in

[stack/stack.ts:195](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L195)

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

#### Implementation of

[IStack](../interfaces/IStack.md).[moveUp](../interfaces/IStack.md#moveup)

#### Defined in

[stack/stack.ts:216](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L216)

___

### peek

▸ **peek**(): `T`

Returns the element at the top of the Stack without removing it.

#### Returns

`T`

The element at the top of the Stack.

#### Implementation of

[IStack](../interfaces/IStack.md).[peek](../interfaces/IStack.md#peek)

#### Defined in

[stack/stack.ts:226](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L226)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes and returns the element at the top of the Stack.

#### Returns

`undefined` \| `T`

The element removed from the top of the Stack.

#### Implementation of

[IStack](../interfaces/IStack.md).[pop](../interfaces/IStack.md#pop)

#### Defined in

[stack/stack.ts:235](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L235)

▸ **pop**(`amount`): `T`[]

Removes and returns the element at the top of the Stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount of elements to pop from the top of the Stack. |

#### Returns

`T`[]

The element removed from the top of the Stack.

#### Implementation of

IStack.pop

#### Defined in

[stack/stack.ts:242](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L242)

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

#### Implementation of

[IStack](../interfaces/IStack.md).[push](../interfaces/IStack.md#push)

#### Defined in

[stack/stack.ts:254](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L254)

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

#### Implementation of

[IStack](../interfaces/IStack.md).[rotate](../interfaces/IStack.md#rotate)

#### Defined in

[stack/stack.ts:274](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L274)

___

### search

▸ **search**(`searchFn`): `T`[]

Calls a specified function with every element in the Stack.
- To match an element - return `true`
- To not match an element - return `false`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchFn` | [`SearchFn`](../modules.md#searchfn)<`T`\> | Search function that is called with every element in the Stack. |

#### Returns

`T`[]

All matched elements of the Stack.

#### Implementation of

[IStack](../interfaces/IStack.md).[search](../interfaces/IStack.md#search)

#### Defined in

[stack/stack.ts:286](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L286)

___

### shuffle

▸ **shuffle**(): `void`

Shuffles the items in the stack randomly.

**`Description`**

Uses the `Fisher–Yates shuffle` internally.

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[shuffle](../interfaces/IStack.md#shuffle)

#### Defined in

[stack/stack.ts:305](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L305)

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

#### Implementation of

[IStack](../interfaces/IStack.md).[swap](../interfaces/IStack.md#swap)

#### Defined in

[stack/stack.ts:328](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L328)

___

### toArray

▸ **toArray**(): `T`[]

Returns a new array containing the elements of the Stack.

#### Returns

`T`[]

An array with the cloned elements from the Stack.

#### Implementation of

[IStack](../interfaces/IStack.md).[toArray](../interfaces/IStack.md#toarray)

#### Defined in

[stack/stack.ts:339](https://github.com/chrisitopherus/typed-stack/blob/156f02f/src/stack/stack.ts#L339)
