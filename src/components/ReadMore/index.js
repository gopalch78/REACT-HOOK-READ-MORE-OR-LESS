import {useState} from 'react'

import {
  Container,
  ReactHeading,
  ReactParagraph,
  ReactImage,
  ReactDescription,
  ReactButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [slicedData, setSlicedData] = useState(false)

  const sliced = slicedData
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const onClickButton = () => {
    setSlicedData(prevState => !prevState)
  }
  const buttonText = slicedData ? 'Read  Less' : 'Read More'
  return (
    <Container>
      <ReactHeading>React Hooks</ReactHeading>
      <ReactParagraph>Hooks are a new addition to React</ReactParagraph>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      <ReactDescription>{sliced}</ReactDescription>
      <ReactButton type="button" onClick={onClickButton}>
        {buttonText}
      </ReactButton>
    </Container>
  )
}
export default ReadMore
