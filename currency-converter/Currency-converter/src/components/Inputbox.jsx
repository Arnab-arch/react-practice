import { useId } from "react";

function InputBox({
    label,
    amount,
    amountChange,
    Currencychange,
    Currencyoptions = [],
    selectCurrency = "USD",
    Amountdisabled = false,
    Currencydisabled = false,
    className = "",
}) {
    const amountId = useId();

    return (
        <div
            className={`
                bg-white/90
                rounded-2xl
                p-4
                flex
                shadow-md
                border
                border-gray-100
                ${className}
            `}
        >
            <div className="w-1/2">
                <label
                    htmlFor={amountId}
                    className="text-gray-500 mb-2 inline-block text-sm"
                >
                    {label}
                </label>

                <input
                    id={amountId}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={Amountdisabled}
                    onChange={(e) =>
                        amountChange &&
                        amountChange(Number(e.target.value))
                    }
                    className="
                        w-full
                        bg-transparent
                        outline-none
                        text-lg
                        font-semibold
                        text-gray-800
                    "
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-500 mb-2 w-full text-sm">
                    Currency
                </p>

                <select
                    value={selectCurrency}
                    onChange={(e) =>
                        Currencychange &&
                        Currencychange(e.target.value)
                    }
                    disabled={Currencydisabled}
                    className="
                        bg-gray-100
                        rounded-xl
                        px-3
                        py-2
                        outline-none
                        cursor-pointer
                        font-medium
                        text-gray-700
                    "
                >
                    {Currencyoptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;