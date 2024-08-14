// import type { LandingPage } from "$lib/types/sanity"
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import { queries } from "$lib/groq"

/** @type {import('./$types').PageLoad} */
export const load = (async () => {
    const home = await loadData(queries.home, {});
    const releases = await loadData(queries.releases, {});
    return { home, releases };
}) satisfies PageLoad;