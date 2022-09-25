import { useState } from 'react'
import * as C from './App.styles'
import { Category}from './types/Category'
import { Item}from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'

const App = () => {
  const [ list , setListe] =useState()
  return (
     <C.Container>
        <C.Header>
            <C.HeaderText>
                My - Money
            </C.HeaderText>
        </C.Header>
        <C.Body>
            
        </C.Body>
     </C.Container>
  )
}

export default App