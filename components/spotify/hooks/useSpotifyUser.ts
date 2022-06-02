import { useCallback,  useEffect,  useState } from "react"

export const useSpotifyUser = () => {
    const [user, setUser] = useState<SpotifyApi.CurrentUsersProfileResponse | null>(null)
    
    const setNewUser = useCallback(async() => {
        const res = await fetch('/api/spotify/me', {
            method: 'GET'
        })
        const data = await res.json()
        setUser(data)
    }, [])

    useEffect(() => {
        setNewUser()
    }, [])

    return user
}