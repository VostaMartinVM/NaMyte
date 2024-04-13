import { useEffect, useState } from "react"
import "./Scroll.scss"
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io"

const Scroll = () => {
  const [isTop, setIsTop] = useState(true)
  const scrolObj = document.getElementById("pageContainer")

  useEffect(() => {
    const handleScroll = () => {
      if (scrolObj) {
        setIsTop(scrolObj.scrollTop === 0)
      }
    }

    scrolObj?.addEventListener("scroll", handleScroll)

    return () => {
      if (scrolObj) {
        scrolObj.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const scrollUp = () => {
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
    <div onClick={isTop ? scrollDown : scrollUp} className='scrollButton'>
      {isTop ? <IoIosArrowDropdown className='icon' /> : <IoIosArrowDropup className='icon' />}
    </div>
  )
}

export default Scroll
