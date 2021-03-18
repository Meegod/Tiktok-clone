import './App.css';
import Videocard from './Videocard';
function App() {
  return (
    <div className="App">
   <div className="app__top">
   {/*image at the top*/}
   <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffr.followersnet.com%2Fwp-content%2Fuploads%2F2019%2F01%2FTikTok.png&f=1&nofb=1"
   className="app__logo"/>
   
   <h1 className="app__text">Reels</h1>
   </div>
   <div className="app__videos">
   {/*Container of app__videos()scrollable container*/}
    
<Videocard />



   </div>

    </div>
  )
}

export default App;
