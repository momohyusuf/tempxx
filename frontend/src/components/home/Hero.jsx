import { Link } from "react-router";
import CTAButton from "../ui/buttons/CTAButton";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-24 lg:py-16 gap-8 p-4">
      <div className="max-w-[500px]">
        <h1 className="text-3xl lg:6xl text-slate-800 font-semibold mb-6">
          Step Up Your Style with Dapper Shoes for Modern Gents
        </h1>
        <p className="text-lg font-light text-gray-500 mb-6">
          Stride with Pride in Footwear That’s Got You Covered, Offering
          Comfort, Elegance, and a Touch of Class for Every Occasion
        </p>

        <Link to={"/products"}>
          <CTAButton buttonText="Start Shopping" />
        </Link>
      </div>

      <div>
        <img className="w-[800px]" src="/hero.png" alt="LG shoes hero" />
      </div>
    </section>
  );
};

export default Hero;
