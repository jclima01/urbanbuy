import { useEffect, useRef } from "react"  

function UploadWidget(){
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  
  useEffect(()=>{
    cloudinaryRef.current = window.cloudinary  
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dhan4gjbn',
      uploadPreset: 'zzrhgmlq'
    }, function(error, result){
      console.log(error)
    })
  },[])

  return(
    <button onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  )
}

export default UploadWidget
