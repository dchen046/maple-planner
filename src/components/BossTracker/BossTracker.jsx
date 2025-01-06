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
           
            const [count, setCount] = useState(0);
            const updateCount = () => {
                if (count > 6) setCount(0);
                else if (boss === 'lotus' && diff === 'extreme' && count > 2) setCount(0);
                else if (boss === 'limbo' && count > 3) setCount(0); 
                else setCount( (count) => count + 1);
            }
            const onClick = (e) => {
                updateCount();
                character.bosses[boss][diff] = count;
                console.log(`This is the count: ${character.bosses[boss][diff]}`);
                console.log(character.bosses)
            }

            const variant = `outline-${colors[diff]}`;
            return (
                <Button 
                    key={index} 
                    variant={variant} className="m-1"
                    onClick={onClick}
                ></Button>
            );
        }))
    );
}

export default BossTracker;