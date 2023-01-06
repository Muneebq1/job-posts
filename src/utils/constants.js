export const GET_JOB_IDS_URL = `https://hacker-news.firebaseio.com/v0/jobstories.json`
export const GET_JOB_URL = `https://hacker-news.firebaseio.com/v0/item/`
export const GET_MORE_DATA = `https://news.ycombinator.com/item?id=`

export const getCols = (name, description, Url, time, i, Component ,id) => {
    if (((i + 1) % 3) === 1) {
        return (
            <Component
                name={name}
                description={description}
                time={time}
                url={Url}
                id = {id}
            />
        )
    } else if (((i + 1) % 3) === 2) {

        return (
            <Component
                name={name}
                description={description}
                time={time}
                url={Url}
            />

        )
    } else if (((i + 1) % 3) === 0) {

        return (
            <Component
                name={name}
                description={description}
                time={time}
                url={Url}

            />

        )
    }

}