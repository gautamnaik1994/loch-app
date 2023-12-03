import { useRef, useState } from "react";

const Draggable = ({ children }) => {
    const containerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });
    const handleDragStart = (e) => {
        if (!containerRef.current) return
        const slider = containerRef.current.children[0];
        const startX = e.pageX - slider.offsetLeft;
        const startY = e.pageY - slider.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
    }
    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!containerRef.current) return
    }
    const handleDrag = (e) => {
        if (!isMouseDown || !containerRef.current) return;
        e.preventDefault();
        const slider = containerRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const moveX = (x - mouseCoords.current.startX) * 1.5;
        const moveY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - moveX;
        slider.scrollTop = mouseCoords.current.scrollTop - moveY;
        console.log(moveX, moveY)
    }

    return (
        <div ref={containerRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
            {children}
        </div>
    );
};

export default Draggable;
