
interface IUser{
    user_id?:number
    username: string
    password ?: string
    full_name?: string
    email?: string
    status?: boolean
    img?:string
    role_id?: number
}

export default IUser