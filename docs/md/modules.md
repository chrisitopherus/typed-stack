[typed-stack](README.md) / Exports

# typed-stack

## Table of contents

### Classes

- [InjectableStack](classes/InjectableStack.md)
- [Stack](classes/Stack.md)

### Interfaces

- [ISearchable](interfaces/ISearchable.md)
- [IStack](interfaces/IStack.md)

### Type Aliases

- [CloneFn](modules.md#clonefn)
- [SearchFn](modules.md#searchfn)

### Functions

- [deepSimpleClone](modules.md#deepsimpleclone)

## Type Aliases

### CloneFn

Ƭ **CloneFn**<`T`\>: (`value`: `T`[]) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`): `T`[]

Defines the structure of a clone function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

##### Returns

`T`[]

#### Defined in

[types/types.ts:13](https://github.com/chrisitopherus/typed-stack/blob/8622f13/src/types/types.ts#L13)

___

### SearchFn

Ƭ **SearchFn**<`T`\>: (`item`: `T`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`item`): `boolean`

Represents a generic function to be used for searching.

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

##### Returns

`boolean`

#### Defined in

[types/types.ts:4](https://github.com/chrisitopherus/typed-stack/blob/8622f13/src/types/types.ts#L4)

## Functions

### deepSimpleClone

▸ **deepSimpleClone**<`T`\>(`value`): `T`

Recursively clones `value`.

Supported types:
- All primitives
- object literals - no maps/sets/functions
- arrays (not typed arrays)

**`Throws`**

TypeError
Is thrown if an unsupported type is passed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to clone. |

#### Returns

`T`

The cloned value.

#### Defined in

[utils/deepSimpleClone.ts:21](https://github.com/chrisitopherus/typed-stack/blob/8622f13/src/utils/deepSimpleClone.ts#L21)
