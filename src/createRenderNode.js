// @flow

import React from 'react'

function enhanceComponents(components: { [key: string]: any }, enhanceFn: Function) {
  const keys = Object.keys(components)
  return keys.reduce(
    (acc, v) => Object.assign({}, acc, {
      [v]: enhanceFn(components[v]),
    }),
    {},
  )
}

export default function createRenderNode({ components, enhanceFn }: any): Function {
  const _components = enhanceFn ? enhanceComponents(components, enhanceFn) : components

  return (props: any) => {
    const { node } = props
    const Component = _components[node.type]
    if (!Component) return undefined
    return <Component {...props} />
  }
}
