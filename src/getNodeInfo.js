// @flow

export function getNodeData(value: TValue, key: string) {
  const node = value.document.getNode(key)
  return node && node.data && node.data.toJSON()
}

export function getNodeType(value: TValue, key: string) {
  const node = value.document.getNode(key)
  return node && node.type
}
