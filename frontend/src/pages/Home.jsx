import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Hero />

      <div className="flex justify-center gap-6 py-10 flex-wrap">
        <Card
          title="Handwoven Saree"
          description="Traditional handloom saree crafted by skilled artisans."
        />

        <Card
          title="Wooden Craft"
          description="Beautiful handmade wooden artwork."
        />

        <Card
          title="Handmade Pottery"
          description="Unique pottery products made using traditional techniques."
        />
      </div>
    </>
  );
}

export default Home;