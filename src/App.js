import React from 'react'
import { AuthProvider} from './auth'
import Rotas from './rotas'

function App() {

  return (      
      <AuthProvider>
          <Rotas />        
      </AuthProvider>        
  )
}

export default App
