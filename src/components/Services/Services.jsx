import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee2 from "../../assets/coffee/coffee2.png";
import coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "coffee black",
    subtitle:
      "بعد از تو زندگی ام در دل بی اقبالی است حال هر ثانیه ام حالتی از بی حالی است",
  },
  {
    id: 2,
    image: coffee2,
    title: "coffee lavazza",
    subtitle:
      "بعد از تو زندگی ام در دل بی اقبالی است حال هر ثانیه ام حالتی از بی حالی است",
  },
  {
    id: 3,
    image: coffee3,
    title: "coffee ice",
    subtitle:
      "بعد از تو زندگی ام در دل بی اقبالی است حال هر ثانیه ام حالتی از بی حالی است",
  },
];
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 0,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 150,
//       damping: 10,
//       ease: "easeInOut",
//     },
//   },
// };
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container mt-16 space-y-4">
      <div className="text-center max-w-lg mx-auto  space-y-2">
        <motion.h1
          className="text-3xl font-bold text-lightGray"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
          تازه و <span className="text-primary">خوشمزه</span>
        </motion.h1>
        <motion.p
          className="text-sm opacity-55 font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
        >
          دلم خلوتی ساده می‌خواهد … چند خطی شعر فروغ فرخزاد با دو فنجان قهوه کمی
          سکوت و او، که پایان هر قطعه دستش را زیر چانه بزند و بگوید: باز هم
          بخوان…
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <div className="text-center p-4 space-y-6" key={service.id}>
            <img
              src={service.image}
              alt="coffee-img"
              className="img-shadow2 max-w-[200px] mx-auto min-h-[220px] hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl text-primary font-bold">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
