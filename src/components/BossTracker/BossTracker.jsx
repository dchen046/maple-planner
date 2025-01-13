import { Button } from "react-bootstrap";
import { bossMap, colors } from "../utility/BossMappings"
import './BossTracker.css'
import { useState, useEffect, useRef } from "react";

function BossTracker({ character, setCharacters }) {
    return (
        <div className='boss-grid'>
            <CreateBossInfo character={character} setCharacters={setCharacters} />
        </div>
    )
}

function CreateBossInfo({ character, setCharacters }) {
    return (
        Object.keys(character.bossSize).map((boss, index) => {
            const src = `/bosses/${boss}.png`
            return (
                <div key={index}>
                    <img src={src} />
                    <div className="btn-container">
                        <CreateDiff character={character} boss={boss} setCharacters={setCharacters} />
                    </div>
                </div>
            );
        })
    );
}

function CreateDiff({character, boss, setCharacters }) {
    return (
        Object.keys(character.bossSize[boss]).map((diff, index) => {
            const [count, setCount] = useState(character.bossSize[boss][diff]);
            const isFirst = useRef(false);

            const updateCharBossSize = (level, value) => {
                const name = character.name;
                setCharacters( (prev) => ({
                    ...prev,
                    [name]: {
                        ...prev[name],
                        bossSize : {
                            ...prev[name].bossSize,
                            [boss] : {
                                ...prev[name].bossSize[boss],
                                [level] : value
                            }
                        }
                    }
                }));
            }

            const updateCharBoss = () => {
                Object.keys(character.bossSize[boss]).map((level) => {
                    if (level === diff) {
                        updateCharBossSize(level, count);
                    } else {
                        updateCharBossSize(level, 0);
                    }
                })
            }

            useEffect(() => {
                isFirst.current = true;
            },[]);
            
            

            useEffect(() => {
                if (!isFirst.current) {
                    if (count > 6) setCount(0);
                    else if (boss === 'lotus' && diff === 'extreme' && count > 2) setCount(0);
                    else if (boss === 'limbo' && count > 3) setCount(0);
                    updateCharBoss();
                } else {
                    isFirst.current = false;
                }
            }, [count]);

            const onClick = () => {
                console.log('clicked');
                setCount(character.bossSize[boss][diff] + 1);                
            }

            const variant = character.bossSize[boss][diff] === 0 ? `outline-${colors[diff]}` : `${colors[diff]}`;
            return (
                <Button
                    key={index}
                    variant={variant} className="m-1"
                    onClick={onClick}
                >
                    {character.bossSize[boss][diff] === 0 ? '' : character.bossSize[boss][diff]}
                </Button>
            );
        })
    )
}

export default BossTracker;