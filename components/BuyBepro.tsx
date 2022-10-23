// @ts-ignore
import transakSDK from "@transak/transak-sdk";
import { Button } from "@taikai/rocket-kit";
import getConfig from "next/config";

const BuyBepro = () => {
  const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

  if (publicRuntimeConfig.buyToken === "false") return <></>;

  let transak = new transakSDK({
    apiKey: serverRuntimeConfig.transakApiKey,
    environment: serverRuntimeConfig.transakEnvironment,
    defaultCryptoCurrency: "BTC",
    cryptoCurrencyList: "BTC,ETH",
    defaultCryptoAmount: "0.005",
    hideMenu: true,
    isFeeCalculationHidden: true,
    disablePaymentMethods: "sepa_bank_transfer",
    themeColor: "4250E4",
    widgetHeight: "710px",
    widgetWidth: "450px",
    hostURL: typeof window !== "undefined" ? window.location.origin : "",
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
