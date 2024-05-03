const contrast = (image, w, h, setMin, setMax, setEq) => {
  let max = -1
  let min = 256
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (image.ucharPtr(r, c)[0] < min) min = image.ucharPtr(r, c)[0]
      if (image.ucharPtr(r, c)[0] > max) max = image.ucharPtr(r, c)[0]
    }
  }

  let a = 255 / (max - min)
  let b = a * min

  setMin(`min : ${min}`)
  setMax(`max : ${max}`)
  setEq(`s = ${a.toPrecision(3)} r - ${b.toPrecision(3)}`)

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      var pixelValue = image.ucharPtr(r, c)[0]
      if (pixelValue <= min) image.ucharPtr(r, c)[0] = 0
      else if (pixelValue >= max) image.ucharPtr(r, c)[0] = 255
      else image.ucharPtr(r, c)[0] = a * pixelValue - b
    }
  }
}

export default contrast
