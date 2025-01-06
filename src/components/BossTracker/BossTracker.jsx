import { bossMap } from "../utility/BossMappings"
import './BossTracker.css'

function BossTracker() {
    return (
        <div className='boss-grid'>
            <CreateBossInfo />
        </div>
    )
}

function CreateBossInfo() {
    return (
        Object.keys(bossMap).map((boss, index) => {
            const src = `/bosses/${boss}.png`
            return (
                <div key={index}>
                    <img src={src} />
                    <CreateDiff boss={boss} />
                </div>
            );
        })
    );
}

function CreateDiff({ boss }) {
    return (
        Object.keys(bossMap[boss]).map(((diff, index) => {
            return (
                <div key={index}>
                    <p>{diff}</p>
                </div>
            );
        }))
    );
}

export default BossTracker;