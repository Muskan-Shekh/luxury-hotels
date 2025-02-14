'use client'
import HomeRender from "@component/components/home/HomeRender";
import SquarePayment from "@component/modals/SquarePaymentGateway";


export default function page() {
  return (
    <>
    <div style={{
          backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center center"}}>
            {/* <SquarePayment/> */}
    <HomeRender  />
    </div>
    </>
  );
}
