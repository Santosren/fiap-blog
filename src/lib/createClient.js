import * as contentful from 'contentful'
import { space_id, access_token } from '../constants'

export const client = contentful.createClient({
    space: space_id,
    accessToken: access_token,
})