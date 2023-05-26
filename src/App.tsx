import React, { FC, useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [emailServerValidation, setEmailServerValidation] = useState<null | boolean>(null)
  const [productType, setProductType] = useState("clothes");
  const [productTypeValidation, setProductTypeValidation] = useState<null | boolean>(null)
  const [productQuantity, setProductQuantity] = useState(0);
  const [productQuantityTypeValidation, setProductQuantityTypeValidation] = useState<null | boolean>(null)
  const [activeStep, setActiveStep] = useState(0);
  const [serverData, setServerData] = useState<null | { promotion: number }>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  console.log("##--re-render--##");

  const PLACEHOLDER_PROMOTION_DATA = {
    promotion: 5,
  };
  const fetchData = <T,>(data: T) => {
    return new Promise<T>((resolve) => setTimeout(() => resolve(data), 2000));
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serverValidation = await fetchData<{productQuantity: boolean}>({productQuantity: false})
      setProductQuantityTypeValidation(serverValidation.productQuantity);
      const result = await fetchData({ promotion: 20 });
      if(productQuantityTypeValidation === false){
        setHasError(true);
      }
      setServerData(result);
      setIsLoading(false);
      productQuantity > 2 && !hasError ? setActiveStep(2) : setActiveStep(1);
    } catch (e) {
      setHasError(false);
      setIsLoading(false);
      setServerData(PLACEHOLDER_PROMOTION_DATA);
    }
  };

  const onCloseClick = () => {
    // spot the error
    setProductQuantityTypeValidation(null)
    setIsLoading(false);
    setEmailServerValidation(null)
    setIsModalOpen(false);
    setServerData(null);
    setProductTypeValidation(null)
  }

  const onLastStepClose = () => {
    // spot another error
    setIsLoading(false);
    setEmailServerValidation(null)
    setIsModalOpen(false);
    setProductTypeValidation(null)
  }

  if (hasError) {
    return <div>Error</div>;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {isModalOpen && (
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-white pt-7 pb-10 px-5 rounded w-96">
              <CloseIcon
                onClick={onCloseClick}
                className="ml-auto mb-5 cursor-pointer"
              />
              {isLoading && "Loading..."}
              <div className="flex justify-between grow-1 mb-5">
                <button
                  className={`${
                    activeStep === 0 ? "bg-rose-900" : "bg-gray-400"
                  } px-2 py-3 rounded-l basis-1/3 border-r-2`}
                >
                  Step 1
                </button>
                <button
                  className={`${
                    activeStep === 1 ? "bg-rose-900" : "bg-gray-400"
                  } bg-gray-400 px-2 py-3 basis-1/3 border-r-2`}
                >
                  Step 2
                </button>
                <button
                  className={`${
                    activeStep === 2 ? "bg-rose-900" : "bg-gray-400"
                  } bg-gray-400 px-2 py-3 rounded-r basis-1/3`}
                >
                  Step 3
                </button>
              </div>

              {/*STEP 1*/}
              {activeStep === 0 && (
                <>
                  <h2 className="text-lg font-bold mb-5">Fill up the order</h2>
                  <form onSubmit={onSubmitHandler} className="flex flex-col">
                    <input
                      value={userEmail}
                      onChange={({ target: { value } }) => setUserEmail(value)}
                      className="p-2 mb-5 w-12/12 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm"
                      type="email"
                      name="email"
                      placeholder="your email"
                    />
                    <select
                      value={productType}
                      onChange={({ target: { value } }) =>
                        setProductType(value)
                      }
                      name="product"
                      className="p-2 mb-5 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm"
                    >
                      <option value="electronics">Electronics</option>
                      <option value="clothes">Clothes</option>
                    </select>
                    {productQuantityTypeValidation === false && <p className="text-red-700">Wrong quantity value!</p>}
                    <input
                      value={productQuantity}
                      onChange={({ target: { value } }) =>
                        setProductQuantity(Number(value))
                      }
                      name="quantity"
                      placeholder="quantity"
                      className="p-2 mb-5 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm"
                    />
                    <input
                      className="p-2 rounded-md bg-slate-700 text-white"
                      type="submit"
                      value="send"
                    />
                  </form>
                </>
              )}

              {/*STEP 2 */}
              {activeStep === 1 && (
                <>
                  <h2 className="text-lg font-bold mb-5">
                    Specific step for category clothes
                  </h2>
                  <button
                    onClick={() => setActiveStep(2)}
                    className="p-2 rounded-md bg-slate-700 text-white"
                  >
                    Go to summary
                  </button>
                </>
              )}

              {/*STEP 3*/}
              {activeStep === 2 && (
                <>
                  <h2 className="text-lg font-bold mb-5">Summary</h2>
                  <button onClick={onLastStepClose} className="p-2 rounded-md bg-slate-700 text-white">
                    Back to shopping!
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CloseIcon: FC<{ className: string; onClick: () => void }> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="15px"
    height="15px"
  >
    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
  </svg>
);
export default App;
