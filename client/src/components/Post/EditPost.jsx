import React from 'react'
import { CreatePost } from '../../containers'

const EditPost = ({setIsEdit}) => {
  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 bg-overlay-70 flex justify-center'
      onClick={e => {
        e.stopPropagation() 
        setIsEdit(false)
      }}
    >
      <div className='bg-white max-w-1100 w-full overflow-y-auto'>
        <CreatePost isEdit/>
      </div>
    </div>
  )
}

export default EditPost