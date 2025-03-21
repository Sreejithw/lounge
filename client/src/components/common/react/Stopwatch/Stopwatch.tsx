import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react'

const Stopwatch = () => {
    const [ seconds, setSeconds ] = useState<number | 0>(0);
    const [ isRunning, setIsRunning ] = useState<boolean>(false);
    const [ isPaused, setIsPaused ] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    function handleStart(){
        if(intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000);
        setIsRunning(true);
        setIsPaused(false);
    }

    function handlePause(){
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsPaused(true);
        setIsRunning(false)
    }

    function handleReset(){
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setSeconds(0);
        setIsRunning(false);
        setIsPaused(false);
    }


    return (
        <div className='flex flex-col justify-center items-center gap-4 border-2 border-gray-200 p-21'>
            <p>{seconds} time ellapsed</p>
            <div className='flex gap-4'>
                {
                    !isRunning && !isPaused && (
                        <Button onClick={handleStart} className='bg-green-700 hover:bg-green-800'>Start</Button>
                    )
                }
                {
                    isRunning && !isPaused && (
                        <Button onClick={handlePause} className='bg-blue-500 hover:bg-blue-800'>Pause</Button>
                    )
                }
                {
                    isPaused && (
                        <>
                            <Button onClick={handleStart} className='bg-blue-500 hover:bg-blue-800'>Resume</Button>
                            <Button onClick={handleReset} className='bg-red-500 hover:bg-red-800'>Stop</Button>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Stopwatch