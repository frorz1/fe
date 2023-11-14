type StyleListType = Partial<CSSStyleDeclaration> & {
  children?: StyleListType[]
  withAnimate?: boolean
  repeat?: number
}

export const DEFALUT_COLOR = '#F5F7FA'
export const BLOCK_COLOR = '#ebeef5'

const keyframes =
  '@keyframes scm-skeleton-loading { 0% { background-position: 100% 50%;} 100% { background-position: 0 50%;}}'

const animateStyle = {
  background: 'linear-gradient(90deg, #ebeef5 25%, #e4e8f0 37%, #ebeef5 63%)',
  backgroundSize: '400% 100%',
  animation: 'scm-skeleton-loading 1.4s ease infinite',
}

export const insertCommonStyle = () => {
  const style = document.createElement('style')
  style.innerHTML = keyframes
  const container = document.querySelector('#ske')
  container?.appendChild(style)
}

export const createElement = (style: Partial<CSSStyleDeclaration>) => {
  const div = document.createElement('div')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const computeStyle: any = {}
  Object.keys(style).forEach((key) => {
    const prop = key as keyof CSSStyleDeclaration
    if (key !== 'children') {
      computeStyle[key] = style[prop]
    }
  })
  // if (!style.background) {
  //   computeStyle.background = BLOCK_COLOR
  // }
  Object.assign(div.style, computeStyle)
  return div
}

export const createAnimatedElement = (style: Partial<CSSStyleDeclaration>) => {
  const ele = createElement(style)
  Object.assign(ele.style, animateStyle)
  return ele
}

export const createListFragment = (styles: StyleListType[]) => {
  const frag = document.createDocumentFragment()
  styles.forEach((style) => {
    let elementBlock
    if (!style.repeat) {
      style.repeat = 1
    }
    for (let i = 0; i < style.repeat; i++) {
      if (style.withAnimate) {
        elementBlock = createAnimatedElement(style)
      } else {
        elementBlock = createElement(style)
      }
      if (style.children) {
        const childFrag = createListFragment(style.children)
        elementBlock.appendChild(childFrag)
      }

      frag.appendChild(elementBlock)
    }
  })
  return frag
}

export const render = (callback: () => void) => {
  let hasRender = false
  if (!hasRender) {
    insertCommonStyle()
    callback()
  }
  hasRender = true
}
