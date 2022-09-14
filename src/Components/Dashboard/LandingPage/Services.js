import Service from "./Service";

const services = [
  {
    _id: "6320ae8f6efb42d45399ac0d",
    price: "$2,199.16",
    picture:
      "https://manufacturer-website-c6d47.web.app/static/media/banner1.dd397c4979ada777ab48.jpg",
    name: "Laptop Parts",
  },
  {
    _id: "6320ae8f251dd658f69c0616",
    price: "$2,583.08",
    picture:
      "https://cdn.mos.cms.futurecdn.net/fUBA5JX8DbGmSe6mnG5Sxb-970-80.jpg.webp",
    name: "Electronics Gadgets",
  },
  {
    _id: "6320ae8f0a474892cb033af3",
    price: "$2,356.34",
    picture: "https://i.ibb.co/H7SSRhx/Black-Friday-Social-Media-Banner-06.jpg",
    name: "Best Products",
  },
];

const Services = () => {
  return (
    <div className="my-28">
      <h1 className="text-3xl text-sky-600 mb-5">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
