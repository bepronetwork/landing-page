import GlobalStyle from "../styles/global-style";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../config/apolloClient";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import getConfig from "next/config";
import { AnalyticsContext, useAnalytics } from "@/utils/analytics";
import CookieConsent from "components/CookieConsent";

const { publicRuntimeConfig } = getConfig();

const IS_ANALYTICS_DISABLED = publicRuntimeConfig.gaDisabled || true;
const IS_ANAYTICS_DEBUG_ENABLED = publicRuntimeConfig.gaDebug || false;

function MyApp({ Component, pageProps }: AppProps) {
	const analytics = useAnalytics();
	const apolloClient = useApollo(pageProps);

	if (IS_ANALYTICS_DISABLED === false) {
		analytics.init({
			disabled: false,
			debug: IS_ANAYTICS_DEBUG_ENABLED === true,
		});
	} else {
		analytics.disable(true);
	}

	return (
		<>
			<GlobalStyle />
			<GoogleAnalytics
				debugMode={publicRuntimeConfig.gaDebug}
				trackPageViews={
					process.env.NODE_ENV === "production" || !IS_ANALYTICS_DISABLED
				}
				gaMeasurementId={publicRuntimeConfig.gaProperty}
			/>

			<AnalyticsContext.Provider value={analytics}>
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
				</ApolloProvider>
			</AnalyticsContext.Provider>

			<CookieConsent />
		</>
	);
}

export default MyApp;
