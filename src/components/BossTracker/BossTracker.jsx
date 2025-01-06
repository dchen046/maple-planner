import { Button } from "react-bootstrap";
import { bossMap, colors } from "../utility/BossMappings"
import './BossTracker.css'
import { useState } from "react";

function BossTracker({ character }) {
    return (
        <div className='boss-grid'>
            <CreateBossInfo character={character}/>
        </div>
    )
}

function CreateBossInfo({ character }) {
    return (
        Object.keys(bossMap).map((boss, index) => {
            const src = `/bosses/${boss}.png`
            return (
                <div key={index}>
                    <img src={src} />
                    <div className="btn-container">
                        <CreateDiff character={character} boss={boss} />
                    </div>
                </div>
            );
        })
    );
}

function CreateDiff({ character, boss }) {
    return (
        Object.keys(bossMap[boss]).map(((diff, index) => {
            const [count, setCount] = useState(() => {
                return character.bossSize[boss][diff];
            });

            const updateCount = () => {
                if (count >= 6) setCount(1);
                else if (boss === 'lotus' && diff === 'extreme' && count >= 2) setCount(1);
                else if (boss === 'limbo' && count >= 3) setCount(1); 
                else setCount( (count) => count + 1);
            }
            const onClick = (e, render=false) => {
                if (render) {
                    e.currentTarget.textContent = count;
                    return;
                }
                updateCount();
                character.bossSize[boss][diff] = count;
                // console.log(`This is the saved count: ${character.bossSize[boss][diff]}`);
                // console.log(character.bossSize)
                e.currentTarget.textContent = count;
            }

            const variant = `outline-${colors[diff]}`;
            return (
                <Button 
                    key={index} 
                    variant={variant} className="m-1"
                    onClick={onClick}
                >
                    {character.bossSize[boss][diff]}
                </Button>
            );
        }))
    );
}

export default BossTracker;