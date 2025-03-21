import { Button } from '@/components/ui/button'
import { BrickWall, Handshake, PartyPopper, Scissors, Scroll, SkullIcon } from 'lucide-react';
import { useState } from 'react';

type Weapon = 'rock' | 'paper' | 'scissors';

const RPS = () => {
    const [playerWeapon, setPlayerWeapon] = useState<Weapon | null>(null);
    const [computerWeapon, setComputerWeapon] = useState<Weapon | null>(null);
    const [gameStatus, setGameStatus] = useState<'playing' | 'done'>('playing');
    const weapons = ['rock', 'paper', 'scissors'] as const;

    const handleWeaponSelection = (weapon: Weapon) => {
        setPlayerWeapon(weapon);
        const randomIndex = Math.floor(Math.random() * weapons.length);
        setComputerWeapon(weapons[randomIndex]);
        setGameStatus('done');
    };

    function getGameResult(){
        let message = <></>;
        if(playerWeapon === computerWeapon){
            message = (
                <>
                    <Handshake className='size-10' />
                    <h1>It's a draw</h1>
                </>
            )
        }else if(playerWeapon === 'rock' && computerWeapon === 'scissors' || playerWeapon === 'scissors' && computerWeapon === 'paper' || playerWeapon === 'paper' && computerWeapon === 'rock'){
            message = (
                <>
                    <PartyPopper className='size-10' />
                    <h1>You win</h1>
                </>
            )
        } else{
            message = (
                <>
                    <SkullIcon className='size-10' />
                    <h1>You lose</h1>
                </>
            )
        }

        return (
            <div className='flex flex-col items-center justify-center'>
                { message }
            </div>
        )
    }

    function resetGame(){
        setPlayerWeapon(null);
        setComputerWeapon(null);
        setGameStatus('playing');
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            {
                gameStatus === 'done' ? (
                    <>
                        <h1>You chose {playerWeapon}</h1>
                        <h1>Computer chose {computerWeapon}</h1>
                        <h1>{getGameResult()}</h1>
                        <Button onClick={resetGame}>Play Again</Button>
                    </>
                ) : (
                    <>
                        <h1>Choose your weapon</h1>
                        <div className='flex gap-4'>
                        <Button onClick={() => handleWeaponSelection('rock')} className='w-44 h-52 bg-blue-400 hover:bg-blue-900 flex flex-col items-center justify-center gap-2'>
                            <BrickWall className='size-10' />
                            Rock
                        </Button>
                        <Button onClick={() => handleWeaponSelection('paper')} className='w-44 h-52 bg-blue-400 hover:bg-blue-900 flex flex-col items-center justify-center gap-2'>
                            <Scroll className='size-10' />
                            Paper
                        </Button>
                        <Button onClick={() => handleWeaponSelection('scissors')} className='w-44 h-52 bg-blue-400 hover:bg-blue-900 flex flex-col items-center justify-center gap-2'>
                            <Scissors className='size-10' />
                            Scissors
                        </Button>
                        </div>        
                    </>
                )
            }
        </div>
    );
}

export default RPS