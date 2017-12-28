// @flow

import pickBy from 'lodash.pickby'

const editProps = [
  'contentEditable',
  'suppressContentEditableWarning',
  'className',
  'style',
  'onClick',
  'onDoubleClick',
  'onMouseOver',
  'onMouseLeave',
]

function getEditProps(props: { [key: string]: any }) {
  const validProps = pickBy(props, (v, k) => {
    const isTrue = editProps.includes(k) && typeof v !== 'undefined'
    return isTrue
  })
  return validProps
}

export default getEditProps
