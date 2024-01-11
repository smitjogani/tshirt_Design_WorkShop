import React from 'react'
import CustomButton from "./CustomButton"

const AiPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      placeholder='ASK AI....'
        className='aipicker-textarea'
        rows={5}
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton type="filled" title="Asking AI.." CustomStyles="text-xs"/>
        ):(
          <>
            <CustomButton type="filled" title="AI LOGO" handleClick={()=>handleSubmit('logo')} CustomStyles="text-xs"/>
            <CustomButton type="filled" title="AI Full" handleClick={()=>handleSubmit('full')} CustomStyles="text-xs"/>
          </>
        )}
      </div>
    </div>
  )
}

export default AiPicker