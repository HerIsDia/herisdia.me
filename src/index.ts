import { registerSW } from 'virtual:pwa-register';
registerSW({
  onRegistered(swr) {
    console.log(`SW registered: ${swr}`);
  },
  onRegisterError(error) {
    console.log('SW registration error', error);
  },
  onNeedRefresh() {
    window.location.reload();
  },
});

