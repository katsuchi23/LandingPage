"use client"
import { useState } from 'react';
// import CharacterSelection from './projectlist';
import SlidingDoor from './door';

export default function Project() {
    const [isDoorOpen, setIsDoorOpen] = useState(false); // Controls door opening state

    // Function to handle the door animation complete event
    const handleDoorComplete = () => {
        setIsDoorOpen(true);
    };

    return (
        <div className='flex'>
            <p>I haven&apos;t finished this page</p>

            {/* <CharacterSelection /> */}
            {/* Render the page first then the animation play */}

            {!isDoorOpen && <SlidingDoor onComplete={handleDoorComplete} />}
        </div>
    );
}
