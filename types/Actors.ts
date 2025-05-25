export interface ActorsI {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
};
export interface PersonI extends ActorsI {
    also_known_as: string[]
    biography: string
    birthday: string
    deathday: any
    homepage: any
    imdb_id: string
    place_of_birth: string
}