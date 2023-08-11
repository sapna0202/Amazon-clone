import React from "react";
import { Link, useNavigate} from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function SubTotal(props) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  gap-3 p-4 ">
      <div className="text-[0.78rem] text-green-900 leading-[0.3rem]">
        <p>
          <span>
            <CheckCircleIcon />
          </span>{" "}
          Your first order qualifies for FREE Delivery. Select this option at
          checkout. Details
        </p>
      </div>

      <div className="text-[1rem] mt-3">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket?.length} items):<strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <div className="flex justify-center gap-2 text-sm">
          <input type="checkbox" />
          <p>This order contains a gift</p>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-yellow-500 rounded-lg px-4 py-1 text-base sm:text-base md:text-base lg:text-base xl:text-base"
          onClick={e=>navigate('/payment')}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default SubTotal;
