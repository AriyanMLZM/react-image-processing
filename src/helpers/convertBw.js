const convertBw = (image, threshold, w, h) => {
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (image.ucharPtr(r, c)[0] <= threshold) image.ucharPtr(r, c)[0] = 0
      else image.ucharPtr(r, c)[0] = 255
    }
  }
}

export default convertBw
