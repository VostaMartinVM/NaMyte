import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io"
import { useEffect, useState } from "react"
import "./Scroll.scss"

const Scroll = () => {
  const [isTop, setIsTop] = useState(false)
  const scrolObj = document.getElementById("pageContainer")

  useEffect(() => {
    scrolObj?.addEventListener("scroll", () => {
      if (scrolObj.scrollTop != scrolObj.scrollHeight - scrolObj.offsetHeight) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    })
  })

  const scrollUP = () => {
    if (scrolObj) {
      scrolObj.scroll({ top: 0, behavior: "smooth" })
    }
  }

  const scrollDown = () => {
    if (scrolObj) {
      scrolObj.scroll({ top: scrolObj.scrollHeight, behavior: "smooth" })
    }
  }

  return (
    <div onClick={isTop ? scrollDown : scrollUP} className='scrollButton'>
      {isTop ? <IoIosArrowDropdown className='icon' /> : <IoIosArrowDropup className='icon' />}
    </div>
  )
}

export default Scroll
