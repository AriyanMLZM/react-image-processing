const fourier = (src, withLog) => {
  let optimalRows = cv.getOptimalDFTSize(src.rows)
  let optimalCols = cv.getOptimalDFTSize(src.cols)
  let s0 = cv.Scalar.all(0)
  let padded = new cv.Mat()
  cv.copyMakeBorder(
    src,
    padded,
    0,
    optimalRows - src.rows,
    0,
    optimalCols - src.cols,
    cv.BORDER_CONSTANT,
    s0
  )

  let plane0 = new cv.Mat()
  padded.convertTo(plane0, cv.CV_32F)
  let planes = new cv.MatVector()
  let complexI = new cv.Mat()
  let plane1 = new cv.Mat.zeros(padded.rows, padded.cols, cv.CV_32F)
  planes.push_back(plane0)
  planes.push_back(plane1)
  cv.merge(planes, complexI)

  cv.dft(complexI, complexI)

  cv.split(complexI, planes)
  cv.magnitude(planes.get(0), planes.get(1), planes.get(0))
  let mag = planes.get(0)
  let m1 = new cv.Mat.ones(mag.rows, mag.cols, mag.type())
  cv.add(mag, m1, mag)
  if (withLog) cv.log(mag, mag)

  let rect = new cv.Rect(0, 0, mag.cols & -2, mag.rows & -2)
  mag = mag.roi(rect)

  let cx = mag.cols / 2
  let cy = mag.rows / 2
  let tmp = new cv.Mat()

  let rect0 = new cv.Rect(0, 0, cx, cy)
  let rect1 = new cv.Rect(cx, 0, cx, cy)
  let rect2 = new cv.Rect(0, cy, cx, cy)
  let rect3 = new cv.Rect(cx, cy, cx, cy)

  let q0 = mag.roi(rect0)
  let q1 = mag.roi(rect1)
  let q2 = mag.roi(rect2)
  let q3 = mag.roi(rect3)

  q0.copyTo(tmp)
  q3.copyTo(q0)
  tmp.copyTo(q3)

  q1.copyTo(tmp)
  q2.copyTo(q1)
  tmp.copyTo(q2)

  cv.normalize(mag, mag, 0, 1, cv.NORM_MINMAX)

  padded.delete()
  planes.delete()
  complexI.delete()
  m1.delete()
  tmp.delete()

  return mag
}

export default fourier
