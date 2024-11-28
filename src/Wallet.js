import { useTonAddress } from "@tonconnect/ui-react";

function Wallet() {
  const userFriendlyAddress = useTonAddress();
  console.log(typeof userFriendlyAddress);
  return (
    userFriendlyAddress && (
      <div>
        <span>User-friendly address: {userFriendlyAddress}</span>
      </div>
    )
  );
}

export default Wallet;
