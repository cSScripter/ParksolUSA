export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 p-6 md:px-10 mt-auto">
      <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-10 items-center text-[15px] font-[400] font-montserrat text-center">
        <span>ParksolUSA Theme © 2025</span>
        <span>Address: 7735 E Gelding Dr. Scottsdale, AZ 85260</span>
        <span>
          Phone: <span className="text-white">(480)231-6601</span>
        </span>
        <span>
          E-mail:{" "}
          <a href="mailto:info@parksolusa.com" className="text-white">
            info@parksolusa.com
          </a>
        </span>
      </div>
    </footer>
  );
}
