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
    <div className="row my-auto pt-3">
      <div className="col text-center">
        <h2>The page you were looking for was <span className="text-primary">not found</span></h2>
        <p>The link you followed may be broken or the page may have been moved.</p>
        <Link href="/"><button className="btn btn-primary text-uppercase">back to homepage</button></Link>
      </div>
    </div>
  </>
}
