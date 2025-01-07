import { Button } from "react-bootstrap";
import { bossMap, colors } from "../utility/BossMappings"
import './BossTracker.css'
import { useState, useEffect } from "react";

function BossTracker({ character, updateChar }) {
    return (
        <div className='boss-grid'>
            <CreateBossInfo character={character} updateChar={updateChar} />
        </div>
    )
}

function CreateBossInfo({ character, updateChar }) {
    return (
        Object.keys(bossMap).map((boss, index) => {
            const src = `/bosses/${boss}.png`
            return (
                <div key={index}>
                    <img src={src} />
                    <div className="btn-container">
                        <CreateDiff character={character} boss={boss} updateChar={updateChar} />
                    </div>
                </div>
            );
        })
    );
}

function CreateDiff({ character, boss, updateChar }) {

    return (
        Object.keys(bossMap[boss]).map(((diff, index) => {
            const [count, setCount] = useState(() => {
                return character.bossSize[boss][diff];
            });

            const updateCount = () => {
                setCount((count) => ++count);       
            }

            useEffect( () => {
                if (count > 6) setCount(1);
                else if (boss === 'lotus' && diff === 'extreme' && count > 2) setCount(1);
                else if (boss === 'limbo' && count > 3) setCount(1);
                updateCharBossSize();
            },[count])

            const updateCharBossSize = () => {
                const name = character.name;
                updateChar((prev) => {
                    return (
                        {
                            ...prev,
                            [name]: {
                                ...prev[name],
                                bossSize: {
                                    ...prev[name].bossSize,
                                    [boss]: {
                                        ...prev[name].bossSize[boss],
                                        [diff]: count
                                    }
                                }
                            }
                        }
                    )
                });

            }

            const onClick = () => {
                updateCount();
                updateCharBossSize();
                // console.log(count);
                // console.log(character.bossSize[boss]);
                // e.currentTarget.textContent = count;
            }

            const variant = `outline-${colors[diff]}`;
            return (
                <Button
                    key={index}
                    variant={variant} className="m-1"
                    onClick={onClick}
                >
                    {count === 0 ? '' : count}
                </Button>
            );
        }))
    );
}

export default BossTracker;