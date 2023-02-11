import { useEffect } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import * as PusherPushNotifications from "@pusher/push-notifications-web"

const beamsClient = new PusherPushNotifications.Client({
  instanceId: 'e49ba8ca-622e-4714-8d47-5497d8a32189',
})

export function App() {
  useEffect(() => {
    beamsClient.start()
      .then(() => beamsClient.addDeviceInterest('hello'))
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error)

    return () => {
      beamsClient.stop()
    }
  }, [])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Pusher Beams Demo</h1>
    </>
  )
}
