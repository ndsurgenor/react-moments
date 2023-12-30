import rest from 'msw';

const baseURL = "https://nds-drf-api-b69fd84855e5.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 2,
            username: "ndsurgenor",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 2,
            profile_image: "https://res.cloudinary.com/dzgxvsnpr/image/upload/v1/media/../default_profile_n85cdj.jpg",
        }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    }),
] 