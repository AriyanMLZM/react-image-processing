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
          ? 'bg-primary text-bgColor'
          : 'text-white md:hover:text-primary'
      } flex justify-center items-center font-bold rounded-[20px] pb-[2px] text-[20px] w-[80px] h-[35px]`}
    >
      {props.text}
    </button>
  )
}

export default Tab
