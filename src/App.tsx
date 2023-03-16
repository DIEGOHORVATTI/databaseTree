import React, { useState, useEffect } from 'react'

const App = () => {
  const [resultFinal, setResultFinal] = useState<string>('')
  const [pathError, setPathError] = useState<boolean>(false)

  useEffect(() => {
    const watchFile = () => {
      fetch('public/data.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Arquivo não encontrado.')
          }
          console.log(response.json)
          return response.json()
        })
        .then((json) => {
          setResultFinal(json.resultFinal)
          setPathError(false)
        })
        .catch((error) => {
          console.error(error)
          setPathError(true)
        })
      setTimeout(watchFile, 1000)
    }

    watchFile()
  }, [])

  return (
    <div>
      <h1>Resultado Final: {resultFinal}</h1>
      {pathError ? (
        <h1>Erro ao carregar arquivo JSON.</h1>
      ) : (
        <h1>Resultado Final: {resultFinal}</h1>
      )}
    </div>
  )
}

export default App
