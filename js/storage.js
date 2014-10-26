function getMatchGlobs(callback) {
  chrome.storage.sync.get({
    match_globs: ".*Pods\/.*\n.*\.xcdatamodel.*\n.*\.xcdatamodeld.*",
  }, function(items) {
    callback(items.match_globs)
  });
}