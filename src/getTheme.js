// @flow

import { getNodeData, getNodeType } from './getNodeInfo'

function getGlobalThemesByNodeType(value: TValue, nodeType: string): TTheme {
  const themes = value.document.data.get('themes')
  if (!themes) return {}
  return themes[nodeType]
}

export default function getTheme(value: TValue, key: string): TTheme {
  const data = getNodeData(value, key)
  const { theme, themeName } = data
  const type = getNodeType(value, key)
  const globalThemes = getGlobalThemesByNodeType(value, type) || {}
  const globalTheme = globalThemes[themeName]
  return Object.assign({}, globalTheme, theme)
}
