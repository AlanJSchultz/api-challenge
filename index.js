const baseUrl = 'https://api.spacexdata.com/v3/history';
const sectionNews = document.getElementById("news");

function grabData() {
  fetch(baseUrl)
  .then(result => result.json())
  .then(json => {
    console.log(json)
  
  for (let i = 0; i < json.length; i++) {
    let title = json[i].title
    let flightDate = json[i].event_date_utc
    let details = json[i].details
    let article = json[i].links.article
    console.log(flightDate, details)
    
    let header = document.createElement("h3")
    let para = document.createElement("p")
    let link = document.createElement("a")

    header.innerHTML = title
    para.innerHTML = flightDate + ": " + details
    link.innerHTML = "Click here for News Article"
    link.setAttribute("href", article)
    link.setAttribute("target", "blank")

    sectionNews.appendChild(header)
    sectionNews.append(para)
    sectionNews.append(link)
   }
  });
}
grabData();
