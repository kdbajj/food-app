import { useState, useEffect } from 'react'
import './App.css'
import FoodCard from './components/FoodCard/FoodCard'
import TagMenu from './components/TagMenu/TagMenu'
import SideBar from './components/SideBar/SideBar'

const TEMP_DATA = [
  {
    name: 'Makaron',
    image:
      'https://mediaconvert.kukbuk.pl/ksTNHdwFDa7biY17BBiWpov4JEeRSOx4uNtbqEs6RrM/fill/1418/1682/fp:0.5:0.5/1/aHR0cHM6Ly9tZWRp/YS5rdWtidWsucGwv/bWVkaWEvaW1hZ2Vz/LzIwMTkvMDMtMTgv/ZmV0dHVjaW5lMV90/aW5pZmllZF90aW5p/ZmllZC5qcGc.jpg',

    tag: ['Pasta'],
  },
  {
    name: 'Zapiekanka',
    image:
      'https://images.aws.nestle.recipes/original/c6627deb1dc1c58e56beee298f1710fb_1500zapiekanka_ziemniaczana_z_mięsem_mielonym__50_copy.jpg',

    tag: ['Vegetarian'],
  },
  {
    name: 'Zupa krem',
    image:
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa-krem-z-pieczonej-papryki-01.jpg',
    tag: ['Vegan', 'Soup', 'Vegetarian'],
  },

  {
    name: 'Gofry',
    image:
      'https://www.tvokazje.pl/img/cms/zdjęcia%20blog%20schema/gofry_beligjskie.jpg',
    tag: ['Desert', 'Vegetarian'],
  },

  {
    name: 'Tosty',
    image: 'https://hurtidetal.pl/i/1/_art/24066/5756826165beeb6468a06c.jpg',
    tag: ['Breakfast', 'Meat'],
  },
]

function App() {
  const [activeTag, setActiveTag] = useState('All')
  const tags = ['All', 'Vegan', 'Vegetarian', 'Soup', 'Pasta']
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const filteredDishes = TEMP_DATA.filter((dish) =>
      activeTag === 'All' ? true : dish.tag.includes(activeTag)
    )

    setDishes(filteredDishes)
  }, [activeTag])

  return (
    <div className="App">
      <SideBar />
      <header className="App-header">
        <div className="logo-container">
          <div className="logo">
            <img src="./images/Logo.png" alt="Logo"></img>
          </div>
        </div>
        <h1 className="text">Explore recipes</h1>
      </header>
      <div style={{ display: 'flex' }} className='tags-container'>
        {tags.map((tag) => (
          <TagMenu activeTag={activeTag} tagName={tag} onClick={setActiveTag} />
        ))}
      </div>
      <div className="cardsContainer">
        {dishes.map((food) => (
          <FoodCard name={food.name} image={food.image} tags={food.tag} />
        ))}
      </div>
    </div>
  )
}

export default App
