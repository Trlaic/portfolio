import * as THREE from 'three'
import styles from './GeometryBox.module.scss'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const GeometryBox = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseEnterRef = useRef(false)
    function handleMouse() {
        mouseEnterRef.current = !mouseEnterRef.current
    }

    useEffect(() => {
        const sizes = {
            height: canvasRef.current?.clientHeight,
            width: canvasRef.current?.clientWidth
        }
        const aspectRatio = (sizes.width && sizes.height) ? sizes.width/sizes.height : 0
        
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
        camera.position.z = 1.75
        scene.add(camera)

        const controls = new OrbitControls(camera, canvasRef.current as HTMLCanvasElement)
        controls.enableDamping = true

        const geometry = new THREE.BoxGeometry(1, 1, 1, 3, 3, 3)
        const material = new THREE.MeshBasicMaterial({color: 0x0B6623, wireframe: true})
        const mesh = new THREE.Mesh(geometry, material)

        scene.add(mesh)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current as HTMLCanvasElement
        })
        renderer.setSize(sizes.width as number, sizes.height as number)
        renderer.setClearColor(0x141414)
        renderer.render(scene, camera)
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            if(!mouseEnterRef.current) mesh.rotation.y = elapsedTime * 1.5

            controls.update()
        
            renderer.render(scene, camera)
        
            window.requestAnimationFrame(tick)
        }
        tick()
    }, [])
    
    return (
        <>
            <canvas onMouseLeave={handleMouse} onMouseEnter={handleMouse} ref={canvasRef} className={styles.webgl}></canvas>
        </>
    )
}

export default GeometryBox