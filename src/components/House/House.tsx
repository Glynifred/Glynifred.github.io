import './house.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
// The 3d Stuff
let max: number = 50;
let diff:number = 1;
function CustomObject({path} : {path: string}){
    const obj = useLoader(OBJLoader,path)
    let reference = useRef<any>()

    useFrame(() => {
        reference.current.rotation.y += 0.01;  
    })
    
    return (<>
    <mesh ref = {reference} position={[0,1,0]} scale={[1.5,1.5,1.5]} rotation={[0,0.78,0]}>
        <primitive object={obj}  />
    </mesh>
    </>)
}
// this returns a cube to the 3d canvas
// it only works in the <Canvas> component used below
//NOTE: CUBE THINGS ARE IN RADIANS NOT DEGREES 
function Cube(){
    let x = 4;
    let y = 3;
    let z = 3;
    let cube = useRef<any>()
    // reference to this cube


    useFrame(() => {
        diff = 1;
        max = 50;
        cube.current.rotation.y += 0.01; 
        if (window.x > max)
            {
                max = window.x;
            }
            if (window.y > max)
                {
                    max = window.y;
                }
                if (window.z > max)
                    {
                        max = window.z;
                    }
        if (max > 50)
            {
                diff = max/50
            }
        if (window.x == 0)
            {
                window.x = 20;
                window.z = 20;
                window.y = 20;
            }
        if (window.z < (window.x/Math.sqrt(2))/2)
            {
                cube.current.scale.set(window.x/(diff * 10), (window.x/Math.sqrt(2))/(diff * 10), window.y/(diff * 10));
            }
             else
            {
            cube.current.scale.set(window.x/(diff * 10),window.z/(diff * 10) , window.y/(diff * 10)); 
            }
    })
    //the part that makes the Cube spin 
    
    return (<>
    <mesh rotation = {[0,0,0]} ref = {cube} position={[0,-1,-2]}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial />
    </mesh>
    
    </>)
    
}
function Roof(){
    let roof = useRef<any>()
    // reference to this cube


    useFrame(() => {
        roof.current.rotation.y += 0.01; 
        if (window.z < (window.x/Math.sqrt(2))/2)
            {
                roof.current.position.y = ((window.x/(diff * 10)/Math.sqrt(2))/2)-1
            }
            else
            {
                roof.current.position.y = ((window.z/(diff * 10))/2)-1
            }
        
        roof.current.scale.set(window.x/Math.sqrt(2)/(diff * 10),window.x/Math.sqrt(2)/(diff * 10), window.y/(diff * 10));
    })
    //the part that makes the Cube spin 
    
    return (<>
    <mesh rotation = {[0,0,0.785398]} ref = {roof} position={[0,-1,-2]}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial />
    </mesh>
    
    </>)
    
}


//the canvas for the 
export default function House(){
    return (
        <div id="canvas-container">
            <Canvas>
            <ambientLight intensity={0.01} />
            <directionalLight color="red" position={[0, 0, 5]} />
                <group>
                    <Cube/>
                    <Roof/>
                </group>
            </Canvas>
        </div>
    )
}

