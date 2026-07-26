function handler(event) {
  var request = event.request;
  var host = request.headers.host.value.toLowerCase();

  if (host !== "www.prateeklab.com") {
    return request;
  }

  var rawQueryString = request.rawQueryString();
  var querySuffix = rawQueryString === undefined ? "" : "?" + rawQueryString;

  return {
    statusCode: 308,
    statusDescription: "Permanent Redirect",
    headers: {
      location: {
        value: "https://prateeklab.com" + request.uri + querySuffix,
      },
      "cache-control": {
        value: "public, max-age=3600",
      },
    },
  };
}
