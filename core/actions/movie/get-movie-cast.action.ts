import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Can't load cast by id";
  }
};
