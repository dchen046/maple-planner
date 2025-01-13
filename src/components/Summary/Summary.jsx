import { bossMap } from "../utility/BossMappings";
import PropTypes from "prop-types";

function Summary({ character }) {
    let total = 0;
    let crystals = 0;
    const bosses = Object.keys(bossMap).reverse();
    const handleMesoCalc = () => {
        bosses.map((boss) => {
            Object.keys(bossMap[boss]).map((diff) => {
                const size = character.bossSize[boss][diff];
                const value = bossMap[boss][diff];
                if (size > 0) {
                    total += value / size
                    ++crystals;
                }
            })
        })
        
    }

    handleMesoCalc();
    let quant = 'M';
    if (total >= 1000) {
        total /= 1000;
        quant = 'B';
    }

    const mesosMsg = `Mesos Per Week: ${total} ${quant}`;
    const crystalMsg = `Amount of Crystals Sold: ${crystals}`;

    return (
        <>
            <p>{mesosMsg}</p>
            <p>{crystalMsg}</p>
        </>
    )
}

Summary.propTypes = {
    character: PropTypes.object.isRequired
}

export default Summary;