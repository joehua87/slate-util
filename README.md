# Slate Util
Slate utils for Buzz Page Builder

## What's in it
### `createRenderNode({ components, enhanceFn })`
* components: a map of components for `Slate` to resolve, for example
```js
const components = {
  title: Title,
}
```

* enhanceFn: A `hoc` function.
A simple use case for this is to add hover / click events all Slate node

### getNodeData(value: TValue, key: string)
Get Node `data` by value & key

### getNodeType(value: TValue, key: string)
Get Node `type` by value & key

### getTheme(value: TValue, key: string)
In the page builder App, we set all the themes object to Slate `document` for consitence styling, something like this:
```js
const themes = {
  Title: {
    style1: {
      root: 'f1 roboto',
      content: 'pa2 mv2',
    },
    style2: {
      ...
    },
  },
  Link: {
    style1: {
      root: 'ba b--light-gray',
      icon: 'mr2',
      value: 'pa1',
    },
    style2: {
      ...
    },
  },
}
```

The node itself able to store theme in Slate Node's `data`

So the `getTheme` method is use to get calculate the theme for a node by use its `value` & `key`

The node's `theme` & `globalTheme` will be merge like this:
```js
const theme = {
    ...globalTheme,
    ...nodeTheme,
  }
```
