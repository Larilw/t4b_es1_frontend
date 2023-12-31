export async function fetchDados(url: string, method: string, content?: any) {
  console.log(url);
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (content !== undefined) {
    options.body = JSON.stringify(content);
  }

  console.log("options", options);

  const response = await fetch("http://192.168.1.102:8080/" + url, options);
  const dados = await response.json();

  if (!response.ok) {
    throw new Error(dados.message);
  }

  return dados;
}
