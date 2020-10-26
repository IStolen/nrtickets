export async function requestPost(url, setResult) {
  fetch(url,
    {
      method: 'POST',
      headers:
      {
        'Content-Type': 'text/html; charset=utf-8'
      },
    }).then((response) => {
      return response.text()
    }).then((data) => {
      setResult(data)
    })
}
