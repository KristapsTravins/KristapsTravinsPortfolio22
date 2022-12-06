import { useState } from "react"

export const useexpandProjectCard = ()=>{
const [expandState,SetExpandState] = useState(false)
return {expandState,SetExpandState}
}