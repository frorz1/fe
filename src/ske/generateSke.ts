function createSkeletonBlock(style: Partial<CSSStyleDeclaration>) {
  const div = document.createElement('div')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const computeStyle: any = {}
  Object.keys(style).forEach((key) => {
    const prop = key as keyof CSSStyleDeclaration
    if (key !== 'children') {
      computeStyle[key] = style[prop]
    }
  })
  Object.assign(div.style, computeStyle)
  return div
}

const styles = [
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    children: [
      {
        width: '50px',
        height: '50px',
        children: [
          {
            width: '20px',
            height: '20px',
            background: '#ccc',
          },
        ],
      },
      {
        width: '50px',
        height: '50px',
        background: '#ccc',
      },
      {
        width: '50px',
        height: '50px',
        background: '#ccc',
      },
    ],
  },
]

const container = document.createElement('div')

type StyleListType = Partial<CSSStyleDeclaration> & {
  children?: Partial<CSSStyleDeclaration>[]
}

function generateHTML(styles: StyleListType[]) {
  const frag = document.createDocumentFragment()
  styles.forEach((style) => {
    const ske = createSkeletonBlock(style)
    if (style.children) {
      const childFrag = generateHTML(style.children)
      ske.appendChild(childFrag)
    }
    frag.appendChild(ske)
  })
  return frag
}

container.appendChild(generateHTML(styles))

export default container
