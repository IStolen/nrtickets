import { useState }from 'react';

export default function RequestPost(url){
  const [responseState, setResponseState] = useState('')
  fetch(url, 
  {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'text/html; charset=utf-8'
    },
  }).then((response) =>
  {
    return response.text()
  }).then((data) =>
  {
    console.log(data)
    setResponseState(data)
  })
  ; 
  return (
    responseState
  );
}
