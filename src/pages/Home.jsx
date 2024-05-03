import React, { useState, useEffect } from 'react'

import { Header, Inputimg, Inputs, Canvas, Button, Nav } from '../components'
import { reader } from '../helpers'

const Home = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)
  const [threshold, setThreshold] = useState(127)
  const [c, setC] = useState(5)
  const [isCut, setIsCut] = useState(false)
  const [convert, setConvert] = useState(false)
  const [tab, setTab] = useState(0)

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result))
    }
  }, [file])

  const handleConvert = () => {
    setConvert(!convert)
  }

  return (
    <main className=" flex items-center flex-col pb-8">
      <Header />
      <Inputimg props={{ img, file, setFile }} />
      <Nav props={{ tab, setTab }} />
      <Inputs props={{ setIsCut, isCut, setThreshold, threshold, tab, c, setC }} />
      <Button func={handleConvert} />
      <Canvas props={{ img, isCut, threshold, convert, tab, c }} />
    </main>
  )
}

export default Home
