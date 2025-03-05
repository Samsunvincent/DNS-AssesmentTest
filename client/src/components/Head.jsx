export default function Head() {
    return (
      <div className="relative w-full h-[250px] md:h-[350px]">
        {/* Background Image */}
        <img
          src="blackbg.jpg"
          alt="Background"
          className="w-full h-full object-hidden"
        />
  
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Main Heading */}
          <h1 className="text-xl md:text-3xl font-bold">MENU</h1>
  
          {/* Small Text Below */}
          <div className="mt-2 text-sm md:text-base space-y-1">
            <p>Please take a look at our menu featuring food, drinks, and brunch.</p>
            <p>If you'd like to place an order, use the "Order Online" button below.</p>
          </div>
        </div>
      </div>
    );
  }
  