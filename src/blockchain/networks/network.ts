import type { Network, Networks } from '@/lib/types/network';

const networks: Networks = {
  97: {
    contract: '0x123410253',
    token: '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  },
  11155111: {
    contract: '0x123410253',
    token: '0xd2880f53445D10F023bc958CB5C80a09b40F0c9c',
  },
  111: {
    contract: '0x9611e27152F71927437d2F1183A3d74C599B4A3f',
    token: '0x2868d708e442A6a940670d26100036d426F1e16b',
  },
};

export const getNetwork = (chainId?: number): Network => {
  if (chainId === undefined || !networks[chainId]) {
    return networks[97];
  }
  return networks[chainId];
};
