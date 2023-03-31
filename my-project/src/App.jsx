import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
  const min = 1;
  const max = 650;

    const [pokemon,setPokemon]= useState({
      id: "",
      name: "",
      hp: 0,
      exp: 0,
      at: 0,
      eat: 0,
      def: 0
    }
)
    function getRandomInt(min, max){
      return (Math.floor(Math.random() * (max-min)+ min)

    )
}    

const [num,setNum] = useState( () => ((getRandomInt(1,650))))

  useEffect(() => {
    async function updatePokemon(){
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const data = await res.json()
        
        console.log(data)
        
        return(
        setPokemon({
              id: data.id,
              name: data.name,
              image: data.sprites.other.dream_world.front_default,
              hp: data.stats[0].base_stat,
              exp: data.stats[1].base_stat,
              at: data.stats[2].base_stat,
              eat:  data.stats[3].base_stat,
              def: data.stats[4].base_stat
            }))
          }
            updatePokemon();
    }, [num])


  return (
    <div>
      <main className="flex justify-center items-center  bg-[url('./images/bg-pattern-bottom.svg')] h-screen p-0" >
        <article className='bg-white relative rounded-3xl shadow-xl'>
          
            <img src="./images/bg-pattern-card.svg" className='block w-full  rounded-t-3xl'/>
          
          <div className='flex-row border-b-2 bg-white'>
            
            <img className='inline-flex bg-white absolute top-4 left-20 rounded-full h-[180px] w-[180px] ' src={pokemon.image}/>
            
            <h1 className='flex-col items-center capitalize text-center mt-16'><strong>{pokemon.name}</strong>   
            <span className='text-gray-300'>        {pokemon.hp} hp</span>
            </h1>
            <p className='text-gray-300 text-center py-5'>{pokemon.exp} exp</p>
          </div>
          <div className='flex place-content-around mt-8 border-b-2 text-center'>
            <div>
              <h3><strong>{pokemon.at}K</strong></h3>
              <p>Ataque</p>
            </div>
            <div>
              <h3><strong>{pokemon.eat}K</strong></h3>
              <p>Ataque Especial</p>
            </div>
            <div >
              <h3><strong>{pokemon.def}K</strong></h3>
              <p>Defensa</p>
            </div>
          </div>
          <div className='flex justify-center'>
          <button  onClick={() => setNum(getRandomInt(1,650))} className='my-5 border-2 rounded-md ' type="button">New Pokemon</button>
          </div>
        </article>
        
      </main>
    </div>
  )
}

export default App
