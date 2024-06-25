import { useState, useEffect, useRef } from 'react'

const Tooltip = ({ description }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const tooltipRef = useRef(null)

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible)
  }

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setTooltipVisible(false)
    }
  }

  useEffect(() => {
    if (isTooltipVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isTooltipVisible])

  return (
    <span className="relative inline-block ml-2" ref={tooltipRef}>
      <button
        onClick={toggleTooltip}
        className="text-gray-700 hover:text-blue-700 focus:outline-none hover:bg-gray-200 rounded-md"
      >
        ?
      </button>
      {isTooltipVisible && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2  z-50">
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      )}
    </span>
  )
}

export default Tooltip
