type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(url, {});
}
