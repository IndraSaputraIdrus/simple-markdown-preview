import { useEffect, useState } from 'react'
import snarkdown from 'snarkdown'

const App = () => {
  const initialValue = "# Welcome to my app\n\nIni adalah web sederhana untuk menampilkan markdown\n\n#### Created by Indra"
  const [result, setResult] = useState<string | null>(null)
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const html = snarkdown(value)
    setResult(html)
  }, [value])

  return (
    <main className="container mx-auto h-full grid grid-cols-2 divide-x divide-neutral">
      <div className="flex justify-center max-h-full">
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          className="w-full py-5 text-lg resize-none bg-base-100 focus:outline-none"
          placeholder='Insert your markdown here'
        />
      </div>
      <div className="prose overflow-auto p-5 pr-0">
        {result ? <div dangerouslySetInnerHTML={{ __html: result }} /> : null}
      </div>
    </main>
  )
}

export default App
