import React from 'react'

const Inputs = ({ props }) => {
  return (
    <section className="flex flex-col h-[150px] justify-center mt-10 select-none gap-4 mb-4">
      {props.tab === 1 && (
        <div>
          <p className="text-white mb-1 text-[18px]">
            Threshold : {props.threshold}
          </p>
          <input
            value={props.threshold}
            className="slider w-[250px] accent-primary"
            min={0}
            max={255}
            step={1}
            type="range"
            onChange={(e) => props.setThreshold(e.target.value)}
          />
        </div>
      )}
      {props.tab === 2 && (
        <div>
          <p className="text-white mb-4 text-[20px]">
            Enhanced with Log transform
          </p>
        </div>
      )}
      {props.tab === 3 && (
        <div>
          <p className="text-white text-[18px]">
            ( r1, s1 ) = ( r_min, 0 ) <br />( r2, s2 ) = ( r_max, 255 )
          </p>
          <p className="text-white text-[18px] mt-2">
            {props.min} <br />
            {props.max} <br />
            {props.eq}
          </p>
        </div>
      )}
      <div className="flex">
        <input
          type="checkbox"
          className="w-4 accent-primary cursor-pointer"
          onChange={() => props.setIsCut(!props.isCut)}
        />
        <p className="text-white ml-3 text-[18px]">512 x 512 px</p>
      </div>
    </section>
  )
}

export default Inputs
