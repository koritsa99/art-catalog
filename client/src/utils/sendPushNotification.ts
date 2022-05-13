export async function sendPushNotification(message: string): Promise<void> {
  if (Notification.permission === 'granted') {
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) {
      reg.showNotification(message);
    }
  }
}
