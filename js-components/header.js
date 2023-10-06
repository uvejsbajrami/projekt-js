export function initHeader(div) {
  div.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container">
    <a class=" navbar-brand " href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item login" href="index.html">Login</a></li>
            <li><a class="dropdown-item" href="index.html">Register</a></li>
            <li><a class="dropdown-item" href="#">LogOut</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}
