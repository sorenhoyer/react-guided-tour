export default (str) => {
  return str.replace(new RegExp('[&<>"\']', 'g'), (match) => {
    if (match == '&') { return '&amp;'; }
    if (match == '<') { return '&lt;'; }
    if (match == '>') { return '&gt;'; }
    if (match == '"') { return '&quot;'; }
    if (match == "'") { return '&#x27;'; }
  });
}