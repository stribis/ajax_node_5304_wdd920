
// Create an intance from the XMLHTTPRequest Class

var xmlhttp = new XMLHttpRequest()

xmlhttp.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {
    console.log(JSON.parse(this.responseText))
  } else {
    console.log ( this.status)
  }

}

// Enter destination of request
xmlhttp.open('GET', 'http://127.0.0.1:5500/00_unterricht/01_xml_http_request/data.json')
xmlhttp.send()
