export default response => {
  var Normalized = [];
  response.data.map(e => {
    var obj = {};
    obj.title = e.headline.main;
    obj.date = e.pub_date;
    obj.multimedia = e.multimedia[0].url;
    obj.snippet = e.snippet;
    obj.url = e.web_url;
    Normalized.push(obj);
  });
  return Normalized;
};
