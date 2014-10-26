function save_options() {
  chrome.storage.sync.set({
    match_regexes: document.getElementById('match_regexes').value,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  getMatchRegexes(function(match_regexes) {
    document.getElementById('match_regexes').value = match_regexes
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);