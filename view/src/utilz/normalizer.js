export default data => {
  var Normalized = [];
  for (let i = 0; i < data.length; i++) {
    var obj = {};
    obj.title = data[i].headline.main;
    obj.date = data[i].pub_date;
    data[i].multimedia[0] !== undefined
      ? (obj.multimedia = data[i].multimedia[0].url)
      : (obj.multimedia = null);
    obj.snippet = data[i].snippet;
    obj.url = data[i].web_url;
    Normalized.push(obj);
  }
  return Normalized;
};
