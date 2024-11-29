import FilterPage from "@/components/FilterPage"
import { getAnimals } from "@/services/AnimalServices"


const HomePage = async () => {
  const animals = await getAnimals()
  console.log(animals);

  return (
    <div>
      <FilterPage animals={animals.data} />
    </div>
  )
}

export default HomePage