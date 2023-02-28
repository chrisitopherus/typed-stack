[typed-stack](../README.md) / [Exports](../modules.md) / ISearchable

# Interface: ISearchable<T\>

Represents a structure that can be searched within.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ISearchable`**

  ↳ [`IStack`](IStack.md)

## Table of contents

### Methods

- [search](ISearchable.md#search)

## Methods

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

#### Defined in

[types/interfaces.ts:15](https://github.com/chrisitopherus/typed-stack/blob/8622f13/src/types/interfaces.ts#L15)
