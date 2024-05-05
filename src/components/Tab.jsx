import React from 'react'

const Tab = ({ props }) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (!props.active) props.setTab(props.ind)
      }}
      className={`${
        props.active
          ? 'text-primary border-b-[3px] border-primary'
          : 'text-white md:hover:text-primary'
      } flex justify-center items-center font-bold pb-[10px] md:text-[20px] text-[17px] h-[35px] md:mx-4 mx-2`}
    >
      {props.text}
    </button>
  )
}

export default Tab
