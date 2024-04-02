// In your Vue component
export default {
    data() {
      return {
        serviceWorkerRegistration: null,
        pushNotificationSupported: false,
        userSubscribed: false
      };
    },
    mounted() {
      this.checkPushNotificationSupport();
      this.registerServiceWorker();
    },
    methods: {
      async checkPushNotificationSupport() {
        if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
          this.pushNotificationSupported = true;
        }
      },
      async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
          try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            this.serviceWorkerRegistration = registration;
            this.checkSubscription();
          } catch (error) {
            console.error('Service worker registration failed:', error);
          }
        } else {
          console.warn('Service workers are not supported.');
        }
      },
      async checkSubscription() {
        const subscription = await this.serviceWorkerRegistration.pushManager.getSubscription();
        this.userSubscribed = !!subscription;
      },
    //   async subscribeToPushNotifications() {
    //     try {
    //       const subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
    //         userVisibleOnly: true,
    //         applicationServerKey: 'YOUR_APPLICATION_SERVER_KEY'
    //       });
    //       // Send the subscription details to your backend
    //       await this.sendSubscriptionToBackend(subscription);
    //       this.userSubscribed = true;
    //     } catch (error) {
    //       console.error('Failed to subscribe to push notifications:', error);
    //     }
    //   },
    //   async sendSubscriptionToBackend(subscription) {
    //     // Send the subscription object to your backend server
    //     // You can use Axios or fetch to make an HTTP request
    //     try {
    //       await axios.post('/subscribe', subscription);
    //       console.log('Subscription sent to backend:', subscription);
    //     } catch (error) {
    //       console.error('Failed to send subscription to backend:', error);
    //     }
    //   }
    }
  };
  