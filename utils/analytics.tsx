import { useContext, createContext } from "react";
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
		this.disabled = options.disabled || true;
		this.debug = options.debug || false;
		if (this.debug) {
			console.log("GA is running");
		}
	}

	pushEvent(eventName: string, options?: EventOptions) {
		if (this.debug) {
			console.log(`Pushing event to Google Analytics ${JSON.stringify(event)}`);
		}

		if (!this.disabled) {
			GAEvent(eventName, options, publicRuntimeConfig.gaProperty);
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
