import FilterPage from "@/components/FilterPage"



const HomePage = async () => {
  const data = await fetch('http://localhost:5000/api/v1/animal')
  const animals = await data.json()

  const categoryData = await fetch('http://localhost:5000/api/v1/category')
  const categories = await categoryData.json()

  return (
    <div>
      <FilterPage animals={animals.data} categories={categories.data} />
    </div>
  )
}

export default HomePage