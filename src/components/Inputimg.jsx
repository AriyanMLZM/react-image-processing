import React from 'react'

const Inputimg = ({ props }) => {
  return (
    <section className="w-[200px] pb-2 h-[250px] border-[2px] rounded mt-5 flex flex-col items-center">
      <input
        id="file-upload"
        type="file"
        multiple={false}
        accept="image/*"
        className="w-[90%] h-[20%] pt-2 text-[13px] text-white file:hover:bg-primary file:bg-bgColor file:border-[2px] file:border-primary file:border-solid file:px-2 file:text-primary file:hover:text-bgColor file:rounded-full file:mr-2"
        onChange={(e) => {
          props.setFile(e.target.files[0])
        }}
      />
      <div className="h-[80%] p-2 flex justify-center items-center text-white overflow-hidden">
        {props.img && (
          <img
            id="img"
            src={props.img}
            alt="No Image"
            draggable={false}
            className="select-none"
          />
        )}
        {!props.img && <p className="select-none">No Image Selected</p>}
      </div>
    </section>
  )
}

export default Inputimg
