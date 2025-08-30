const BecomeDriver = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="h-[300px] md:h-[400px] rounded-[40px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}d.1.jpg`}
          alt="Become a Driver"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Become a Driver</h2>
        <p className="text-gray-600 mb-6">
          Join our premium car rental service and start earning by driving luxury cars.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BecomeDriver;
