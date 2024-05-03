const convertLog = (image, c, w, h) => {
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      var pixelValue = image.ucharPtr(row, col)[0]
      image.ucharPtr(row, col)[0] = c * Math.log10(1 + pixelValue)
    }
  }
}

export default convertLog
