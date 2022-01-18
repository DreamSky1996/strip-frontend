import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/KANDY-MIM.png";
import AvaxTimeIcon from "../../assets/tokens/KANDY-AVAX.png";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.RINKEBY]: {
            bondAddress: "0xeFc5eB216E05dA34d6a4cA90AcCD256c8b918E71",
            reserveAddress: "0xf1aAEB228FEDa61f546CB154F09dd758d32e573c",
        },
    },
    tokensInStrategy: "",
    // tokensInStrategy: "60500000000000000000000000",
});

export const wavax = new CustomBond({
    name: "wavax",
    displayName: "wAVAX",
    bondToken: "AVAX",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.RINKEBY]: {
            bondAddress: "0x3c9eA1a1c635907988D434f4eF249CDBA2f76e25",
            reserveAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        },
    },
    tokensInStrategy: "",
    // tokensInStrategy: "756916000000000000000000",
});

export const mimKandy = new LPBond({
    name: "mim_time_lp",
    displayName: "STRIP-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.RINKEBY]: {
            bondAddress: "",    
            reserveAddress: "0x2382C6F8e3A1937B4D099e7E7E5De56b154f844d",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xaf9Fc588A9860F43236D6b390A538305A26AA81D",
});

export const avaxKandy = new CustomLPBond({
    name: "avax_time_lp",
    displayName: "STRIP-AVAX LP",
    bondToken: "AVAX",
    bondIconSvg: AvaxTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.RINKEBY]: {
            bondAddress: "0x1EC222CF5898D592Fc6969f5eD6207bc6C20d086",
            reserveAddress: "0x3A577527C2194258dEcd06d65254d7EAb6af921C",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xaf9Fc588A9860F43236D6b390A538305A26AA81D",
});

// export default [mim, wavax, mimKandy, avaxKandy];
export default [mim];

