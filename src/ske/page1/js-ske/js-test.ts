import {
  createElement,
  createListFragment,
  render,
  DEFALUT_COLOR,
  BLOCK_COLOR,
} from '@/utils'

const generateContainer = () => {
  const containerDom = createElement({
    width: '100%',
    background: DEFALUT_COLOR,
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  })
  return containerDom
}

const generateHeader = () => {
  const section1 = {
    width: '110px',
    height: '170px',
    borderRadius: '10px',
    background: '#fff',
    padding: '5px',
    display: 'inline-block',
    withAnimate: false,
    children: [
      {
        width: '100%',
        height: '120px',
        background: BLOCK_COLOR,
        borderRadius: '10px',
      },
      {
        width: '100px',
        height: '15px',
        background: BLOCK_COLOR,
        borderRadius: '5px',
        marginTop: '5px',
      },
      {
        width: '80px',
        height: '15px',
        background: BLOCK_COLOR,
        borderRadius: '5px',
        marginTop: '5px',
      },
    ],
  }
  const headerStyle = [
    {
      width: '100%',
      height: 'max-content',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      children: [
        section1,
        {
          width: '110px',
          height: '200px',
          borderRadius: '10px',
          background: '#fff',
          padding: '5px',
          display: 'inline-block',
          withAnimate: false,
          children: [
            {
              width: '100%',
              height: '145px',
              background: BLOCK_COLOR,
              borderRadius: '10px',
            },
            {
              width: '100px',
              height: '15px',
              background: BLOCK_COLOR,
              borderRadius: '5px',
              marginTop: '5px',
            },
            {
              width: '80px',
              height: '15px',
              background: BLOCK_COLOR,
              borderRadius: '5px',
              marginTop: '5px',
            },
          ],
        },
        section1,
      ],
    },
  ]
  return createListFragment(headerStyle)
}

const generateMain = () => {
  return createListFragment([
    {
      width: '100%',
      height: 'max-content',
      display: 'flex',
      marginTop: '20px',
      children: [
        {
          width: '60px',
          height: '20px',
          borderRadius: '5px',
          background: BLOCK_COLOR,
          padding: '5px',
          display: 'inline-block',
          withAnimate: true,
          marginRight: '50px',
          repeat: 2,
        },
      ],
    },
    {
      width: '100%',
      height: 'max-content',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      children: [
        {
          width: '60px',
          height: '20px',
          borderRadius: '5px',
          background: BLOCK_COLOR,
          padding: '5px',
          display: 'inline-block',
          withAnimate: true,
          repeat: 3,
        },
      ],
    },
    {
      width: '100%',
      height: 'max-content',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      children: [
        {
          width: '60px',
          height: '20px',
          borderRadius: '5px',
          background: BLOCK_COLOR,
          padding: '5px',
          display: 'inline-block',
          withAnimate: true,
          repeat: 4,
        },
      ],
    },
  ])
}

render(() => {
  const container = generateContainer()
  ;[generateHeader(), generateMain()].forEach((dom) => {
    container.appendChild(dom)
  })
  document.querySelector('#ske')?.appendChild(container)
})
