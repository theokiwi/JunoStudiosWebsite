import './BlueSquares.css'

function BlueSquares({color}) {

  return (
    <>
    <div className="hover:scale-750 transition-all duration-300 absolute -z-20 right-62 top-38 scale-[6]">
      <svg width="234" height="234" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="167" y="30.6553" width="165" height="180" rx="32" transform="rotate(75 167 30.6553)" fill={color}/>
      </svg>
    </div>
   </>
  )
}

export default BlueSquares
