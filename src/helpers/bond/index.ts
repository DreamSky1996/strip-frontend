import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/KANDY-MIM.png";
import AvaxTimeIcon from "../../assets/tokens/KANDY-AVAX.png";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "usdt",
    displayName: "USDT",
    bondToken: "USDT",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.RINKEBY]: {
            bondAddress: "0xA40C72Fd2B7d49588D65d86cbAA551c105C0Af96",
            reserveAddress: "0xaCc58E44C73394c2FC12af9697bFD1D790ecA4B9",
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
            bondAddress: "",
            reserveAddress: "",
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
            reserveAddress: "0xB30bC4d085464C1E7E26e859CBEF1F5338Df98bF",
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
            bondAddress: "",
            reserveAddress: "",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xaf9Fc588A9860F43236D6b390A538305A26AA81D",
});

// export default [mim, wavax, mimKandy, avaxKandy];
export default [mim];

