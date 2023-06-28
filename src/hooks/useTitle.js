import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title =`${title} | Rayhan Shorker`
    },[title])
}
export default useTitle;