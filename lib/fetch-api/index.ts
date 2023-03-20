import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

interface HttpResponse<T> extends Response {
	data?: T;
}

type THttpRequest = Omit<RequestInit, "method">;

const BEPRO_API_URL = publicRuntimeConfig.webnetUrl;

/** A wrapper for the Fetch API */
async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
	const response: HttpResponse<T> = await fetch(request);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	try {
		response.data = await response.json();
		return response;
	} catch (error) {
		throw new Error((error as unknown as Error).message);
	}
}

/** A get Request wrapper for the Fetch API
 * @param path the url path without prefixing `/`
 * @param args the `RequestInit` arguments
 */
export async function getRequest<T>(
	path: string,
	args: THttpRequest = {}
): Promise<HttpResponse<T>> {
	const request = new Request(BEPRO_API_URL + "/api/" + path, {
		method: "GET",
		...args,
	});
	return await http<T>(request);
}
