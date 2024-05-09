import React, { useEffect, useRef, useState } from 'react'

import { imgDownloader, convertBw, fourier, contrast, histogram } from '../helpers'
import { Button2 } from '.'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const [img2, setImg2] = useState(null)
  const [img3, setImg3] = useState(null)
  const [img4, setImg4] = useState(null)
  const [img5, setImg5] = useState(null)
  const [img6, setImg6] = useState(null)

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
          case 2:
            let mag = fourier(dst, false)
            cv.imshow(canvasRef.current, mag)
            setImg3(canvasRef.current.toDataURL('image/jpeg'))

            mag = fourier(dst, true)
            cv.imshow(canvasRef.current, mag)
            setImg4(canvasRef.current.toDataURL('image/jpeg'))
            mag.delete()
            break
          case 3:
            contrast(dst, w, h, props.setMin, props.setMax, props.setEq)
            cv.imshow(canvasRef.current, dst)
            setImg5(canvasRef.current.toDataURL('image/jpeg'))
            break
          case 4:
            let hist = histogram(dst)
            cv.imshow(canvasRef.current, hist)
            setImg6(canvasRef.current.toDataURL('image/jpeg'))
            hist.delete()
            break
        }

        dst.delete()
      }
    }
  }, [props.convert])

  return (
    <>
      <canvas className="border-2 hidden" ref={canvasRef}></canvas>
      {props.tab === 0 && img && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img)} />
        </section>
      )}
      {props.tab === 1 && img2 && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img2}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img2)} />
        </section>
      )}
      {props.tab === 2 && img3 && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img3}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <img
            src={img4}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none mt-6"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img4)} />
        </section>
      )}
      {props.tab === 3 && img5 && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img5}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img5)} />
        </section>
      )}
      {props.tab === 4 && img6 && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img6}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img6)} />
        </section>
      )}
    </>
  )
}

export default Canvas
