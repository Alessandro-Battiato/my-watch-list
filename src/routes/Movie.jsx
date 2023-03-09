import { getMovieDetail } from "../utils/apis";

export async function loader({ params }) {
  const movie = await getMovieDetail(params.movieId);
  return { movie };
}
