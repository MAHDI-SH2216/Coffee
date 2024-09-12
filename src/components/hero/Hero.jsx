import { motion } from "framer-motion";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="w-full min-h-[750px]">
        <div className="container">
          <Navbar />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-7xl font-bold leading-tight mr-14"
              >
                بلک کافی
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">عاشقان لایف استایل مشکی</h1>
                  <h1 className="text-sm leading-loose  opacity-55">
                    به ترکیبی از پاییز، دیت، قهوه، قدم زدن زیر بارون و هااا کردن
                    دستام از سرما نیاز دارم.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                src={CoffeeMain}
                alt="black coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow "
              />
              <div className="absolute z-10 w-[180px] h-[180px] rounded-full border-primary top-24 border-[20px] -left-16"></div>
              <div className="absolute -top-16 right-[60px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold  text-darkGray/40 leading-none">
                  بلک کافی
                </h1>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 max-lg:hidden"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight mr-14">
                بلک کافی
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">عاشقان لایف استایل مشکی</h1>
                  <h1 className="text-sm leading-loose  opacity-55">
                    به ترکیبی از پاییز، دیت، قهوه، قدم زدن زیر بارون و هااا کردن
                    دستام از سرما نیاز دارم.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
