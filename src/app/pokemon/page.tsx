export default async function PokemonPage(){
    // const res = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const data = await res.json()

    return (
        <div>
            <h1>First 10 Pokémon</h1>
            <ul>
                {data.results.map((pokemon: { name: string }) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}