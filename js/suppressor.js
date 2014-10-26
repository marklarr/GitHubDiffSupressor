function newDiffSuprressedDiv() {
  return $.parseHTML('<div class="image"> <a href="#" class="js-details-target">Diff suppressed. Click to show.</a </div>')[0]
}


chrome.storage.sync.get({
    match_globs: '',
  }, function(items) {
    var match_globs = items.match_globs.split("\n")
    var file_diff_containers = $('div.meta.clearfix')

    file_diff_containers = file_diff_containers.filter(function(i, element) {

      // Check if it is already suppressed by GitHub
      if ($(element).siblings().filter(function(i, element) { return $(element).attr("class") == "image" }).length > 0) {
        return false
      }

      var match_happened = false
      // Check if there is a match on some glob against the file name
      $(match_globs).each(function(i, match_glob){
        if (minimatch($(element).attr("data-path"), match_glob)) {
          match_happened = true
        }
      });

      return match_happened
    })

    file_diff_containers.each(function(i, element) {
      $(element).next("div.data.highlight").addClass("suppressed")
      $(element).after(newDiffSuprressedDiv())
    })
});