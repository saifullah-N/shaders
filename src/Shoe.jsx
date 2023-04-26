import React, { useRef ,useContext} from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei/'
import model from "./assets/shoe-draco.glb"
import { ContextAction, ContextValue } from "./Context";
import "./App.css";
export default function Shoe({ ...props }) {
 const group = useRef()
 const { nodes, materials } = useGLTF("/src/assets/shoe-draco.glb");
const materialBG = useContext(ContextValue);
const setMaterialBG = useContext(ContextAction) ;
return(
  <>  
  <group ref={group} {...props} dispose={null}  onPointerDown={(e) => {e.stopPropagation();materialBG.current = e.object.material.name;setMaterialBG(materialBG);console.log(materialBG);}}
onPointerMissed={(e) =>{materialBG.current = null;} }>
    <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={materialBG.items.laces}/>
    <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}material-color={materialBG.items.mesh}/>
    <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={materialBG.items.caps} />
    <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={materialBG.items.inner} />
    <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={materialBG.items.sole} />
    <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={materialBG.items.stripes}/>
    <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={materialBG.items.band}/>
    <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={materialBG.items.patch} />
   </group>
 </>
)}



// export default ColorPicker