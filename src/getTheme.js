// @flow

import { getNodeData, getNodeType } from './getNodeInfo'

function getGlobalThemesByNodeType(value: TValue, nodeType: string): TTheme {
  const themes = value.document.data.get('themes')
  if (!themes) return {}
  return themes[nodeType]
}

export default function getTheme(value: TValue, key: string): TTheme {
  const data = getNodeData(value, key)
  const { theme, themeName, themeType = 'custom' } = data
  if (themeType === 'custom') {
    return theme
  }

  const type = getNodeType(value, key)
  const globalThemes = getGlobalThemesByNodeType(value, type)
  if (!globalThemes) return {}
  return globalThemes[themeName]
}
