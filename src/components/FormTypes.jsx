import React from 'react'
import PropTypes from 'prop-types'

const FormTypes = ({label, id}) => {

  const placeHolderText = (string) => {
    return "Enter your " + string[0].toLowerCase() + string.slice(1)
  }

  return(
    <article className='flex flex-col w-full gap-2'>
      {
        (label === 'Give us your suggestion') ? 
        <>
          <label htmlFor={id} className='text-violet-500 font-bold'>{label}</label>
          <textarea name={id} id={id} className='h-32 resize-none outline-none bg-gray-custom-4 p-2 text-white '/>
        </>
        : 
        <>
          <label htmlFor={id} className='text-violet-500 font-bold'>{label}</label>
          <input type="text" id={id} placeholder={placeHolderText(label)} className='h-7 bg-transparent border-b-2 border-violet-500 w-full outline-none text-white placeholder:text-gray-custom-4'/>
        </>
      } 

    </article>
  )
}

FormTypes.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default FormTypes