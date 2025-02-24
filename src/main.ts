import { mount } from 'svelte'
import App from './App.svelte'
import './styles/app.scss'
import './styles/print.scss'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
