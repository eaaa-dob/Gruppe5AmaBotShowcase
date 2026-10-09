import './index.css';
import BotCard from './components/BotCard';
import {data} from '../public/data';

const initialData = data

function App() {

  return (
<>
  <div>
    {initialData.map((bot) => (
    <BotCard
    key={bot.id}
    developer={bot.developer}
    thumbnail={bot.thumbnail}

  />
    ))}
  </div>
  </>
  
  )
};
export default App
