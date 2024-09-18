interface Telegram {
  WebApp: {
    headerColor: string;
    expand: () => void;
  };
}

interface Window {
  Telegram: Telegram;
}
