export default function HomeSection() {
  return (
    <section className="w-screen h-[500px] md:h-[800px] bg-[url('/parkinglot.jpg')] bg-cover bg-center relative">
      {/* Overlay for better contrast OPTIONAL TEST LATER */}
      <div className="absolute inset-0 bg-black/20"></div> 

      {/* Text container, stays above overlay */}
      <div className="relative flex items-start md:items-center justify-center h-full px-4 pt-16 md:pt-0">
        <h1 className="text-center">
          We Take<br className="md:hidden" /> <span className="font-bold">Parking</span><br />
         to a Whole<br className="md:hidden" /> <span className="font-bold">New Level</span>
        </h1>
      </div>
    </section>
  );
}