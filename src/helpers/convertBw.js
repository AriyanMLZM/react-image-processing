const convertBw = (pix, threshold, w, h) => {
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (pix.ucharPtr(r, c)[0] <= threshold) pix.ucharPtr(r, c)[0] = 0
      else pix.ucharPtr(r, c)[0] = 255
    }
  }
}

export default convertBw
