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
      } flex mx-2 justify-center items-center font-bold pb-[10px] text-[20px] w-[80px] h-[35px]`}
    >
      {props.text}
    </button>
  )
}

export default Tab
