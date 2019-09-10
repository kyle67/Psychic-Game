<script>
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;

  document.querySelector(“#wins”).innerHTML = wins;
}
        </script>