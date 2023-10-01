import React, { useState } from "react";

const CheckDeliveryServices = () => {
  const [service, setService] = useState<boolean>();
  const [pin, setPin] = useState<any>();

  const checkServiceAbility = async () => {
    let pins = await fetch("http://localhost:3000/api/pinCode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e: any) => {
    setPin(e.target.value);
  };

  return (
    <div>
      <div className="pin mt-6 flex space-x-2 text-sm">
        <input
          placeholder="Enter your pin code"
          onChange={onChangePin}
          className="px-2 border-2 border-gray-400 rounded-md"
          type="text"
        />
        <button
          onClick={checkServiceAbility}
          className="flex ml-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Check
        </button>
      </div>
      {!service && service != null && (
        <div className="text-red-700 text-sm mt-3">
          Sorry! we do not deliver to this pincode yet
        </div>
      )}

      {service && service != null && (
        <div className="text-green-700 text-sm mt-3">
          yay! This pin code is serviceable
        </div>
      )}
    </div>
  );
};

export default CheckDeliveryServices;
