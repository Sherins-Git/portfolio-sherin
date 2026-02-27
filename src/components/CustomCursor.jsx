import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: -200, y: -200 });
    const ring = useRef({ x: -200, y: -200 });
    const rafId = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            // Snap dot immediately
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        const animate = () => {
            // Smooth lag for the ring
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        const onMouseOver = (e) => {
            const tag = e.target.tagName.toLowerCase();
            const isClickable =
                tag === 'a' ||
                tag === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.dataset.cursor === 'pointer' ||
                getComputedStyle(e.target).cursor === 'pointer';

            if (isClickable) {
                dotRef.current?.classList.add('cursor-hover');
                ringRef.current?.classList.add('cursor-hover');
            } else {
                dotRef.current?.classList.remove('cursor-hover');
                ringRef.current?.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseover', onMouseOver);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            {/* Outer trailing ring */}
            <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
            {/* Inner dot */}
            <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
        </>
    );
}
