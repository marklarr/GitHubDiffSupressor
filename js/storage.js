function getMatchRegexes(callback) {
  chrome.storage.sync.get({
    match_regexes: ".*Pods\/.*\n.*\.xcdatamodel.*\n.*\.xcdatamodeld.*",
  }, function(items) {
    callback(items.match_regexes)
  });
}