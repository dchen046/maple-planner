import { useState } from "react";
import { bossMap } from "../utility/BossMappings";

function Summary({ character }) {
    const [mesos, setMesos] = useState(0);
    let total = 0;
    let crystals = 0;

    const handleMesoCalc = () => {
        const bosses = Object.keys(bossMap).reverse();
        console.log(bosses);
        for (const boss in bosses) {
            if (crystals > 14) break;
            console.log('inside')
            let max = 0;
            for (const diff in bossMap[boss]) {
                const size = character.bossSize[boss][diff];
                const value = bossMap[boss][diff];
                max = Math.max(max, value / size);
                console.log(diff);
            }
            total += max;
            ++crystals;
        }
    }

    // handleMesoCalc();
    // setMesos((prev) => prev + total);
    // console.log('render')
    const mesosMsg = `Mesos Per Week: ${mesos}`;
    const crystalMsg = `Amount of Crystals Sold: ${crystals}`;


    return (
        <>
            <p>{mesosMsg}</p>
            <p>{crystalMsg}</p>
        </>
    )
}

export default Summary;