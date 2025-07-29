import { useRef, useState, useEffect} from 'react'
import { Canvas as FabricCanvas } from 'fabric';

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvas, setCanvas] = useState<FabricCanvas | null>(null);

    useEffect(() => {
        if (canvasRef.current && !canvas) {
            const initCanvas = new FabricCanvas(canvasRef.current, {
                width: 800,
                height: 600,
                backgroundColor: 'white',
            });

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            }
        }
    }, [canvas])

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Canvas;