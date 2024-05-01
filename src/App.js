import './App.css';
import Article from './components/Article';
import NavBar from './components/NavBar';
import Title from './components/Title';
import imageOne from './blog-image-1.jpg'
import imageTwo from './blog-image-2.jpg'

function App() {
  const stories = [
    {
      date:"11/12/20",
      title:"On the Street in Brooklyn",
      image:imageOne,
      content:"In the gritty, vibrant streets of Brooklyn, fashion is a kaleidoscope of bold statements and fearless experimentation. From the cobblestone alleys of DUMBO to the bustling avenues of Williamsburg, every corner is a runway for the avant-garde. Hoodies adorned with neon graffiti art clash with vintage leather jackets, while oversized sunglasses obscure enigmatic gazes. Sneakers, worn like badges of honor, bear the scuffs and stories of urban exploration. Distressed denim, patched with eclectic fabric swatches, tells tales of individuality and rebellion. In Brooklyn, street fashion isn't just about what you wear—it's a manifesto of authenticity, a celebration of diversity, and a nod to the creative spirit that pulses through the borough's veins."
    },
    {
      date:"11/11/20",
      title:"Vintage in Vogue",
      image:imageTwo,
      content:`In the opulent world of "Vintage in Vogue," nostalgia reigns supreme as fashionistas journey back in time to rediscover the timeless elegance of bygone eras. From the glamorous flapper dresses of the roaring twenties to the sleek sophistication of 1960s mod fashion, every piece tells a story of style and refinement. Swirling chiffon skirts dance alongside tailored tweed jackets, while strands of pearls delicately adorn necklines like whispers of old Hollywood glamour. Vintage aficionados scour flea markets and boutique shops, seeking treasures that evoke the romance of yesteryear. With each carefully curated ensemble, they pay homage to the icons of fashion history, breathing new life into timeless classics and proving that true style is eternal. In the world of "Vintage in Vogue," fashion isn't just about what's new—it's about embracing the past with reverence and grace, creating a sartorial symphony that transcends time.`
    }
  ]
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Article content={stories[0]}/>
      <Article content={stories[1]}/>

    </div>
  );
}

export default App;
