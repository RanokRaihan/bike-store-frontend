const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Bikes Sold Monthly" },
    { number: "15+", label: "Years Experience" },
    { number: "3", label: "Store Locations" },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
