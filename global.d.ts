declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      on?: (eventName: string, callback: (...args: any[]) => void) => void;
      removeListener?: (
        eventName: string,
        callback: (...args: any[]) => void
      ) => void;
      request?: (args: {
        method: string;
        params?: unknown[];
      }) => Promise<unknown>;
    };
  }
}
