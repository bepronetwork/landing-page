import Link from 'next/link'
import NotFoundIcon from '../assets/not-found-icon';
import Header from '../components/header';

export default function NotFound() {
  return <>
    <Header />
      <div className="row mt-5 pt-5">
        <div className="col d-flex justify-content-center mt-5 pt-5">
          <NotFoundIcon />
        </div>
      </div>
      <div className="row my-auto pt-4">
        <div className="col text-center">
          <h2 className="h2 text-white text-opacity-1 mb-2">
            The page you looking for was{" "}
            <span className="text-primary">not found.</span>
          </h2>
          <p className="mb-2">
            The link you followed may be broken or the page may have been moved.
          </p>
          <Link href="/">
            <button className="btn btn-primary rounded-pill smallCaption text-uppercase mt-3">
              back to homepage
            </button>
          </Link>
        </div>
      </div>
  </>
}
