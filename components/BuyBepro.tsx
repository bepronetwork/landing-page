// @ts-ignore
import transakSDK from "@transak/transak-sdk";
import { Button } from "@taikai/rocket-kit";
import getConfig from "next/config";

const BuyBepro = () => {
  const { publicRuntimeConfig } = getConfig();

  if (publicRuntimeConfig.buyToken === "false") return <></>;

  let transak = new transakSDK({
    apiKey: publicRuntimeConfig.transakApiKey,
    environment: "STAGING",
    defaultCryptoCurrency: "BTC",
    cryptoCurrencyList: "BTC,ETH",
    defaultCryptoAmount: "0.005",
    hideMenu: true,
    isFeeCalculationHidden: true,
    disablePaymentMethods: "sepa_bank_transfer",
    themeColor: "4250E4",
    widgetHeight: "710px",
    widgetWidth: "450px",
    hostURL: typeof window !== "undefined" ? window.location.origin : null,
  });

  return (
    <Button
      icon="bepro-mark"
      iconPosition="right"
      color="white"
      txtColor="blue500"
      value="Buy BEPRO"
      action={() => {
        transak.init();
      }}
      rounded
    />
  );
};

export default BuyBepro;
