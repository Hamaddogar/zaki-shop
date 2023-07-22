"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material'; // Assuming you are using Material-UI components
import common from '@/app/styles/common.module.css';

const SliderComponent = ({ children, autoPlay = false, slideInterval = 1000, direction = 'left' }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [allCardsVisible, setAllCardsVisible] = useState(false);

    useEffect(() => {
        // Check if all cards are visible when the component mounts or changes
        checkAllCardsVisible();

        // Start auto sliding if autoPlay is true
        if (autoPlay) {
            const intervalId = setInterval(() => {
                handleAutoSlide();
            }, slideInterval);
            return () => clearInterval(intervalId);
        }
    }, [autoPlay, slideInterval]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseOver = () => {
        // Check if all cards are visible when the mouse is over the slider
        checkAllCardsVisible();
    };

    const handleWheel = (e) => {
        if (allCardsVisible) {
            // Prevent vertical scrolling if all cards are fully visible
            e.preventDefault();
        } else {
            // Only scroll horizontally if some cards are not fully visible
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].clientX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleAutoSlide = () => {
        if (!allCardsVisible) {
            const container = containerRef.current;
            const slideWidth = container.clientWidth;
            const totalSlides = Math.ceil(container.scrollWidth / slideWidth);
            const currentSlide = Math.floor(container.scrollLeft / slideWidth);
            let nextSlide;

            if (direction === 'left') {
                nextSlide = currentSlide + 1;
                if (nextSlide >= totalSlides) {
                    // Loop back to the first card
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft = nextSlide * slideWidth;
                }
            } else if (direction === 'right') {
                nextSlide = currentSlide - 1;
                if (nextSlide < 0) {
                    // Loop back to the last card
                    container.scrollLeft = (totalSlides - 1) * slideWidth;
                } else {
                    container.scrollLeft = nextSlide * slideWidth;
                }
            }
        }
    };

    const checkAllCardsVisible = () => {
        const container = containerRef.current;
        setAllCardsVisible(container.scrollWidth <= container.clientWidth);
    };

    return (
        <Box
            className={common["slider-container"]}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseOver={handleMouseOver} // Check if all cards are visible when mouse is over
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            {children}
        </Box>
    );
};

export default SliderComponent;
