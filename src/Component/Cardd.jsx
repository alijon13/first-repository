import React from 'react'

const Cardd = ({img,title,desc,p,v,v1}) => {
  return (
    <div className='w-[373px] rounded-[20px] dark:bg-[#363636] shadow-xl'>
        <img src={img} alt="" />
        <div className="px-[20px] py-[10px]">
            <h1 className='text-[28px]'>{title}</h1>
            <h1 className='py-[15px]'>{desc}</h1>
            <p className='py-[20px]'>{p}</p>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src="src/assets/akar-icons_link-chain.svg" alt="" />
                    <p>Live Preview</p>
                </div>
                <div className="flex items-center gap-[5px] ">
                    <img className='w-[20px]' src="src/assets/akar-icons_github-fill.svg" alt="" />
                    <p>View Code</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cardd