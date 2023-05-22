import { useEffect } from "react"  

function UploadWidget(){
/*   const cloudinaryRef = useRef()
  const widgetRef = useRef() */
  

  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dboblsqkr',
      uploadPreset: 'zzrhgmlq'
      
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
    );
    
    console.log('myWidget', myWidget)


  useEffect(()=>{
   /*  cloudinaryRef.current = window.cloudinary  
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dboblsqkr',
      uploadPreset: 'zzrhgmlq'
    }, function(error, result){
      console.log('result', result)
      console.log(error)
    }) */
  },[])

  return(
    <button onClick={() => myWidget.open()}>
      Upload
    </button>
  )
}

export default UploadWidget
