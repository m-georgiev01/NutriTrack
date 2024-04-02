import './NotFound.css';

export function NotFound() {
  return (
    <div class="error-container d-flex justify-content-center align-items-center">
      <div class="">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
}
