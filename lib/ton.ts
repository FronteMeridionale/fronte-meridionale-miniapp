export interface WalletState {
  address: string | null;
  isConnected: boolean;
}

export const MOCK_WALLET: WalletState = {
  address: null,
  isConnected: false,
};

export function formatAddress(address: string): string {
  if (address.length <= 20) return address;
  return `${address.slice(0, 10)}…${address.slice(-8)}`;
}
