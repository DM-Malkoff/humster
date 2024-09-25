interface Telegram {
  WebApp: {
    headerColor: string;
    expand: () => void;
    initDataUnsafe: any;
    BackButton: any;
  };
}

interface Window {
  Telegram: Telegram;
}
