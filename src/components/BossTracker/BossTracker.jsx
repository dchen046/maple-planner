import { bossMap } from "../utility/BossMappings"
import './BossTracker.css'

function BossTracker() {
    return(
        <>
            <div className="boss-grid">
                <CreateBossInfo />
            </div>
        </>
    )
}

function CreateBossInfo() {
    return (
        Object.keys(bossMap).map( (boss,index) => {
            const src = `/bosses/${boss}.png`
            // console.log(src)
            return (
                <>
                    <img src={src} />
                </>


                // Object.keys(bossMap[boss]).map( ((diffi, index) => {
                //     return (
                //         <p key={index}>
                //             {boss} : {diffi} : {bossMap[boss][diffi]}
                //         </p>
                //     )
                //     console.log(`${boss}: ${diffi} : ${bossMap[boss][diffi]}`);
                // }))
            )
        })
    )
}

export default BossTracker;