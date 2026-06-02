import { useState } from "react";
import useCurrencyInfo from "./hooks/Currencyinfo";
import { InputBox } from "./components";
import "./App.css";

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center px-4"
            style={{
                background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
        >
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
                    <h1 className="text-3xl font-bold text-white text-center mb-2">
                        Currency Converter
                    </h1>

                    <p className="text-white/70 text-center mb-6">
                        Real-time Exchange Rates
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-2">
                            <InputBox
                                label="From"
                                amount={amount}
                                amountChange={(amount) =>
                                    setAmount(amount)
                                }
                                Currencyoptions={options}
                                Currencychange={(currency) =>
                                    setFrom(currency)
                                }
                                selectCurrency={from}
                            />
                        </div>

                        <div className="relative w-full h-2">
                            <button
                                type="button"
                                onClick={swap}
                                className="
                                    absolute
                                    left-1/2
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    bg-white
                                    text-indigo-600
                                    rounded-full
                                    shadow-lg
                                    px-4
                                    py-2
                                    font-bold
                                    hover:scale-110
                                    transition-all
                                    duration-200
                                "
                            >
                                ⇅
                            </button>
                        </div>

                        <div className="w-full mt-4 mb-6">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                Currencyoptions={options}
                                Currencychange={(currency) =>
                                    setTo(currency)
                                }
                                selectCurrency={to}
                                Amountdisabled
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                                w-full
                                bg-gradient-to-r
                                from-indigo-500
                                to-purple-600
                                text-white
                                font-semibold
                                py-3
                                rounded-xl
                                shadow-lg
                                hover:scale-[1.02]
                                transition-all
                                duration-300
                            "
                        >
                            Convert {from} → {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;