import React, { memo } from "react"

const Button = ({ text, textColor, bgColor, Icon, onClick, fullWidth }) => {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`py-2 px-4 ${textColor} ${bgColor} ${fullWidth && "w-full"} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      >
         <span>{text}</span>
         <span>{Icon && <Icon />}</span>
      </button>
   )
}

export default memo(Button)