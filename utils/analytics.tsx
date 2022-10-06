import { useContext, createContext } from "react";
import ReactGA from "react-ga";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

class AnalyticsHelper {
  disabled = true;
  debug = false;

  init(options: { disabled: boolean; debug: boolean }) {
    this.disabled = options.disabled || true;
    this.debug = options.debug || false;
    ReactGA.initialize(publicRuntimeConfig.gaProperty, {});
    if (this.debug) {
      console.log("GA is running");
    }
  }

  pageview(url: string) {
    if (this.debug) {
      console.log(`Tracking a page view ${url}`);
    }
    if (!this.disabled) {
      ReactGA.pageview(url);
    }
  }

  pushEvent(event: ReactGA.EventArgs) {
    if (this.debug) {
      console.log(`Pushing event to Google Analytics ${JSON.stringify(event)}`);
    }
    if (!this.disabled) {
      ReactGA.event(event);
    }
  }

  disable(disableAnalytics: boolean) {
    this.disabled = disableAnalytics;
  }
}

const helper = new AnalyticsHelper();

export const AnalyticsContext = createContext(helper);

export const useAnalytics = () => {
  const value = useContext(AnalyticsContext);
  return value;
};

export default helper;
