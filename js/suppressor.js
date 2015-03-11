function newDiffSuprressedDiv() {
  return $.parseHTML('<div class="image"> <a href="#" class="js-details-target">Diff suppressed.</a </div>')[0]
}


getMatchRegexes(function(match_regexes) {
  var match_regexes = match_regexes.split("\n")
  var file_diff_containers = $('.file')

  file_diff_containers = file_diff_containers.filter(function(i, element) {

    // Check if it is already suppressed by GitHub
    if ($(element).siblings().filter(function(i, element) { return $(element).attr("class") == "image" }).length > 0) {
      return false
    }

    var match_happened = false
    // Check if there is a match on some glob against the file name
    $(match_regexes).each(function(i, match_glob){
      var regex = new RegExp(match_glob)
      if ($(element).find('.file-header').attr("data-path").match(regex)) {
        match_happened = true
      }
    });

    return match_happened
  })

  file_diff_containers.each(function(i, element) {
    $(element).find("div.data.highlight").addClass("suppressed")
    $(element).after(newDiffSuprressedDiv())
  })
});