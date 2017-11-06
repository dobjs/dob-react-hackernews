export interface IRequest {
  url: string;
  method?: string;
  params?: {
    [x: string]: any
  };
}

export default async (info: IRequest) => {
  if (!info.method) {
    info.method = 'get';
  }

  if (!info.params) {
    info.params = {};
  }

  let requestFetch: Response = null;

  if (info.method === 'get') {
    const query = info.params && Object.keys(info.params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(info.params[k]))
      .join('&');

    requestFetch = await fetch(query ? (info.url + '?' + query) : info.url, {
      method: info.method
    });
  } else {
    const formBody = [];
    Object.keys(info.params).forEach(property => {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(info.params[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    });

    requestFetch = await fetch(info.url, {
      method: info.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      } as any,
      mode: 'cors',
      body: formBody && formBody.join('&')
    });
  }

  let requestResult: any = {};

  try {
    requestResult = await requestFetch.json();
  } catch (error) {
    //
  }

  if (requestFetch.status !== 200) {
    throw Error(requestResult.message);
  }

  return requestResult;
};
