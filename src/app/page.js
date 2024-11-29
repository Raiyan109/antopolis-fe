import FilterPage from "@/components/FilterPage"



const HomePage = async () => {
  let data = await fetch('http://localhost:5000/api/v1/animal')
  let animals = await data.json()
  console.log(animals, 'from page.js');


  return (
    <div>
      <FilterPage animals={animals.data} />
    </div>
  )
}

export default HomePage