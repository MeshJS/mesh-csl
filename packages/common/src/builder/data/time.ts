import { Network } from '../../types';

export type Slot = number;
export type UnixTime = number;
export type SlotConfig = {
    zeroTime: UnixTime;
    zeroSlot: Slot;
    slotLength: number; // number of milliseconds.
};

export const SLOT_CONFIG_NETWORK: Record<Network, SlotConfig> = {
    mainnet: { zeroTime: 1596059091000, zeroSlot: 4492800, slotLength: 1000 }, // Starting at Shelley era
    preview: { zeroTime: 1666656000000, zeroSlot: 0, slotLength: 1000 }, // Starting at Shelley era
    preprod: {
        zeroTime: 1654041600000 + 1728000000,
        zeroSlot: 86400,
        slotLength: 1000,
    }, // Starting at Shelley era
    /** Customizable slot config (Initialized with 0 values). */
    testnet: { zeroTime: 0, zeroSlot: 0, slotLength: 0 },
};

export const slotToBeginUnixTime = (slot: Slot, slotConfig: SlotConfig): UnixTime => {
    const msAfterBegin = (slot - slotConfig.zeroSlot) * slotConfig.slotLength;
    return slotConfig.zeroTime + msAfterBegin;
};

// slotToBeginUnixTime and slotToEndUnixTime are identical when slotLength == 1. So we don't need to worry about this now.
// function slotToEndUnixTime(slot: Slot, slotConfig: SlotConfig): UnixTime {
//   return slotToBeginUnixTime(slot, slotConfig) + (slotConfig.slotLength - 1);
// }

export const unixTimeToEnclosingSlot = (unixTime: UnixTime, slotConfig: SlotConfig): Slot => {
    const timePassed = unixTime - slotConfig.zeroTime;
    const slotsPassed = Math.floor(timePassed / slotConfig.slotLength);
    return slotsPassed + slotConfig.zeroSlot;
};

// const timeNow = new Date().getTime();
// console.log(timeNow);

// console.log(unixTimeToEnclosingSlot(timeNow, SLOT_CONFIG_NETWORK.Preprod));
