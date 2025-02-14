import Hotel_visit_By_country from "@component/components/hotel_visit_by_country/hotel_visit_by_country"

const page =async ({params}) => {
params=await params
  return (
    <>
      <Hotel_visit_By_country params={params}/>
    </>
  )
}

export default page