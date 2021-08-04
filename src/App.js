import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} alt="..." height="36"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div>
  <h3>Create new account</h3>
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Last Name</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">First Name</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Country</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      <div class="form-group col-md-6">
      <label for="inputCity">Province</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    </div>
  </div>
  <div class="form-group">
  </div>
  <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        I have read and understood
      </label>
    </div>
  <button type="submit" class="btn btn-primary">Create Customer</button>
</form>
        </div>
    </div>
  );
}

export default App;
