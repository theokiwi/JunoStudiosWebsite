function BlueSquares({color, viewBox =  "0 0 1920 1080"}) {

  return (
    <>
    <div className="hover:scale-105 hover:brightness-95 transition-all duration-300 box-shadow-lg">
       <svg id="e0Jp23kTxMF1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={viewBox}
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        project-id="046772eee6c540a1ab787f52eb09eebf" 
        export-id="325db183167e414c85f3f91ed955e021" cached="false"> 
          <rect width="1172.468558" height="913.905857" rx="137" ry="137"
           transform="matrix(.90063-.350701 0.404296 1.038266 807.91873 162.681827)"
           fill={color} 
           strokeWidth="0"
           />
      </svg>
    </div>
   </>
  )
}

export default BlueSquares
