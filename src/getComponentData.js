// @flow

import omit from 'lodash.omit'

export default function getComponentData(node: TNode): TTheme {
  return omit(node.data.toJSON(), ['theme', 'themeName', 'themeType'])
}
