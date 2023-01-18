import { useContext, createContext } from "react";
import ReactGA from "react-ga";
import getConfig from "next/config";
import { event as GAEvent } from "nextjs-google-analytics";

const { publicRuntimeConfig } = getConfig();

type EventOptions = Record<string, any> & {
	category?: string;
	label?: string;
	value?: number;
	nonInteraction?: boolean;
	userId?: string;
};
class AnalyticsHelper {
	disabled = false;
	debug = false;

	init(options: { disabled: boolean; debug: boolean }) {
		console.log("init", options);
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

	pushEvent(eventName: string, options?: EventOptions) {
		console.log("eventName", eventName);
		console.log("options", options);
		if (this.debug) {
			console.log(`Pushing event to Google Analytics ${JSON.stringify(event)}`);
		}

		console.log("this.disabled", this.disabled);
		// if (!this.disabled) {
		GAEvent(eventName, options, publicRuntimeConfig.gaProperty);
		// }
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
