/** 
 *  GROQ queries for Sanity CMS
 *  https://www.sanity.io/docs/groq
 */
export const queries = {
    home: '*[_id == "home"][0]',
    releases: '*[_type == "release"]'
}