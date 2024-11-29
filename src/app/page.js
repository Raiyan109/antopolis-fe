import HomeComponent from "@/components/HomeComponent"




const HomePage = async () => {
  const data = await fetch('https://antopolis-ts.vercel.app/api/v1/animal')
  const animals = await data.json()

  const categoryData = await fetch('https://antopolis-ts.vercel.app/api/v1/category')
  const categories = await categoryData.json()

  return (
    <div>
      <HomeComponent animals={animals.data} categories={categories.data} />
    </div>
  )
}

export default HomePage