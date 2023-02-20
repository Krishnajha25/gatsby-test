declare global {
    interface Window {
      zaraz: {
        track: () => void;
        // add any other properties or methods of the 'zaraz' object
      };
    }
  }