function save_options() {
  chrome.storage.sync.set({
    match_globs: document.getElementById('match_globs').value,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    match_globs: null,
  }, function(items) {
    document.getElementById('match_globs').value = items.match_globs
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);