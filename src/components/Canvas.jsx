import React, { useEffect, useRef, useState } from 'react'

import { imgDownloader, convertBw } from '../helpers'
import { Button2 } from '.'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const [img2, setImg2] = useState(null)
  const canvasRef = useRef()

  useEffect(() => {
    const image = document.getElementById('img')
    const ctx = canvasRef.current.getContext('2d')

    if (props.img) {
      const w = props.isCut ? 512 : image.naturalWidth
      const h = props.isCut ? 512 : image.naturalHeight

      canvasRef.current.width = w
      canvasRef.current.height = h

      ctx.drawImage(image, 0, 0, w, h)

      if (cv) {
        let src = cv.imread(canvasRef.current)
        let dst = new cv.Mat()
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0)
        cv.imshow(canvasRef.current, dst)
        src.delete()
        setImg(canvasRef.current.toDataURL('image/jpeg'))
        
        switch (props.tab) {
          case 1:
            convertBw(dst, props.threshold, w, h)
            cv.imshow(canvasRef.current, dst)
            setImg2(canvasRef.current.toDataURL('image/jpeg'))
            break
        }

        dst.delete()
      }
    }
  }, [props.convert, props.isCut])

  return (
    <>
      <canvas className="border-2 hidden" ref={canvasRef}></canvas>
      {img && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={props.tab === 0 ? img : props.tab === 1 ? img2 : ''}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img)} />
        </section>
      )}
    </>
  )
}

export default Canvas
