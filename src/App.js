// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// (Optional) Import Bootstrap JavaScript if needed
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container-sm border border-success p-2 mb-2">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
            <div className="col">
              <h1 class="display-8">Assets:_______</h1>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger">
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-sm border border-success p-2 mb-2">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">Value</th>
              <th scope="col">YTD-Change $</th>
              <th scope="col">YTD-Change %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Stocks</th>
              <td>stockValue</td>
              <td>YTD-Change $</td>
              <td>YTD-Change %</td>
            </tr>
            <tr>
              <th scope="row">Bonds</th>
              <td>bondValue</td>
              <td>YTD-Change $</td>
              <td>YTD-Change %</td>
            </tr>
            <tr>
              <th scope="row">SPAXX</th>
              <td>cashValue</td>
              <td>YTD-Change $</td>
              <td>YTD-Change %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
