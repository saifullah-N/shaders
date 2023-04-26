import { HexColorPicker } from "react-colorful";
import {React, useContext, useState ,useEffect} from 'react'
import { ContextAction, ContextValue } from "./Context";
function ColorPicker() {


const materialBG = useContext(ContextValue);
const setMaterialBG = useContext(ContextAction);
let [display,setDisplay] = useState(false)
useEffect(() => {
  materialBG.current!="none"?setDisplay(true):setDisplay(false)
  console.log(materialBG ,"useeff ");
})
 if(display)
    return(
          
          <div style={{ display: "block", marginTop: "-20%" }}>
            <HexColorPicker
              color={materialBG.items[materialBG.current]}
              onChange={(color) => {
                materialBG.items[materialBG.current] = color;
                setMaterialBG(materialBG);
              }}
            />
          </div>
        )

}
 export default ColorPicker;