import { ProductsList } from "@/app/features/products";
import { BasketProvider } from "@/app/features/basket";
import { Navbar } from "@/app/components";

function Home() {
  return (
    <BasketProvider>
      <Navbar />
      <ProductsList />
    </BasketProvider>
  );
}

export default Home;
