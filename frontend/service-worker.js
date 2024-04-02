import Fetchdata from "./Fetch";
import ApiUrl from "./config";

const urlBase64ToUint8array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
}
self.addEventListener("activate", async (e) => {
    const subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8array("BMpD7vFmWSvqV0Z4Fa4Y9h5PZCJUT_h7bFeKCsro6ZtXppSTYE73aQZwamqQaQGZOeiFvx3TzQCI5WBOlrWh-_8")
    })
    const response = await sendSubscriptionToBackend(subscription)
    console.log(response)
})

async function sendSubscriptionToBackend(subscription) {
    // Send the subscription object to your backend server
    // You can use Axios or fetch to make an HTTP request
    const response = await Fetchdata({
        url: `${ApiUrl}/subscribe`,
        obj: {
          headers: {
              'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(subscription),
        },
        authRequired: true
    })
  }
// =======================================

// Public Key:
// BMpD7vFmWSvqV0Z4Fa4Y9h5PZCJUT_h7bFeKCsro6ZtXppSTYE73aQZwamqQaQGZOeiFvx3TzQCI5WBOlrWh-_8

// Private Key:
// qTmJymzitzaxCbhlAAZbnj7iIx4cP9HvPHJ_BMu2g34

// =======================================