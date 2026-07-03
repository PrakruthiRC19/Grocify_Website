import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'


const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className="flex flex-row md:flex-row-reverse items-start gap-7">

                <div className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-20 aspect-square rounded-full">
                    <span>{item.icon}</span>
                </div>

                <div className="md:text-right">
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>

            </div>
        );
    });

    const rightValues = value.slice(2).map(item => {
        return (
            <div key={item.id} className="flex flex-row md:flex-row-reverse items-start gap-7">

                <div className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-20 aspect-square rounded-full">
                    <span>{item.icon}</span>
                </div>

                <div>
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>

            </div>
        );
    });

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20">

                <Heading highlight="Our" heading="value" />

                {/* ✅ FIXED RESPONSIVE LAYOUT */}
                <div className="flex flex-col md:flex-row gap-15 md:gap-5 mt-15">

                    {/* Left Values */}
                    <div className="md:min-h-100 gap-15 md:gap-40 flex flex-col">
                        {leftValues}
                    </div>

                    {/* Image */}
                    <div className="md:flex w-1/2 hidden">
                        <img src={Basket} alt="basket" />
                    </div>

                    {/* Right Values */}
                    <div className="md:min-h-100 gap-15 md:gap-40 flex flex-col">
                        {rightValues}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Values;

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />

    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable',
        icon: <FaLeaf />

    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        icon: <FaShieldAlt />

    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />

    },
]