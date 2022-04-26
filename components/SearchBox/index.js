import { useState } from 'react'

import * as S from './styles'

function SearchBox({ ...otherProps }) {
  const [isHighlighted, setIsHighlighted] = useState(false)
  
  return (
      <S.Container color={isHighlighted}>
          <S.SearchIcon/>
          <input 
            onFocus={() => setIsHighlighted(true)} 
            onBlur={() => setIsHighlighted(false)} 
            type="text" 
            placeholder="SEARCH" 
            {...otherProps} 
        />
      </S.Container>
  )
}

export default SearchBox