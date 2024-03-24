import { calculateTxHash } from '../dist/cjs';

describe('Transaction', () => {
    test('calculateTxHash', () => {
        const txHex =
            '84a30081825820cc24e6f228e04d98c80088c830a363fff80a2437959f826e1a5b4c01ec912d0f010182a200581d605ca51b304b1f79d92eada8c58c513e969458dcd27ce4f5bc47823ffa011a001c0242a200581d601fd5bab167338971d92b4d8f0bdf57d889903e6e934e7ea38c7dadf1011b0000000252fe47ac021a00028759a100818258201557f444f3ae6e61dfed593ae15ec8dbd57b8138972bf16fde5b4c559f41549b5840b8317b840d4e908cd6a69bad0d294a593a40812749ccacdea993c660952a57cdf89428934973848a1437820b9f0e5784ddc01eb049415d4189977fdc32fda904f5f6';
        const expectedHash = 'c162f8abf8405b1d7f8f7677bc391b2d8f1911e73035cb97634b2dede72404cf';
        expect(calculateTxHash(txHex)).toBe(expectedHash);
    });
});
