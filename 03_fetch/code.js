
// fetch('data.json').then(response => {
//   response.json().then( json => {
//     console.log(json)
//   })
// })

async function getData () {

  try {
    let response = await fetch('data.json')
    let data = await response.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
  

}


getData()