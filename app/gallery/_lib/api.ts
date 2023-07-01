const YOUNHA_LIBRARY_TOKEN = process.env.YOUNHA_LIBRARY_TOKEN
const BASE_URL = process.env.YOUNHA_LIBRARY_API_URL

async function fetchData(path: string, options: any = {}) {
    options['headers'] = options['headers'] || {}
    options['headers']['Authorization'] = `Token ${YOUNHA_LIBRARY_TOKEN}`
    return await fetch(`${BASE_URL}${path}`, options)
}

export interface PhotoFilter {
    search?: string,
    startDate?: string,
    endDate?: string,
    creatorId?: string | bigint,
    tags?: Array<string | bigint>
}

export async function getPhotoList(
    page?: string,
    ordering?: string,
    filter: PhotoFilter = {}
) {
    const params = new URLSearchParams()
    const setParams = (key: string, value: any) => {
        if (value) {
            params.append(key, value.toString())
        }
    }

    setParams("page", page)
    setParams("ordering", ordering)
    setParams("search", filter.search)
    setParams("start_date", filter.startDate)
    setParams("end_date", filter.endDate)
    setParams("creator", filter.creatorId)
    for (const tag of (filter.tags || [])) {
        setParams("tags", tag)
    }
    const res = await fetchData(`/photos/?${params.toString()}`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        return undefined
    }
    return res.json()
}

export async function getPhotoDetail(id: bigint) {
    const res = await fetchData(`/photos/${id}/`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        return undefined
    }
    return res.json()
}

export async function getCreatorList(page?: string) {
    const params = new URLSearchParams()
    if (page) {
        params.set('page', page)
    }
    const res = await fetchData(`/creators/?${params.toString()}`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        return undefined
    }
    return res.json()
}

export async function getCreatorDetail(id: bigint) {
    const res = await fetchData(`/creators/${id}/`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        return undefined
    }
    return res.json()
}

export async function getTagDetail(id: bigint) {
    const res = await fetchData(`/tags/${id}/`, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        return undefined
    }
    return res.json()
}
